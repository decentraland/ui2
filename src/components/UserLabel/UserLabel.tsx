import { memo } from 'react'
import { Typography } from '@mui/material'
import { AvatarFace } from '../AvatarFace/AvatarFace'
import { UserLabelProps } from './UserLabel.types'
import { UserLabelContainer, UserLabelLink } from './UserLabel.styled'

const UserLabel = memo((props: UserLabelProps) => {
  const { avatar } = props

  return (
    <UserLabelContainer>
      <AvatarFace avatar={avatar} />
      <Typography variant="body2">
        By <UserLabelLink href={`https://decentraland.org/profile/accounts/${avatar?.ethAddress}`}>{avatar.name}</UserLabelLink>
      </Typography>
    </UserLabelContainer>
  )
})

UserLabel.displayName = 'UserLabel'

export { UserLabel }
