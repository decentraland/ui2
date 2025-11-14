import React, { useCallback } from "react"
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded"
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded"
import GitHubIcon from "@mui/icons-material/GitHub"
import HardwareRoundedIcon from "@mui/icons-material/HardwareRounded"
import HelpRoundedIcon from "@mui/icons-material/HelpRounded"
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded"
import MailRoundedIcon from "@mui/icons-material/MailRounded"
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded"
import SupportRoundedIcon from "@mui/icons-material/SupportRounded"
import XIcon from "@mui/icons-material/X"
import YouTubeIcon from "@mui/icons-material/YouTube"
import { footerLandingDefaults } from "./FooterLanding.defaults"
import { config } from "../../config"
import { DiscordIcon } from "../Icon/Social/DiscordIcon"
import { TiktokIcon } from "../Icon/Social/TiktokIcon"
import { useMobileMediaQuery } from "../Media"
import { FooterLandingProps } from "./FooterLanding.types"
import {
  FooterContainer,
  IconButton,
  LinksContainer,
  LinksTitle,
  LinksWrapper,
  SocialContainer,
  SocialIconBox,
  SocialIconWrapper,
  SubscribeContainer,
  SubscribeSubtitle,
  SubscribeTitle,
  SubscriptionBeehiiv,
} from "./FooterLanding.styled"

