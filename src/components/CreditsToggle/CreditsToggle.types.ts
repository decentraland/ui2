export type CreditsToggleProps = {
  /**
   * Total credits available in wei
   */
  totalCredits: string | number
  /**
   * Price of the asset/item in wei
   */
  assetPrice: string
  /**
   * Whether credits are currently being used
   */
  useCredits: boolean
  /**
   * Callback when toggle changes
   */
  onToggle: (useCredits: boolean) => void
  /**
   * Optional className for the container
   */
  className?: string
  /**
   * Optional: Show "Learn More" button instead of credits amount when user has no credits
   */
  showLearnMore?: boolean
  /**
   * Optional: URL for the "Learn More" button
   */
  learnMoreUrl?: string
  /**
   * Optional: Custom text for the toggle label
   */
  label?: string
  /**
   * Optional: Show tooltip with credit value explanation
   */
  showTooltip?: boolean
  /**
   * Optional: Tooltip content
   */
  tooltipContent?: string
}
