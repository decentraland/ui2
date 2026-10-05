import React from 'react'
import { ContentfulLocale } from '@dcl/schemas'
import CircularProgress from '@mui/material/CircularProgress'
import { getAssetAspectRatio, getAssetUrl } from '../../modules/contentful'
import { useTabletAndBelowMediaQuery } from '../Media'
import { ContentfulRichText } from './ContentfulRichText'
import { BannerProps, LowercasedAlignment } from './Banner.types'
import {
  BackgroundSizer,
  BannerContainer,
  Button,
  ButtonContainer,
  Content,
  Layout,
  LoadingContainer,
  Logo,
  Text,
  Title
} from './Banner.styled'
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

  // Build the parameters based on the size of the screen.
  //
  // Every field is read through `?.` even though BannerFields types most of them as required. The type
  // describes the Contentful CONTENT TYPE, and the two drift: a `required` validation relaxed in the space
  // means the delivery API starts omitting that field, with no deploy and no warning. Reading a required
  // field directly then throws while rendering, and a banner has no error boundary above it in any of the
  // apps that mount one, so a single unfilled field takes the whole page down.
  //
  // Everything below degrades on its own: the asset helpers already accept an absent link, `Title` renders
  // nothing for an undefined child, the rich text is behind a ternary, and the alignments fall through to
  // `convertAlignmentToFlex`'s default. So a missing field costs the part of the banner it fed, nothing else.
  const background = isMobileOrTablet
    ? fields.mobileBackground?.[ContentfulLocale.enUS]
    : fields.fullSizeBackground?.[ContentfulLocale.enUS]
  const bannerBackgroundImage = getAssetUrl(assets, ContentfulLocale.enUS, background)
  const bannerAspectRatio = getAssetAspectRatio(assets, ContentfulLocale.enUS, background)
  const title = isMobileOrTablet ? fields.mobileTitle?.[locale] : fields.desktopTitle?.[locale]
  const titleAlignment = (
    isMobileOrTablet ? fields.mobileTitleAlignment?.[ContentfulLocale.enUS] : fields.desktopTitleAlignment?.[ContentfulLocale.enUS]
  )?.toLowerCase() as LowercasedAlignment
  const text = isMobileOrTablet ? fields.mobileText?.[locale] : fields.desktopText?.[locale]
  const textAlignment = (
    isMobileOrTablet ? fields.mobileTextAlignment?.[ContentfulLocale.enUS] : fields.desktopTextAlignment?.[ContentfulLocale.enUS]
  )?.toLowerCase() as LowercasedAlignment
  const buttonAlignment = convertAlignmentToFlex(
    (isMobileOrTablet
      ? fields.mobileButtonAlignment?.[ContentfulLocale.enUS]
      : fields.desktopButtonAlignment?.[ContentfulLocale.enUS]
    )?.toLowerCase() as LowercasedAlignment
  )

  const isCopyCentered = titleAlignment === 'center' || textAlignment === 'center'

  return (
    <BannerContainer background={bannerBackgroundImage}>
      {bannerAspectRatio ? <BackgroundSizer aspectRatio={bannerAspectRatio} /> : null}
      <Layout>
        <Content constrainedWidth={!isCopyCentered}>
          <Title variant="h1" textAlign={titleAlignment}>
            {title}
          </Title>

          <Text textAlign={textAlignment}>{text ? <ContentfulRichText document={text} /> : null}</Text>

          {fields.showButton?.[ContentfulLocale.enUS] && fields.buttonLink?.[ContentfulLocale.enUS] && fields.buttonsText?.[locale] ? (
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
      </Layout>
    </BannerContainer>
  )
}
