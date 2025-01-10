import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import CircularProgress from "@mui/material/CircularProgress"
import {
  Locales,
  getAssetUrl,
  useGetContentfulEntry,
} from "../../hooks/contenful"
import {
  IBannerFields,
  LowercasedAlignment,
  MarketingBannerProps,
} from "./MarketingBanner.types"
import {
  BannerContainer,
  Button,
  ButtonContainer,
  Content,
  LoadingContainer,
  Logo,
  Text,
  Title,
} from "./MarketingBanner.styled"

export const MarketingBanner: React.FC<MarketingBannerProps> = ({
  id,
  environment,
  token,
  space,
  locale = Locales.enUS,
}) => {
  const { fields, assets, isLoading, error } =
    useGetContentfulEntry<IBannerFields>(id, environment, token, space)

  if (isLoading) {
    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    )
  }

  // If there is no banner fields or the banner is not supposed to be shown, return null
  if (!fields || !fields.showBanner[locale] || error) {
    return null
  }

  return (
    <BannerContainer
      mobileBackground={getAssetUrl(
        assets,
        locale,
        fields.mobileBackground[locale]
      )}
      fullSizeBackground={getAssetUrl(
        assets,
        locale,
        fields.fullSizeBackground[locale]
      )}
    >
      <Content>
        <Title
          variant="h1"
          mobileTitleAlignment={
            fields.mobileTitleAlignment[
              locale
            ]?.toLowerCase() as LowercasedAlignment
          }
          desktopTitleAlignment={
            fields.desktopTitleAlignment[
              locale
            ]?.toLowerCase() as LowercasedAlignment
          }
        >
          {fields.title[locale]}
        </Title>

        <Text
          desktopTextAlignment={
            fields.desktopTextAlignment[
              locale
            ]?.toLowerCase() as LowercasedAlignment
          }
          mobileTextAlignment={
            fields.mobileTextAlignment[
              locale
            ]?.toLowerCase() as LowercasedAlignment
          }
        >
          {fields.text[locale]
            ? documentToReactComponents(fields.text[locale])
            : null}
        </Text>

        {fields.showButton[locale] &&
        fields.buttonLink?.[locale] &&
        fields.buttonsText?.[locale] ? (
          <ButtonContainer
            desktopAlignment={
              fields.desktopButtonAlignment[
                locale
              ]?.toLowerCase() as LowercasedAlignment
            }
            mobileAlignment={
              fields.mobileButtonAlignment[
                locale
              ]?.toLowerCase() as LowercasedAlignment
            }
          >
            <Button
              href={fields.buttonLink[locale]}
              variant="contained"
              disableElevation
            >
              {fields.buttonsText[locale]}
            </Button>
          </ButtonContainer>
        ) : null}
      </Content>
      {fields.logo && fields.logo[locale] && (
        <Logo
          src={getAssetUrl(assets, locale, fields.logo[locale])}
          alt="Banner logo"
        />
      )}
    </BannerContainer>
  )
}
