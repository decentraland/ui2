import React, { useEffect, useMemo } from "react"
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded"
import { Button, CircularProgress } from "@mui/material"
import { i18n } from "./NotificationsFeed.i18n"
import { NotificationFeedTabs } from "./NotificationsFeedTabs"
import { NotificationLocale } from "./types"
import { Time } from "../../lib/time"
import { Mobile, NotMobile } from "../Media"
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
    <OnboardingWrapper elevation={24} sx={{ bgcolor: "background.default" }}>
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
    renderProfile,
    onChangeTab,
    onBegin,
    onClose,
  } = props

  const unreadNotifications = useMemo(
    () => items.filter((notification) => !notification.read),
    [items]
  )

  const previousNotifications = useMemo(
    () =>
      items.filter((notification) => {
        const diff = Time(notification.timestamp).diff(new Date(), "hour")
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

  if (isOnboarding) {
    return (
      <>
        <Mobile>
          <Modal open={isOpen} onClose={onClose}>
            <Onboarding locale={locale} onBegin={onBegin} />
          </Modal>
        </Mobile>
        <NotMobile>
          <NotificationFeedContainer elevation={24}>
            <Onboarding locale={locale} onBegin={onBegin} />
          </NotificationFeedContainer>
        </NotMobile>
      </>
    )
  }

  return (
    <>
      <Mobile>
        <Modal open={isOpen} onClose={onClose}>
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
        </Modal>
      </Mobile>
      <NotMobile>
        <NotificationFeedContainer
          elevation={24}
          sx={{ bgcolor: "background.default" }}
        >
          {isLoading ? (
            <LoadingContainer>
              <CircularProgress size={20} />
            </LoadingContainer>
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
