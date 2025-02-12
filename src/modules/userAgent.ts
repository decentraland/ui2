import { AdvancedNavigatorUAData } from "@dcl/hooks/cjs/hooks/useAdvancedUserAgentData"
import { OperativeSystem } from "../components/DownloadButton/DownloadButton.types"

const setUserAgentArchitectureDefautlByOs = (
  userAgent: AdvancedNavigatorUAData,
  os: OperativeSystem
): AdvancedNavigatorUAData => {
  if (os === OperativeSystem.MACOS) {
    userAgent.os.name = OperativeSystem.MACOS
    userAgent.cpu.architecture = "unknown"
  } else if (os === OperativeSystem.WINDOWS) {
    userAgent.os.name = OperativeSystem.WINDOWS
    userAgent.cpu.architecture = "amd64"
  }
  return userAgent
}

export { setUserAgentArchitectureDefautlByOs }
