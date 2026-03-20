import { memo } from 'react'
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded'
import SensorsRoundedIcon from '@mui/icons-material/SensorsRounded'
import { NumberBadgeProps, TextBadgeProps, UserCountBadgeProps } from './Badges.types'
import {
  LiveBadgeWrapper,
  NumberBadgeInner,
  NumberBadgeWrapper,
  TextBadgeLabel,
  TextBadgeWrapper,
  UserCountBadgeWrapper,
  UserCountDot
} from './Badges.styled'

const NumberBadge = memo(({ value }: NumberBadgeProps) => (
  <NumberBadgeWrapper>
    <NumberBadgeInner>{value}</NumberBadgeInner>
  </NumberBadgeWrapper>
))

NumberBadge.displayName = 'NumberBadge'

const TextBadge = memo(({ text }: TextBadgeProps) => (
  <TextBadgeWrapper>
    <TextBadgeLabel>{text}</TextBadgeLabel>
  </TextBadgeWrapper>
))

TextBadge.displayName = 'TextBadge'

const LiveBadge = memo(() => (
  <LiveBadgeWrapper>
    <SensorsRoundedIcon />
    LIVE
  </LiveBadgeWrapper>
))

LiveBadge.displayName = 'LiveBadge'

const UserCountBadge = memo(({ count }: UserCountBadgeProps) => (
  <UserCountBadgeWrapper>
    <UserCountDot />
    <PermIdentityRoundedIcon />
    {count}
  </UserCountBadgeWrapper>
))

UserCountBadge.displayName = 'UserCountBadge'

export { LiveBadge, NumberBadge, TextBadge, UserCountBadge }
