import React, { useEffect, useMemo } from "react"
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded"
import { Button, CircularProgress } from "@mui/material"
import NotificationFeedTabs from "./NotificationsFeedTabs"
import { NotificationLocale } from "./types"
import Time from "../../lib/time"
import { Mobile, NotMobile } from "../Media"
import Modal from "../Modal/Modal"
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

const i18N = {
  en: {
    onboarding: {
      title: "Welcome to Decentraland Notifications",
      description:
        "Never miss a thing! Now, you'll receive a notification each time something relevant happens with your account.",
      button: "Let's begin",
    },
  },
  es: {
    onboarding: {
      title: "Tus Notificaciones de Decentraland",
      description:
        "¡No te pierdas nada nunca más! Ahora recibirás una notificación cada vez que ocurra algo relevante en tu cuenta.",
      button: "Continuar",
    },
  },
  zh: {
    onboarding: {
      title: "欢迎访问 Decentraland 通知",
      description:
        "不再错过任何信息！现在，每当您的账户发生相关事件，您都会收到通知。",
      button: "讓我們開始",
    },
  },
}

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
        {i18N[locale].onboarding.title}
      </EmptyViewTitle>
      <EmptyViewDescription>
        {i18N[locale].onboarding.description}
      </EmptyViewDescription>

      <Button variant="outlined" size="small" color="inherit" onClick={onBegin}>
        {i18N[locale].onboarding.button}
      </Button>
    </OnboardingWrapper>
  </FeedContainer>
)

export default function NotificationsFeed(props: NotificationsFeedProps) {
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
}
