import React, { useEffect, useMemo } from "react"
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded"
import { differenceInHours } from "date-fns"
import { Button, CircularProgress } from "@mui/material"
import { i18n } from "./NotificationsFeed.i18n"
import { NotificationFeedTabs } from "./NotificationsFeedTabs"
import { NotificationLocale } from "./types"
import { Mobile, NotMobile, useMobileMediaQuery } from "../Media"
import { Modal } from "../Modal"
import { NotificationsFeedProps } from "./NotificationsFeed.types"
import {
  EmptyViewDescription,
  EmptyViewTitle,
  FeedContainer,
  LoadingContainer,
  NotificationFeedContainer,
  NotificationFeedModalContainer,
  OnboardingWrapper,
} from "./NotificationsFeed.styled"

const Onboarding = ({
  locale,
  onBegin,
}: {
  locale: NotificationLocale
  onBegin: (e: React.MouseEvent<HTMLButtonElement>) => void
}) => (
  <FeedContainer>
    <OnboardingWrapper>
      <CircleNotificationsRoundedIcon sx={{ fontSize: 120 }} />
      <EmptyViewTitle color="text.primary">
        {i18n[locale].onboarding.title}
      </EmptyViewTitle>
      <EmptyViewDescription>
        {i18n[locale].onboarding.description}
      </EmptyViewDescription>

      <Button variant="outlined" size="small" color="inherit" onClick={onBegin}>
        {i18n[locale].onboarding.button}
      </Button>
    </OnboardingWrapper>
  </FeedContainer>
)

const NotificationsFeed = React.memo((props: NotificationsFeedProps) => {
  const {
    items,
    isLoading,
    locale,
    isOnboarding,
    activeTab,
    isOpen,
    anchorEl,
    renderProfile,
    onChangeTab,
    onBegin,
    onClose,
  } = props

  const isMobile = useMobileMediaQuery()

  const unreadNotifications = useMemo(
    () => items.filter((notification) => !notification.read),
    [items]
  )

  const previousNotifications = useMemo(
    () =>
      items.filter((notification) => {
        const diff = differenceInHours(notification.timestamp, new Date())
        return notification.read && diff >= -48 && diff <= 0
      }),
    [items]
  )

  const readNotifications = useMemo(
    () =>
      items.filter(
        (notification) =>
          notification.read &&
          !previousNotifications.find(({ id }) => id === notification.id)
      ),
    [items]
  )

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const element = document.querySelector(".notifications-feed")
      if (element && !element.contains(event.target as Node)) {
        event.preventDefault()
        event.stopPropagation()
        onClose(event)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <>
      <Mobile>
        <Modal open={isMobile && isOpen} onClose={onClose}>
          {isOnboarding ? (
            <Onboarding locale={locale} onBegin={onBegin} />
          ) : (
            <NotificationFeedModalContainer>
              <NotificationFeedTabs
                locale={locale}
                previousNotifications={previousNotifications}
                readNotifications={readNotifications}
                unreadNotifications={unreadNotifications}
                onChangeTab={onChangeTab}
                activeTab={activeTab}
                isModal
                renderProfile={renderProfile}
              />
            </NotificationFeedModalContainer>
          )}
        </Modal>
      </Mobile>
      <NotMobile>
        <NotificationFeedContainer
          anchorEl={anchorEl}
          open={!!isOpen}
          onClose={onClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          elevation={24}
        >
          {isLoading ? (
            <LoadingContainer>
              <CircularProgress size={20} />
            </LoadingContainer>
          ) : isOnboarding ? (
            <Onboarding locale={locale} onBegin={onBegin} />
          ) : (
            <NotificationFeedTabs
              locale={locale}
              previousNotifications={previousNotifications}
              readNotifications={readNotifications}
              unreadNotifications={unreadNotifications}
              onChangeTab={onChangeTab}
              activeTab={activeTab}
              renderProfile={renderProfile}
            />
          )}
        </NotificationFeedContainer>
      </NotMobile>
    </>
  )
})

export { NotificationsFeed }
