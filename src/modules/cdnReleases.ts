enum CDNSource {
  LAUNCHER = "launcher",
  // Add future CDN sources here
}

type CDNConfig = {
  baseUrl: string
  fileNamePattern: {
    Windows: {
      amd64: string
    }
    macOS: {
      amd64: string
      arm64: string
    }
  }
}

const CDN_CONFIGS: Record<CDNSource, CDNConfig> = {
  [CDNSource.LAUNCHER]: {
    baseUrl: "https://explorer-artifacts.decentraland.org/launcher/dcl",
    fileNamePattern: {
      Windows: {
        amd64: "Decentraland%20Launcher-win-x64.exe",
      },
      macOS: {
        amd64: "Decentraland%20Launcher-mac-x64.dmg",
        arm64: "Decentraland%20Launcher-mac-arm64.dmg",
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
    Windows: {
      amd64: `${config.baseUrl}/${config.fileNamePattern.Windows.amd64}`,
    },
    macOS: {
      amd64: `${config.baseUrl}/${config.fileNamePattern.macOS.amd64}`,
      arm64: `${config.baseUrl}/${config.fileNamePattern.macOS.arm64}`,
    },
  }
}

export { getCDNRelease, CDNSource }
