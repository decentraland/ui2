import { config } from '../../config'

type NavbarExtraButton = {
  text: string
  link: string
  visible: boolean
  textColor?: `#${string}`
  backgroundColor?: `#${string}`
  id?: string
  ttl: number
}

type LocalStorageNavbarExtraButton = {
  button: NavbarExtraButton
  expiresAt: number
}

const getExtraButton = async () => {
  const cachedExtraButton = localStorage.getItem('navbarExtraButton')
  if (cachedExtraButton) {
    try {
      const parsed = JSON.parse(cachedExtraButton) as LocalStorageNavbarExtraButton
      if (parsed.expiresAt > Date.now()) {
        return parsed.button
      }
    } catch (error) {
      // error parsing cached data, ignore and fetch from Contentful
    }
  }
  try {
    const SPACE_ID = config.get('CONTENTFUL_SPACE_ID')
    const ENV = config.get('CONTENTFUL_ENV')
    const ENTRY_ID = config.get('CONTENTFUL_NAVBAR_ENTRY_ID')
    const CONTENTFUL_CDN_URL = config.get('CONTENTFUL_CONTENTFUL_CDN_URL')
    const CONTENTFUL_URL = `${CONTENTFUL_CDN_URL}/spaces/${SPACE_ID}/environments/${ENV}/entries/${ENTRY_ID}`
    const response = await fetch(CONTENTFUL_URL)
    const entry = await response.json()
    const button = entry.fields as NavbarExtraButton
    localStorage.setItem('navbarExtraButton', JSON.stringify({ button, expiresAt: Date.now() + button.ttl * 1000 }))
    return button
  } catch (error) {
    console.error(error)
    return null
  }
}

export { getExtraButton }
export type { NavbarExtraButton, LocalStorageNavbarExtraButton }
