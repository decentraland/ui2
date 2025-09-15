import { AdvancedNavigatorUAData } from "@dcl/hooks/cjs/hooks/useAdvancedUserAgentData"

type JumpInOptions = {
  position?: string
  realm?: string
  timeoutMs?: number
  userAgentData?: AdvancedNavigatorUAData
}

type WindowWithProcess = Window & { process: { type: string } }
type ProcessWithVersions = NodeJS.Process & { versions: { electron?: string } }

function buildDecentralandUrl(opts: JumpInOptions) {
  const params = new URLSearchParams()
  if (opts.position) params.set("position", opts.position)
  if (opts.realm) params.set("realm", opts.realm)
  return `decentraland://?${params.toString()}`
}

function isElectronApp(): boolean {
  return (
    (typeof window !== "undefined" &&
      typeof (window as unknown as WindowWithProcess).process === "object" &&
      (window as unknown as WindowWithProcess).process.type === "renderer") ||
    (typeof process !== "undefined" &&
      typeof (process as unknown as ProcessWithVersions).versions ===
        "object" &&
      !!(process as unknown as ProcessWithVersions).versions.electron) ||
    (typeof navigator === "object" &&
      typeof navigator.userAgent === "string" &&
      navigator.userAgent.includes("Electron"))
  )
}

/**
 * Attempts to open the desktop app and resolves:
 *  - true if it detects visibility/focus loss within the timeout
 *  - false if the scheme is not registered, other error occurs, or timeout reached
 *
 * IMPORTANT: call within a user gesture (onclick).
 */
export function launchDesktopApp(opts: JumpInOptions = {}): Promise<boolean> {
  const { timeoutMs = 750, userAgentData } = opts

  const isMobile = userAgentData?.mobile || userAgentData?.tablet

  if (isMobile || isElectronApp()) {
    return Promise.resolve(false)
  }

  const target = buildDecentralandUrl(opts)
  let opened = false

  const onLoseFocus = () => {
    opened = true
  }

  const cleanup = () => {
    document.removeEventListener("visibilitychange", onVis)
    window.removeEventListener("pagehide", onLoseFocus)
    window.removeEventListener("blur", onLoseFocus)
  }

  const onVis = () => {
    if (document.visibilityState === "hidden") onLoseFocus()
  }

  document.addEventListener("visibilitychange", onVis, { passive: true })
  window.addEventListener("pagehide", onLoseFocus, { passive: true })
  window.addEventListener("blur", onLoseFocus, { passive: true })

  try {
    window.location.assign(target)
  } catch (error) {
    // Handle synchronous errors (like scheme not registered)
    cleanup()
    return Promise.resolve(false)
  }

  return new Promise<boolean>((resolve) => {
    const t = setTimeout(() => {
      cleanup()
      if (opened) {
        resolve(true)
      } else {
        resolve(false)
      }
    }, timeoutMs)

    if (opened) {
      clearTimeout(t)
      cleanup()
      resolve(true)
    }
  })
}
