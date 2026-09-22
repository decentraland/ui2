import { AdvancedNavigatorUAData } from '@dcl/hooks'
import { OperativeSystem } from '../components/DownloadButton/DownloadButton.types'

// The architecture each platform's current installer is published for. macOS
// also has an `amd64` entry, but it points at the legacy Electron build named
// "Decentraland Outdated" — never the target of an explicit `?os=macOS` request.
const DEFAULT_ARCHITECTURE_BY_OS: Record<OperativeSystem, string> = {
  [OperativeSystem.MACOS]: 'arm64',
  [OperativeSystem.WINDOWS]: 'amd64'
}

const isSupportedOperativeSystem = (os: string | null | undefined): os is OperativeSystem =>
  os === OperativeSystem.MACOS || os === OperativeSystem.WINDOWS

/**
 * Resolves the user-agent data to use for a platform the visitor explicitly
 * asked for (the `?os=` query param behind the "Also available on…" links).
 *
 * Returns a NEW object — never mutates the input. The input is `@dcl/hooks`'
 * module-level cache, shared by every component in the session: mutating it
 * leaked the override into unrelated consumers with no way to undo it, and left
 * memoized renders (icon, href) reading the pre-override values while the click
 * handler read the post-override ones.
 *
 * The same reference is returned when there is nothing to override, so callers
 * can safely use the result as a `useMemo` dependency.
 */
const resolveUserAgentDataForOs = (
  userAgent: AdvancedNavigatorUAData | undefined,
  os: string | null | undefined
): AdvancedNavigatorUAData | undefined => {
  if (!userAgent || !isSupportedOperativeSystem(os) || userAgent.os.name === os) {
    return userAgent
  }

  return {
    ...userAgent,
    os: { ...userAgent.os, name: os },
    cpu: { ...userAgent.cpu, architecture: DEFAULT_ARCHITECTURE_BY_OS[os] }
  }
}

/**
 * @deprecated Mutates the shared `@dcl/hooks` user-agent cache in place, and
 * sets an `unknown` architecture for macOS that matches no published artifact
 * (so the download silently degraded to opening the download page). Use
 * `resolveUserAgentDataForOs`, which returns a new object.
 */
const setUserAgentArchitectureDefaultByOs = (userAgent: AdvancedNavigatorUAData, os: OperativeSystem): AdvancedNavigatorUAData => {
  if (os === OperativeSystem.MACOS) {
    userAgent.os.name = OperativeSystem.MACOS
    userAgent.cpu.architecture = 'unknown'
  } else if (os === OperativeSystem.WINDOWS) {
    userAgent.os.name = OperativeSystem.WINDOWS
    userAgent.cpu.architecture = 'amd64'
  }
  return userAgent
}

export { resolveUserAgentDataForOs, setUserAgentArchitectureDefaultByOs }
