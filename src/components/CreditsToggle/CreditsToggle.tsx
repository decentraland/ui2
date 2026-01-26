import React, { useCallback, useMemo } from "react"
import type { LottieComponentProps } from "lottie-react"
import toggleAnimation from "./toggleAnimation.json"
import { formatEther } from "../../utils/format"
import {
  createLazyComponent,
  createDynamicImport,
} from "../../utils/optionalDependency"
import { CreditsIcon } from "../Icon/CreditsIcon"
import { CreditsToggleProps } from "./CreditsToggle.types"
import {
  AnimationContainer,
  Container,
  LearnMoreButton,
  LeftSection,
  PopupContainer,
  StyledAmount,
  StyledNumber,
  StyledSwitch,
  StyledText,
} from "./CreditsToggle.styled"

const Lottie = createLazyComponent<LottieComponentProps>(
  {
    packageName: "lottie-react",
    componentName: "CreditsToggle",
  },
  createDynamicImport<typeof import("lottie-react")>("lottie-react")
)

const CreditsToggle: React.FC<CreditsToggleProps> = ({
  totalCredits,
  assetPrice,
  useCredits,
  onToggle,
  className = "",
  showLearnMore = false,
  learnMoreUrl,
  label,
  showTooltip = true,
  tooltipContent,
}) => {
  const creditsToUseInEth = useMemo(() => {
    if (!totalCredits) {
      return "0"
    }
    const inEth = formatEther(totalCredits.toString())
    const assetPriceInEth = assetPrice
      ? formatEther(assetPrice.toString())
      : "0"
    return assetPrice
      ? Math.min(Number(assetPriceInEth), Number(inEth)).toFixed(2)
      : Number(inEth).toFixed(2)
  }, [totalCredits, assetPrice])

  const handleToggleCredits = useCallback(() => {
    onToggle(!useCredits)
  }, [useCredits, onToggle])

  const handleLearnMore = useCallback(() => {
    if (learnMoreUrl) {
      window.open(learnMoreUrl, "_blank", "noopener noreferrer")
    }
  }, [learnMoreUrl])

  const hasCredits = totalCredits && BigInt(totalCredits) > BigInt(0)

  // If user has no credits and showLearnMore is false, don't render anything
  if (!hasCredits && !showLearnMore) {
    return null
  }

  // Show the GET CREDITS button
  if (!hasCredits && showLearnMore) {
    return (
      <Container showLearnMore className={className}>
        <LeftSection>
          <CreditsIcon sx={{ fontSize: 18 }} />
          <StyledText>{label || "Get with Credits"}</StyledText>
        </LeftSection>
        <StyledAmount>
          <LearnMoreButton variant="outlined" onClick={handleLearnMore}>
            Learn More
          </LearnMoreButton>
        </StyledAmount>
      </Container>
    )
  }

  return (
    <Container active={useCredits} className={className}>
      <LeftSection active={useCredits}>
        <AnimationContainer show={useCredits}>
          {useCredits && (
            <Lottie animationData={toggleAnimation} loop={false} />
          )}
        </AnimationContainer>
        <StyledSwitch checked={useCredits} onChange={handleToggleCredits} />
        <StyledText active={useCredits}>{label || "Use Credits"}</StyledText>
      </LeftSection>
      <StyledAmount active={useCredits}>
        {showTooltip ? (
          <PopupContainer title={tooltipContent || "Credits value"}>
            <CreditsIcon sx={{ fontSize: 18, marginLeft: 1.5 }} />
            <StyledNumber>{creditsToUseInEth}</StyledNumber>
          </PopupContainer>
        ) : (
          <PopupContainer>
            <CreditsIcon sx={{ fontSize: 18, marginLeft: 1.5 }} />
            <StyledNumber>{creditsToUseInEth}</StyledNumber>
          </PopupContainer>
        )}
      </StyledAmount>
    </Container>
  )
}

CreditsToggle.displayName = "CreditsToggle"
export { CreditsToggle }
