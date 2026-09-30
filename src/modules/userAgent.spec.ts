import { AdvancedNavigatorUAData } from '@dcl/hooks'
import { resolveUserAgentDataForOs } from './userAgent'
import { OperativeSystem } from '../components/DownloadButton/DownloadButton.types'

const buildUserAgentData = (overrides: Partial<AdvancedNavigatorUAData> = {}): AdvancedNavigatorUAData => ({
  browser: { name: 'Safari', version: '17.0' },
  engine: { name: 'WebKit', version: '605.1' },
  os: { name: OperativeSystem.MACOS, version: '14.0' },
  cpu: { architecture: 'arm64' },
  mobile: false,
  tablet: false,
  ...overrides
})

describe('resolveUserAgentDataForOs', () => {
  describe('when no operative system is requested', () => {
    it('should return the same reference so callers can memoize on it', () => {
      const userAgent = buildUserAgentData()

      expect(resolveUserAgentDataForOs(userAgent, null)).toBe(userAgent)
      expect(resolveUserAgentDataForOs(userAgent, undefined)).toBe(userAgent)
      expect(resolveUserAgentDataForOs(userAgent, '')).toBe(userAgent)
    })
  })

  describe('when the requested operative system is not one we publish', () => {
    it('should return the same reference', () => {
      const userAgent = buildUserAgentData()

      expect(resolveUserAgentDataForOs(userAgent, 'Linux')).toBe(userAgent)
      expect(resolveUserAgentDataForOs(userAgent, 'windows')).toBe(userAgent)
    })
  })

  describe('when the requested operative system is the one already detected', () => {
    it('should return the same reference', () => {
      const userAgent = buildUserAgentData()

      expect(resolveUserAgentDataForOs(userAgent, OperativeSystem.MACOS)).toBe(userAgent)
    })
  })

  describe('when there is no user agent data yet', () => {
    it('should return undefined', () => {
      expect(resolveUserAgentDataForOs(undefined, OperativeSystem.WINDOWS)).toBeUndefined()
    })
  })

  describe('when Windows is requested from a macOS visitor', () => {
    it('should report Windows on the published amd64 architecture', () => {
      const result = resolveUserAgentDataForOs(buildUserAgentData(), OperativeSystem.WINDOWS)

      expect(result?.os.name).toBe(OperativeSystem.WINDOWS)
      expect(result?.cpu.architecture).toBe('amd64')
    })

    it('should not mutate the input, which is a cache shared across the session', () => {
      const userAgent = buildUserAgentData()

      resolveUserAgentDataForOs(userAgent, OperativeSystem.WINDOWS)

      expect(userAgent.os.name).toBe(OperativeSystem.MACOS)
      expect(userAgent.cpu.architecture).toBe('arm64')
    })

    it('should preserve every unrelated field', () => {
      const userAgent = buildUserAgentData({ mobile: true, tablet: true })

      const result = resolveUserAgentDataForOs(userAgent, OperativeSystem.WINDOWS)

      expect(result?.browser).toEqual(userAgent.browser)
      expect(result?.engine).toEqual(userAgent.engine)
      expect(result?.os.version).toBe(userAgent.os.version)
      expect(result?.mobile).toBe(true)
      expect(result?.tablet).toBe(true)
    })
  })

  describe('when macOS is requested from a Windows visitor', () => {
    it('should report macOS on arm64, the architecture the current installer is published for', () => {
      const windowsUserAgent = buildUserAgentData({
        os: { name: OperativeSystem.WINDOWS, version: '11' },
        cpu: { architecture: 'amd64' }
      })

      const result = resolveUserAgentDataForOs(windowsUserAgent, OperativeSystem.MACOS)

      expect(result?.os.name).toBe(OperativeSystem.MACOS)
      // 'unknown' (the previous behavior) matched no published artifact, so the
      // download silently degraded to opening the download page.
      expect(result?.cpu.architecture).toBe('arm64')
    })
  })
})
