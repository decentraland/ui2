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
 *  - rejects with error if it doesn't detect anything within the timeout
 *
 * IMPORTANT: call within a user gesture (onclick).
 */
export function launchDesktopApp(opts: JumpInOptions = {}): Promise<boolean> {
  const { timeoutMs = 1200, userAgentData } = opts

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

  window.location.assign(target)

  return new Promise<boolean>((resolve, reject) => {
    const t = setTimeout(() => {
      cleanup()
      const success = opened
      if (!success) {
        reject(new Error("Failed to open desktop app"))
      } else {
        resolve(success)
      }
    }, timeoutMs)
    if (opened) {
      clearTimeout(t)
      cleanup()
      resolve(true)
    }
  })
}
