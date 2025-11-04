import { useEffect, useRef, useState } from "react"
import { PreviewMessageType } from "@dcl/schemas/dist/dapps/preview"
import {
  IPreviewControllerWithSocialEmotes,
  createController,
  isControllerReady,
} from "./WearablePreview.controller"

export const useWearablePreviewController = (
  previewId: string,
  externalController?: IPreviewControllerWithSocialEmotes
): {
  controllerRef: React.RefObject<IPreviewControllerWithSocialEmotes | null>
  isReady: boolean
} => {
  const controllerRef = useRef<IPreviewControllerWithSocialEmotes | null>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Use external controller if provided, otherwise create one
    const previewController = externalController ?? createController(previewId)
    controllerRef.current = previewController

    // Check if already ready
    if (isControllerReady(previewId)) {
      setIsReady(true)
      return
    }

    // Get the iframe to check readiness
    const iframe = document.getElementById(previewId) as HTMLIFrameElement
    if (!iframe) {
      console.error(`Could not find iframe with id="${previewId}"`)
      return
    }

    // Store contentWindow reference for stable comparison
    const iframeWindow = iframe.contentWindow
    if (!iframeWindow) {
      console.error(
        `Iframe contentWindow is not accessible for id="${previewId}"`
      )
      return
    }

    // Listen for the LOAD message to know when controller is ready
    const handleMessage = (event: MessageEvent) => {
      // Verify message is from our iframe and controller is actually ready
      if (
        event.data?.type === PreviewMessageType.LOAD &&
        isControllerReady(previewId)
      ) {
        setIsReady(true)
      }
    }

    window.addEventListener("message", handleMessage)

    return () => {
      window.removeEventListener("message", handleMessage)
      setIsReady(false)
      controllerRef.current = null
    }
  }, [previewId, externalController])

  return { controllerRef, isReady }
}
