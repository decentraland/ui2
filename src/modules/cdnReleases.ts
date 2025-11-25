import { OperativeSystem } from "../components/DownloadButton"

enum CDNSource {
  LAUNCHER = "launcher",
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
const LAUNCHER_BASE_URL =
  "https://explorer-artifacts.decentraland.org/launcher-rust"
const LAUNCHER_LEGACY_BASE_URL =
  "https://explorer-artifacts.decentraland.org/launcher/dcl"

const CDN_CONFIGS: Record<CDNSource, CDNConfig> = {
  [CDNSource.LAUNCHER]: {
    urls: {
      [OperativeSystem.WINDOWS]: {
        amd64: `${LAUNCHER_BASE_URL}/Decentraland_installer.exe`,
      },
      [OperativeSystem.MACOS]: {
        amd64: `${LAUNCHER_LEGACY_BASE_URL}/Decentraland%20Outdated-mac-x64.dmg`,
        arm64: `${LAUNCHER_BASE_URL}/Decentraland_installer.dmg`,
      },
    },
  },
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
  const config = CDN_CONFIGS[source]
  if (!config) {
    return null
  }

  const addIdentityIdQueryParam = (url: string) => {
    if (!url) return url
    if (!identityId) return url

    const urlObj = new URL(url)
    urlObj.searchParams.set("identityId", identityId)
    return urlObj.toString()
  }

  return {
    [OperativeSystem.WINDOWS]: {
      amd64: addIdentityIdQueryParam(config.urls.Windows.amd64),
    },
    [OperativeSystem.MACOS]: {
      amd64: config.urls.macOS.amd64,
      arm64: addIdentityIdQueryParam(config.urls.macOS.arm64),
    },
  }
}

export { getCDNRelease, CDNSource }
export type { CDNConfig }
