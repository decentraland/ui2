import { OperativeSystem } from "../components/DownloadButton"

enum CDNSource {
  LAUNCHER = "launcher",
  AUTO_SIGNING = "auto-signing",
  // Add future CDN sources here
}

type CDNConfig = {
  urls: {
    Windows: {
      amd64: string
    }
    macOS: {
      amd64?: string
      arm64: string
    }
  }
}
const LAUNCHER_BASE_URL =
  "https://explorer-artifacts.decentraland.org/launcher-rust"
const LAUNCHER_LEGACY_BASE_URL =
  "https://explorer-artifacts.decentraland.org/launcher/dcl"
const AUTO_SIGNING_BASE_URL = "https://download-gateway.decentraland.org"

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
  [CDNSource.AUTO_SIGNING]: {
    urls: {
      [OperativeSystem.WINDOWS]: {
        amd64: `${AUTO_SIGNING_BASE_URL}/:identityId/decentraland.exe`,
      },
      [OperativeSystem.MACOS]: {
        arm64: `${AUTO_SIGNING_BASE_URL}/:identityId/decentraland.dmg`,
      },
    },
  },
  // Add more CDN configurations here as needed
}

interface GetCDNRelease {
  (
    source: CDNSource.AUTO_SIGNING,
    identityId: string
  ): {
    [OperativeSystem.WINDOWS]: { amd64: string | undefined }
    [OperativeSystem.MACOS]: {
      arm64: string | undefined
    }
  } | null
  (source: CDNSource.LAUNCHER): {
    [OperativeSystem.WINDOWS]: { amd64: string | undefined }
    [OperativeSystem.MACOS]: {
      amd64: string | undefined
      arm64: string | undefined
    }
  } | null
}

const getCDNRelease: GetCDNRelease = (
  source: CDNSource,
  identityId?: string
) => {
  const config = CDN_CONFIGS[source]
  if (!config) {
    return null
  }

  const replaceIdentityId = (url?: string) => {
    if (!url) return url
    return identityId ? url.replace(":identityId", identityId) : url
  }

  return {
    [OperativeSystem.WINDOWS]: {
      amd64: replaceIdentityId(config.urls.Windows.amd64),
    },
    [OperativeSystem.MACOS]: {
      amd64: replaceIdentityId(config.urls.macOS.amd64),
      arm64: replaceIdentityId(config.urls.macOS.arm64),
    },
  }
}

export { getCDNRelease, CDNSource }
