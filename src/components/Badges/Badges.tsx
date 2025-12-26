import { memo } from "react"
import { NumberBadgeProps, TextBadgeProps } from "./Badges.types"
import {
  NumberBadgeInner,
  NumberBadgeWrapper,
  TextBadgeLabel,
  TextBadgeWrapper,
} from "./Badges.styled"

const NumberBadge = memo(({ value }: NumberBadgeProps) => (
  <NumberBadgeWrapper>
    <NumberBadgeInner>{value}</NumberBadgeInner>
  </NumberBadgeWrapper>
))

NumberBadge.displayName = "NumberBadge"

const TextBadge = memo(({ text }: TextBadgeProps) => (
  <TextBadgeWrapper>
    <TextBadgeLabel>{text}</TextBadgeLabel>
  </TextBadgeWrapper>
))

TextBadge.displayName = "TextBadge"

export { NumberBadge, TextBadge }
