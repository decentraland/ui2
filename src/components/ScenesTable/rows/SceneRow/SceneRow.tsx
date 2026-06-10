import { memo } from 'react'
import { Typography } from '@mui/material'
import { AvatarFace } from '../../../AvatarFace/AvatarFace'
import { LocationIcon } from '../../../Icon'
import { SceneRowProps } from './SceneRow.types'
import {
  MobileAvatarContainer,
  MobileAvatarName,
  MobileInfoRow,
  MobileLocation,
  MobileLocationText,
  SceneContentContainer,
  SceneName,
  SceneRowContainer,
  SceneThumbnail
} from './SceneRow.styled'

const SceneRow = memo((props: SceneRowProps) => {
  const { name, thumbnail, creator, location } = props

  return (
    <SceneRowContainer>
      <SceneThumbnail src={thumbnail} alt={name} />
      <SceneContentContainer>
        <SceneName>{name}</SceneName>
        <MobileInfoRow>
          {creator && (
            <MobileAvatarContainer>
              <AvatarFace size="tiny" avatar={creator} />
              <Typography component="span" fontSize="12px">
                By{' '}
              </Typography>
              <MobileAvatarName href={`https://decentraland.org/profile/accounts/${creator.ethAddress}`}>{creator.name}</MobileAvatarName>
            </MobileAvatarContainer>
          )}
          {location && (
            <MobileLocation>
              <LocationIcon />
              <MobileLocationText>{location}</MobileLocationText>
            </MobileLocation>
          )}
        </MobileInfoRow>
      </SceneContentContainer>
    </SceneRowContainer>
  )
})

SceneRow.displayName = 'SceneRow'

export { SceneRow }
