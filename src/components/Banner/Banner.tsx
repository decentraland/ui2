import React from 'react'
import { ContentfulLocale } from '@dcl/schemas'
import CircularProgress from '@mui/material/CircularProgress'
import { getAssetUrl } from '../../modules/contentful'
import { useTabletAndBelowMediaQuery } from '../Media'
import { ContentfulRichText } from './ContentfulRichText'
import { BannerProps, LowercasedAlignment } from './Banner.types'
import { BannerContainer, Button, ButtonContainer, Content, LoadingContainer, Logo, Text, Title } from './Banner.styled'
import type { Property } from 'csstype'

const convertAlignmentToFlex = (alignment: Property.TextAlign) => {
  switch (alignment) {
    case 'left':
      return 'flex-start'
    case 'center':
      return 'center'
    case 'right':
      return 'flex-end'
    default:
      return 'flex-start'
  }
}

export const Banner: React.FC<BannerProps> = (props: BannerProps) => {
  const { isLoading, onClick, fields, assets, locale = ContentfulLocale.enUS, error } = props
  const isMobileOrTablet = useTabletAndBelowMediaQuery()

  if (isLoading) {
    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    )
  }

  // If there is no banner fields or the banner is not supposed to be shown, return null
  if (!fields || error) {
    return null
  }

  // Build the parameters based on the size of the screen
  const bannerBackgroundImage = getAssetUrl(
    assets,
    ContentfulLocale.enUS,
    isMobileOrTablet ? fields.mobileBackground[ContentfulLocale.enUS] : fields.fullSizeBackground[ContentfulLocale.enUS]
  )
  const title = isMobileOrTablet ? fields.mobileTitle[locale] : fields.desktopTitle[locale]
  const titleAlignment = (
    isMobileOrTablet ? fields.mobileTitleAlignment[ContentfulLocale.enUS] : fields.desktopTitleAlignment[ContentfulLocale.enUS]
  )?.toLowerCase() as LowercasedAlignment
  const text = isMobileOrTablet ? fields.mobileText[locale] : fields.desktopText[locale]
  const textAlignment = (
    isMobileOrTablet ? fields.mobileTextAlignment[ContentfulLocale.enUS] : fields.desktopTextAlignment[ContentfulLocale.enUS]
  )?.toLowerCase() as LowercasedAlignment
  const buttonAlignment = convertAlignmentToFlex(
    (isMobileOrTablet
      ? fields.mobileButtonAlignment[ContentfulLocale.enUS]
      : fields.desktopButtonAlignment[ContentfulLocale.enUS]
    )?.toLowerCase() as LowercasedAlignment
  )

  return (
    <BannerContainer background={bannerBackgroundImage}>
      <Content>
        <Title variant="h1" textAlign={titleAlignment}>
          {title}
        </Title>

        <Text textAlign={textAlignment}>{text ? <ContentfulRichText document={text} /> : null}</Text>

        {fields.showButton[ContentfulLocale.enUS] && fields.buttonLink?.[ContentfulLocale.enUS] && fields.buttonsText?.[locale] ? (
          <ButtonContainer justifyContent={buttonAlignment}>
            <Button onClick={onClick} href={fields.buttonLink[ContentfulLocale.enUS]} variant="contained" disableElevation>
              {fields.buttonsText[locale]}
            </Button>
          </ButtonContainer>
        ) : null}
      </Content>
      {fields.logo && fields.logo[ContentfulLocale.enUS] && (
        <Logo src={getAssetUrl(assets, ContentfulLocale.enUS, fields.logo[ContentfulLocale.enUS])} alt="Banner logo" />
      )}
    </BannerContainer>
  )
}
