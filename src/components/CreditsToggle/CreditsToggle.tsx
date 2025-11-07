import React, { useCallback, useMemo } from "react"
import { Switch } from "@mui/material"
import CreditsIcon from "../../Assets/icon-credits.svg"
import { CreditsToggleProps } from "./CreditsToggle.types"
import {
  Container,
  LeftSection,
  LearnMoreButton,
  PopupContainer,
  StyledAmount,
  StyledIcon,
  StyledNumber,
  StyledText,
} from "./CreditsToggle.styled"

// Helper to convert Wei to ETH
const formatEther = (value: string | number): string => {
  const wei = BigInt(value.toString())
  const eth = Number(wei) / 1e18
  return eth.toString()
}

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
      <Container className={className}>
        <LeftSection>
          <StyledIcon src={CreditsIcon} alt="Credits" />
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
      <LeftSection>
        <Switch
          checked={useCredits}
          onChange={handleToggleCredits}
          sx={{
            "& .MuiSwitch-thumb": {
              backgroundColor: useCredits ? "#a0abff" : undefined,
            },
            "& .Mui-checked + .MuiSwitch-track": {
              backgroundColor: useCredits ? "#a0abff" : undefined,
            },
          }}
        />
        <StyledText active={useCredits}>{label || "Use Credits"}</StyledText>
      </LeftSection>
      <StyledAmount active={useCredits}>
        {showTooltip ? (
          <PopupContainer title={tooltipContent || "Credits value"}>
            <StyledIcon src={CreditsIcon} alt="Credits" />
            <StyledNumber>{creditsToUseInEth}</StyledNumber>
          </PopupContainer>
        ) : (
          <PopupContainer>
            <StyledIcon src={CreditsIcon} alt="Credits" />
            <StyledNumber>{creditsToUseInEth}</StyledNumber>
          </PopupContainer>
        )}
      </StyledAmount>
    </Container>
  )
}

CreditsToggle.displayName = "CreditsToggle"
export { CreditsToggle }
