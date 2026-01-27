import { OperativeSystem } from '../components/DownloadButton'
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
const LAUNCHER_LEGACY_BASE_URL = 'https://explorer-artifacts.decentraland.org/launcher/dcl'
const AUTO_SIGNING_BASE_URL = config.get('AUTO_SIGNING_BASE_URL')

const CDN_CONFIGS: Record<CDNSource, CDNConfig> = {
  [CDNSource.LAUNCHER]: {
    urls: {
      [OperativeSystem.WINDOWS]: {
        amd64: `${LAUNCHER_BASE_URL}/Decentraland_installer.exe`
      },
      [OperativeSystem.MACOS]: {
        amd64: `${LAUNCHER_LEGACY_BASE_URL}/Decentraland%20Outdated-mac-x64.dmg`,
        arm64: `${LAUNCHER_BASE_URL}/Decentraland_installer.dmg`
      }
    }
  },
  [CDNSource.AUTO_SIGNING]: {
    urls: {
      [OperativeSystem.WINDOWS]: {
        amd64: `${AUTO_SIGNING_BASE_URL}/:identityId/decentraland.exe`
      },
      [OperativeSystem.MACOS]: {
        amd64: `${LAUNCHER_LEGACY_BASE_URL}/Decentraland%20Outdated-mac-x64.dmg`,
        arm64: `${AUTO_SIGNING_BASE_URL}/:identityId/decentraland.dmg`
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
