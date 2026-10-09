// Imported from the types module rather than the component barrel: the barrel
// pulls DownloadButton (and React) back into this module's graph, which is both
// a cycle (DownloadButton imports this file) and what made this module
// impossible to unit test.
import { OperativeSystem } from '../components/DownloadButton/DownloadButton.types'
import { config } from '../config'

enum CDNSource {
  LAUNCHER = 'launcher',
  AUTO_SIGNING = 'auto-signing'
  // Add future CDN sources here
}

type CDNConfig = {
  urls: {
    Windows: {
      amd64: string
    }
    macOS: {
      amd64: string
      arm64: string
    }
  }
}
const LAUNCHER_BASE_URL = 'https://explorer-artifacts.decentraland.org/launcher-rust'
const AUTO_SIGNING_BASE_URL = config.get('AUTO_SIGNING_BASE_URL')

// The macOS launcher dmg is a UNIVERSAL binary — verified 2026-08-03, `lipo
// -archs` on the published artifact reports `x86_64 arm64` — so Intel and Apple
// Silicon are served the same file and both run it natively. Intel used to be
// pointed at the legacy Electron build named "Decentraland Outdated", which is
// why that cohort never converted: 9 anons in July 2026, zero of whom reached
// the world. Keep both architectures on one constant so they cannot drift apart
// again.
const LAUNCHER_MACOS_DMG = `${LAUNCHER_BASE_URL}/Decentraland_installer.dmg`
// Identity-bound variant: the gateway bakes the attribution id into the same
// universal installer, so Intel must use it too or those downloads become
// unattributable in the funnel.
const AUTO_SIGNING_MACOS_DMG = `${AUTO_SIGNING_BASE_URL}/:identityId/decentraland.dmg`

const CDN_CONFIGS: Record<CDNSource, CDNConfig> = {
  [CDNSource.LAUNCHER]: {
    urls: {
      [OperativeSystem.WINDOWS]: {
        amd64: `${LAUNCHER_BASE_URL}/Decentraland_installer.exe`
      },
      [OperativeSystem.MACOS]: {
        amd64: LAUNCHER_MACOS_DMG,
        arm64: LAUNCHER_MACOS_DMG
      }
    }
  },
  [CDNSource.AUTO_SIGNING]: {
    urls: {
      [OperativeSystem.WINDOWS]: {
        amd64: `${AUTO_SIGNING_BASE_URL}/:identityId/decentraland.exe`
      },
      [OperativeSystem.MACOS]: {
        amd64: AUTO_SIGNING_MACOS_DMG,
        arm64: AUTO_SIGNING_MACOS_DMG
      }
    }
  }
  // Add more CDN configurations here as needed
}

const getCDNRelease = (
  source: CDNSource = CDNSource.LAUNCHER,
  identityId?: string
): {
  [OperativeSystem.WINDOWS]: { amd64: string }
  [OperativeSystem.MACOS]: {
    amd64: string
    arm64: string
  }
} | null => {
  const cdnConfig = CDN_CONFIGS[source]
  if (!cdnConfig) {
    return null
  }

  const replaceIdentityId = (url: string) => {
    if (!url) return url
    // Replace :identityId placeholder in the path for AUTO_SIGNING source
    if (source === CDNSource.AUTO_SIGNING && identityId) {
      return url.replace(':identityId', identityId)
    }
    return url
  }

  return {
    [OperativeSystem.WINDOWS]: {
      amd64: replaceIdentityId(cdnConfig.urls.Windows.amd64)
    },
    [OperativeSystem.MACOS]: {
      amd64: replaceIdentityId(cdnConfig.urls.macOS.amd64),
      arm64: replaceIdentityId(cdnConfig.urls.macOS.arm64)
    }
  }
}

export { getCDNRelease, CDNSource }
export type { CDNConfig }
