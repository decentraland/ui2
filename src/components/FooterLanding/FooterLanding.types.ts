export interface FooterLandingProps {
  subscriptionSrc?: string
  hideSubscription?: boolean

  // Hide social icons
  hideDiscord?: boolean
  hideGithub?: boolean
  hideX?: boolean
  hideInstagram?: boolean
  hideYoutube?: boolean
  hideTiktok?: boolean
  hideLinkedin?: boolean

  // Hide resource links
  hideMarketplace?: boolean
  hideCreatorHub?: boolean
  hideDocs?: boolean
  hideEvents?: boolean
  hideBlog?: boolean

  // Hide connect links
  hideSupport?: boolean
  hideEmail?: boolean
  hideDao?: boolean
  hideFaq?: boolean

  // Analytics
  onLinkClick?: (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => void
  trackingContext?: string
}
