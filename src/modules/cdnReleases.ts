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

const getCDNRelease = (source: CDNSource) => {
  const config = CDN_CONFIGS[source]
  if (!config) {
    return null
  }

  return {
    [OperativeSystem.WINDOWS]: {
      amd64: config.urls.Windows.amd64,
    },
    [OperativeSystem.MACOS]: {
      amd64: config.urls.macOS.amd64,
      arm64: config.urls.macOS.arm64,
    },
  }
}

export { getCDNRelease, CDNSource }
