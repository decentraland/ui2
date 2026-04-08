const ALLOWED_DOMAINS = ['decentraland.org', 'decentraland.zone', 'decentraland.today', 'market.decentraland.org']

/**
 * Validates that a URL points to a trusted Decentraland domain.
 * Prevents open redirect/phishing from compromised metadata.
 */
function isAllowedUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    return ALLOWED_DOMAINS.some(domain => parsed.hostname === domain || parsed.hostname.endsWith(`.${domain}`))
  } catch {
    return false
  }
}

function safeOpenUrl(url: string): void {
  if (isAllowedUrl(url)) {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}

export { safeOpenUrl }
