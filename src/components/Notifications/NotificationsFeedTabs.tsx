import { useCallback } from "react"
import { Tab, Tabs } from "@mui/material"
import {
  DCLNotificationProps,
  NotificationActiveTab,
  NotificationLocale,
} from "./types"
import { NotificationComponentByType } from "./utils"
import EmptyInboxIcon from "../Icon/Notifications/EmptyInboxIcon"
import HistoryIcon from "../Icon/Notifications/HistoryIcon"
import { NotificationsFeedTabsProps } from "./NotificationsFeedTabs.types"
import {
  EmptyViewContainer,
  EmptyViewDescription,
  EmptyViewTitle,
} from "./NotificationsFeed.styled"
import {
  NotificationFeedPrevious,
  NotificationFeedTabsContent,
  NotificationFeedTabsHeader,
  NotificationFeedTabsListContainer,
  NotificationFeedTabsListWrapper,
  NotificationFeedTabsTitle,
} from "./NotificationsFeedTabs.styled"

const i18N = {
  en: {
    previous: "Previous",
    feed: {
      title: "Notifications",
      tabs: {
        newest: "New",
        read: "Seen",
      },
      empty: {
        title: "You're all caught up!",
        description: "No new notifications.",
      },
      history: {
        title: "Notifications History",
        description: "You'll be able to access old notifications here.",
      },
    },
  },
  es: {
    previous: "Previo",
    feed: {
      title: "Notificaciones",
      tabs: {
        newest: "Reciente",
        read: "Visto",
      },
      empty: {
        title: "¡Ya estas al día!",
        description: "Te avisaremos si hay nuevas notificaciones para ti.",
      },
      history: {
        title: "Historial de Notificaciones",
        description:
          "Aquí aparecerá una lista detallada de las Notificaciones pasadas",
      },
    },
  },
  zh: {
    previous: "以前的",
    feed: {
      title: "通知",
      tabs: {
        newest: "新",
        read: "看到的",
      },
      empty: {
        title: "你们都赶上了！",
        description: "没有新通知。",
      },
      history: {
        title: "通知历史",
        description: "您可以在这里访问旧通知。",
      },
    },
  },
}

const NotificationHandler = ({
  locale,
  notification,
  renderProfile,
}: {
  notification: DCLNotificationProps
  locale: NotificationLocale
  renderProfile?: (address: string) => JSX.Element | string | null
}) => {
  const NotificationComponent = NotificationComponentByType[notification.type]
  return (
    <NotificationComponent
      notification={notification}
      locale={locale}
      renderProfile={renderProfile}
    />
  )
}

const NoReadNotifications = ({ locale }: { locale: NotificationLocale }) => (
  <EmptyViewContainer>
    <HistoryIcon />
    <EmptyViewTitle>{i18N[locale].feed.history.title}</EmptyViewTitle>
    <EmptyViewDescription>
      {i18N[locale].feed.history.description}
    </EmptyViewDescription>
  </EmptyViewContainer>
)

const NoNotifications = ({ locale }: { locale: NotificationLocale }) => (
  <EmptyViewContainer>
    <EmptyInboxIcon />
    <EmptyViewTitle>{i18N[locale].feed.empty.title}</EmptyViewTitle>
    <EmptyViewDescription>
      {i18N[locale].feed.empty.description}
    </EmptyViewDescription>
  </EmptyViewContainer>
)

export default function NotificationFeedTabs(
  props: NotificationsFeedTabsProps
) {
  const {
    unreadNotifications,
    locale,
    previousNotifications,
    readNotifications,
    activeTab,
    isModal,
    renderProfile,
    onChangeTab,
  } = props

  const onChangeHandler = useCallback(
    (e, tab: NotificationActiveTab) => {
      onChangeTab(e, tab)
    },
    [onChangeTab]
  )
  return (
    <>
      <NotificationFeedTabsHeader>
        <NotificationFeedTabsTitle>
          {i18N[locale].feed.title}
        </NotificationFeedTabsTitle>
      </NotificationFeedTabsHeader>
      <NotificationFeedTabsContent>
        <Tabs
          value={activeTab}
          onChange={onChangeHandler}
          indicatorColor="primary"
        >
          <Tab
            label={i18N[locale].feed.tabs.newest}
            value={NotificationActiveTab.NEWEST}
            onClick={(e) => onChangeTab(e, NotificationActiveTab.NEWEST)}
          />
          <Tab
            label={i18N[locale].feed.tabs.read}
            value={NotificationActiveTab.READ}
            onClick={(e) => onChangeTab(e, NotificationActiveTab.READ)}
          />
        </Tabs>
        <NotificationFeedTabsListContainer isModal={isModal}>
          <NotificationFeedTabsListWrapper>
            {activeTab === NotificationActiveTab.NEWEST ? (
              <>
                {!unreadNotifications.length &&
                !previousNotifications.length ? (
                  <NoNotifications locale={locale} />
                ) : (
                  <>
                    <div>
                      {unreadNotifications.map((notification) => (
                        <NotificationHandler
                          key={notification.id}
                          notification={notification}
                          locale={locale}
                          renderProfile={renderProfile}
                        />
                      ))}
                    </div>
                    {previousNotifications.length > 0 && (
                      <div>
                        <NotificationFeedPrevious>
                          {i18N[locale].previous}
                        </NotificationFeedPrevious>
                        {previousNotifications.map((notification) => (
                          <NotificationHandler
                            key={notification.id}
                            notification={notification}
                            locale={locale}
                            renderProfile={renderProfile}
                          />
                        ))}
                      </div>
                    )}
                  </>
                )}
              </>
            ) : (
              <>
                {readNotifications.length > 0 ? (
                  readNotifications.map((notification) => (
                    <NotificationHandler
                      key={notification.id}
                      notification={notification}
                      locale={locale}
                      renderProfile={renderProfile}
                    />
                  ))
                ) : (
                  <NoReadNotifications locale={locale} />
                )}
              </>
            )}
          </NotificationFeedTabsListWrapper>
        </NotificationFeedTabsListContainer>
      </NotificationFeedTabsContent>
    </>
  )
}
