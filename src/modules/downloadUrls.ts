import type { DownloadModalProps } from '../components/Modal/DownloadModal/DownloadModal.types'

const DOWNLOAD_URLS = {
  windows: 'https://decentraland.org/download',
  apple: 'https://decentraland.org/download',
  epic: 'https://store.epicgames.com/en-US/p/decentraland-b692fb',
  googlePlay: 'https://play.google.com/store/apps/details?id=org.decentraland.godotexplorer',
  appStore: 'https://apps.apple.com/app/id6478403840'
} as const

/**
 * Detect the user's OS for the DownloadModal `os` prop.
 * Returns 'apple', 'windows', 'android', or 'ios'.
 */
function detectDownloadOS(): DownloadModalProps['os'] {
  const ua = navigator.userAgent.toLowerCase()
  if (/android/.test(ua)) return 'android'
  if (/iphone|ipad|ipod/.test(ua)) return 'ios'
  if (/mac/.test(ua)) return 'apple'
  return 'windows'
}

export { DOWNLOAD_URLS, detectDownloadOS }
