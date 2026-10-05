import React from 'react'
import { ContentfulLocale } from '@dcl/schemas'
import CircularProgress from '@mui/material/CircularProgress'
import { getAssetAspectRatio, getAssetUrl } from '../../modules/contentful'
import { useTabletAndBelowMediaQuery } from '../Media'
import { ContentfulRichText } from './ContentfulRichText'
import { BannerFields, BannerProps, LowercasedAlignment } from './Banner.types'
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
  const { isLoading, onClick, fields: maybeFields, assets, locale = ContentfulLocale.enUS, error } = props
  const isMobileOrTablet = useTabletAndBelowMediaQuery()

  if (isLoading) {
    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    )
  }

  // If there is no banner fields or the banner is not supposed to be shown, return null
  if (!maybeFields || error) {
    return null
  }

  // Build the parameters based on the size of the screen.
  //
  // Every field is read as optional even though BannerFields types most of them as required. The type
  // describes the Contentful CONTENT TYPE, and the two drift: a `required` validation relaxed in the space
  // means the delivery API starts omitting that field, with no deploy and no warning. Reading a required
  // field directly then throws while rendering, and a banner has no error boundary above it in any of the
  // apps that mount one, so a single unfilled field takes the whole page down.
  //
  // Typed as Partial rather than left to a convention, so the compiler refuses a direct read instead of a
  // future edit quietly adding one back.
  //
  // Everything below degrades on its own: the asset helpers already accept an absent link, the title and
  // text render only with a value, and the alignments fall through to `convertAlignmentToFlex`'s default.
  // So a missing field costs the part of the banner it fed, nothing else.
  const fields: Partial<BannerFields> = maybeFields
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

  const buttonLink = fields.buttonLink?.[ContentfulLocale.enUS]
  const buttonText = fields.buttonsText?.[locale]
  const logo = fields.logo?.[ContentfulLocale.enUS]

  const isCopyCentered = titleAlignment === 'center' || textAlignment === 'center'

  return (
    <BannerContainer background={bannerBackgroundImage}>
      {bannerAspectRatio ? <BackgroundSizer aspectRatio={bannerAspectRatio} /> : null}
      <Layout>
        <Content constrainedWidth={!isCopyCentered}>
          {/* Only with a value: an empty heading is still announced by a screen reader, and an empty wrapper
              still takes a gap in the column. */}
          {title ? (
            <Title variant="h1" textAlign={titleAlignment}>
              {title}
            </Title>
          ) : null}

          {text ? (
            <Text textAlign={textAlignment}>
              <ContentfulRichText document={text} />
            </Text>
          ) : null}

          {fields.showButton?.[ContentfulLocale.enUS] && buttonLink && buttonText ? (
            <ButtonContainer justifyContent={buttonAlignment}>
              <Button onClick={onClick} href={buttonLink} variant="contained" disableElevation>
                {buttonText}
              </Button>
            </ButtonContainer>
          ) : null}
        </Content>
        {logo ? <Logo src={getAssetUrl(assets, ContentfulLocale.enUS, logo)} alt="Banner logo" /> : null}
      </Layout>
    </BannerContainer>
  )
}
