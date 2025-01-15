import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import CircularProgress from "@mui/material/CircularProgress"
import { Locales, getAssetUrl } from "../../hooks/contentful"
import { useTabletAndBelowMediaQuery } from "../Media"
import { BannerProps, LowercasedAlignment } from "./Banner.types"
import {
  BannerContainer,
  Button,
  ButtonContainer,
  Content,
  LoadingContainer,
  Logo,
  Text,
  Title,
} from "./Banner.styled"
import type { Property } from "csstype"

const convertAlignmentToFlex = (alignment: Property.TextAlign) => {
  switch (alignment) {
    case "left":
      return "flex-start"
    case "center":
      return "center"
    case "right":
      return "flex-end"
    default:
      return "flex-start"
  }
}

export const Banner: React.FC<BannerProps> = (props: BannerProps) => {
  const { isLoading, fields, assets, locale = Locales.enUS, error } = props
  const isMobileOrTablet = useTabletAndBelowMediaQuery()

  if (isLoading) {
    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    )
  }

  // If there is no banner fields or the banner is not supposed to be shown, return null
  if (!fields || !fields.showBanner[Locales.enUS] || error) {
    return null
  }

  // Build the parameteres based on the size of the screen
  const bannerBackgroundImage = getAssetUrl(
    assets,
    Locales.enUS,
    isMobileOrTablet
      ? fields.mobileBackground[Locales.enUS]
      : fields.fullSizeBackground[Locales.enUS]
  )
  const title = isMobileOrTablet
    ? fields.mobileTitle[locale]
    : fields.desktopTitle[locale]
  const titleAlignment = (
    isMobileOrTablet
      ? fields.mobileTitleAlignment[Locales.enUS]
      : fields.desktopTitleAlignment[Locales.enUS]
  )?.toLowerCase() as LowercasedAlignment
  const text = isMobileOrTablet
    ? fields.mobileText[locale]
    : fields.desktopText[locale]
  const textAlignment = (
    isMobileOrTablet
      ? fields.mobileTextAlignment[Locales.enUS]
      : fields.desktopTextAlignment[Locales.enUS]
  )?.toLowerCase() as LowercasedAlignment
  const buttonAlignment = convertAlignmentToFlex(
    (isMobileOrTablet
      ? fields.mobileButtonAlignment[Locales.enUS]
      : fields.desktopButtonAlignment[Locales.enUS]
    )?.toLowerCase() as LowercasedAlignment
  )

  return (
    <BannerContainer background={bannerBackgroundImage}>
      <Content>
        <Title variant="h1" textAlign={titleAlignment}>
          {title}
        </Title>

        <Text textAlign={textAlignment}>
          {text ? documentToReactComponents(text) : null}
        </Text>

        {fields.showButton[Locales.enUS] &&
        fields.buttonLink?.[Locales.enUS] &&
        fields.buttonsText?.[locale] ? (
          <ButtonContainer justifyContent={buttonAlignment}>
            <Button
              href={fields.buttonLink[Locales.enUS]}
              variant="contained"
              disableElevation
            >
              {fields.buttonsText[locale]}
            </Button>
          </ButtonContainer>
        ) : null}
      </Content>
      {fields.logo && fields.logo[Locales.enUS] && (
        <Logo
          src={getAssetUrl(assets, Locales.enUS, fields.logo[Locales.enUS])}
          alt="Banner logo"
        />
      )}
    </BannerContainer>
  )
}