const FooterLanding = React.memo((props: FooterLandingProps) => {
  const {
    subscriptionSrc: subscriptionSrcProp,
    hideSubscription = false,
    hideDiscord = false,
    hideGithub = false,
    hideX = false,
    hideInstagram = false,
    hideYoutube = false,
    hideTiktok = false,
    hideLinkedin = false,
    hideMarketplace = false,
    hideCreatorHub = false,
    hideDocs = false,
    hideEvents = false,
    hideBlog = false,
    hideSupport = false,
    hideEmail = false,
    hideDao = false,
    hideFaq = false,
    onLinkClick,
    trackingContext,
  } = props

  // URLs from config
  const subscriptionSrcFromConfig = config.get("BEEHIV_SUBSCRIPTION_URL")
  const subscriptionSrc = subscriptionSrcProp ?? subscriptionSrcFromConfig
  const discordUrl = config.get("DISCORD_URL")
  const githubUrl = config.get("GITHUB_URL")
  const xUrl = config.get("X_URL")
  const instagramUrl = config.get("INSTAGRAM_URL")
  const youtubeUrl = config.get("YOUTUBE_URL")
  const tiktokUrl = config.get("TIKTOK_URL")
  const linkedinUrl = config.get("LINKEDIN_URL")
  const marketplaceUrl = config.get("MARKETPLACE_URL")
  const createUrl = config.get("CREATE_URL")
  const docsUrl = config.get("DOCS_URL")
  const eventsUrl = config.get("EVENTS_URL")
  const blogUrl = config.get("BLOG_URL")
  const supportUrl = config.get("SUPPORT_URL")
  const emailUrl = config.get("EMAIL_HELLO_URL")
  const daoUrl = config.get("DAO_URL")
  const faqUrl = config.get("FAQ_URL")

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      if (onLinkClick) {
        event.preventDefault()
        onLinkClick(event)
        const href = (event.currentTarget as HTMLAnchorElement).href
        setTimeout(() => {
          window.location.href = href
        }, 500)
      }
    },
    [onLinkClick]
  )

  const isMobile = useMobileMediaQuery()

  return (
    <FooterContainer>
      <SubscribeContainer>
        <SubscribeSubtitle variant={isMobile ? "h3" : "h4"}>
          {footerLandingDefaults.stayUpdatedWith}
        </SubscribeSubtitle>
        <SubscribeTitle variant={isMobile ? "h1" : "h2"}>
          {footerLandingDefaults.decentraland}
        </SubscribeTitle>
        {!hideSubscription && subscriptionSrc && (
          <SubscriptionBeehiiv
            src={subscriptionSrc}
            data-test-id="beehiiv-embed"
          />
        )}
        <SocialContainer>
          <SocialIconWrapper>
            {!hideDiscord && discordUrl && (
              <SocialIconBox
                href={discordUrl}
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
                data-place={trackingContext}
              >
                <DiscordIcon fontSize="inherit" />
              </SocialIconBox>
            )}
            {!hideGithub && githubUrl && (
              <SocialIconBox
                href={githubUrl}
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
                data-place={trackingContext}
              >
                <GitHubIcon fontSize="inherit" />
              </SocialIconBox>
            )}
            {!hideX && xUrl && (
              <SocialIconBox
                href={xUrl}
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
                data-place={trackingContext}
              >
                <XIcon fontSize="inherit" />
              </SocialIconBox>
            )}
            {!hideInstagram && instagramUrl && (
              <SocialIconBox
                href={instagramUrl}
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
                data-place={trackingContext}
              >
                <InstagramIcon fontSize="inherit" />
              </SocialIconBox>
            )}
            {!hideYoutube && youtubeUrl && (
              <SocialIconBox
                href={youtubeUrl}
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
                data-place={trackingContext}
              >
                <YouTubeIcon fontSize="inherit" />
              </SocialIconBox>
            )}
            {!hideTiktok && tiktokUrl && (
              <SocialIconBox
                href={tiktokUrl}
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
                data-place={trackingContext}
              >
                <TiktokIcon fontSize="inherit" />
              </SocialIconBox>
            )}
            {!hideLinkedin && linkedinUrl && (
              <SocialIconBox
                href={linkedinUrl}
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
                data-place={trackingContext}
              >
                <LinkedInIcon fontSize="inherit" />
              </SocialIconBox>
            )}
          </SocialIconWrapper>
        </SocialContainer>
      </SubscribeContainer>
      <LinksContainer>
        <LinksWrapper>
          <LinksTitle variant="body1">
            {footerLandingDefaults.resources}
          </LinksTitle>
          {!hideMarketplace && marketplaceUrl && (
            <IconButton
              variant="text"
              color="secondary"
              startIcon={
                <LocalOfferRoundedIcon sx={{ transform: "scaleX(-1)" }} />
              }
              href={marketplaceUrl}
              onClick={handleClick}
              data-place={trackingContext}
            >
              {footerLandingDefaults.marketplace}
            </IconButton>
          )}
          {!hideCreatorHub && createUrl && (
            <IconButton
              variant="text"
              color="secondary"
              startIcon={<HardwareRoundedIcon />}
              href={createUrl}
              onClick={handleClick}
              data-place={trackingContext}
            >
              {footerLandingDefaults.creatorHub}
            </IconButton>
          )}
          {!hideDocs && docsUrl && (
            <IconButton
              variant="text"
              color="secondary"
              startIcon={<InsertDriveFileRoundedIcon />}
              href={docsUrl}
              onClick={handleClick}
              data-place={trackingContext}
            >
              {footerLandingDefaults.docs}
            </IconButton>
          )}
          {!hideEvents && eventsUrl && (
            <IconButton
              variant="text"
              color="secondary"
              startIcon={<CalendarMonthRoundedIcon />}
              href={eventsUrl}
              onClick={handleClick}
              data-place={trackingContext}
            >
              {footerLandingDefaults.events}
            </IconButton>
          )}
          {!hideBlog && blogUrl && (
            <IconButton
              variant="text"
              color="secondary"
              startIcon={<ArticleRoundedIcon />}
              href={blogUrl}
              onClick={handleClick}
              data-place={trackingContext}
            >
              {footerLandingDefaults.blog}
            </IconButton>
          )}
        </LinksWrapper>
        <LinksWrapper>
          <LinksTitle variant="body1">
            {footerLandingDefaults.connect}
          </LinksTitle>
          {!hideSupport && supportUrl && (
            <IconButton
              variant="text"
              color="secondary"
              startIcon={<SupportRoundedIcon />}
              href={supportUrl}
              onClick={handleClick}
              data-place={trackingContext}
            >
              {footerLandingDefaults.support}
            </IconButton>
          )}
          {!hideEmail && emailUrl && (
            <IconButton
              variant="text"
              color="secondary"
              startIcon={<MailRoundedIcon />}
              href={emailUrl}
              onClick={handleClick}
              data-place={trackingContext}
            >
              {footerLandingDefaults.email}
            </IconButton>
          )}
          {!hideDao && daoUrl && (
            <IconButton
              variant="text"
              color="secondary"
              startIcon={<PeopleAltRoundedIcon />}
              href={daoUrl}
              onClick={handleClick}
              data-place={trackingContext}
            >
              {footerLandingDefaults.dao}
            </IconButton>
          )}
          {!hideFaq && faqUrl && (
            <IconButton
              variant="text"
              color="secondary"
              startIcon={<HelpRoundedIcon />}
              href={faqUrl}
              onClick={handleClick}
              data-place={trackingContext}
            >
              {footerLandingDefaults.faq}
            </IconButton>
          )}
        </LinksWrapper>
      </LinksContainer>
    </FooterContainer>
  )
})

export { FooterLanding }
