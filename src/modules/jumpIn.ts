import { AdvancedNavigatorUAData } from "@dcl/hooks/cjs/hooks/useAdvancedUserAgentData"

type JumpInOptions = {
  position?: string
  realm?: string
  timeoutMs?: number
  fallbackUrl?: string
  userAgentData?: AdvancedNavigatorUAData
}

function buildDecentralandUrl(opts: JumpInOptions) {
  const params = new URLSearchParams()
  if (opts.position) params.set("position", opts.position)
  if (opts.realm) params.set("realm", opts.realm)
  return `decentraland://?${params.toString()}`
}

function isElectronApp(): boolean {
  return (
    (typeof window !== "undefined" &&
      typeof (window as unknown as { process: { type: string } }).process ===
        "object" &&
      (window as unknown as { process: { type: string } }).process.type ===
        "renderer") ||
    (typeof process !== "undefined" &&
      typeof (process as unknown as { versions: { electron?: string } })
        .versions === "object" &&
      !!(process as unknown as { versions: { electron?: string } }).versions
        .electron) ||
    (typeof navigator === "object" &&
      typeof navigator.userAgent === "string" &&
      navigator.userAgent.includes("Electron"))
  )
}

/**
 * Attempts to open the desktop app and resolves:
 *  - true if it detects visibility/focus loss within the timeout
 *  - false if it doesn't detect anything and does fallback (optional)
 *
 * IMPORTANT: call within a user gesture (onclick).
 */
export function launchDesktopApp(opts: JumpInOptions = {}): Promise<boolean> {
  const { timeoutMs = 1200, fallbackUrl, userAgentData } = opts

  // Use userAgentData if provided, otherwise fallback to basic checks
  const isMobile = userAgentData
    ? userAgentData.mobile || userAgentData.tablet
    : /Android|iPhone|iPad|iPod/.test(navigator.userAgent) ||
      (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1)

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

  return new Promise<boolean>((resolve) => {
    const t = setTimeout(() => {
      cleanup()
      const success = opened
      if (!success && fallbackUrl) {
        try {
          window.location.href = fallbackUrl
        } catch {
          // Ignore errors
        }
      }
      resolve(success)
    }, timeoutMs)
    if (opened) {
      clearTimeout(t)
      cleanup()
      resolve(true)
    }
  })
}
