import React, { useCallback } from "react"
import { Tab, Tabs } from "@mui/material"
import { i18n } from "./NotificationsFeedTabs.i18n"
import {
  DCLNotificationProps,
  NotificationActiveTab,
  NotificationLocale,
} from "./types"
import { NotificationComponentByType } from "./utils"
import { EmptyInboxIcon, HistoryIcon } from "../Icon"
import { NotificationsFeedTabsProps } from "./NotificationsFeedTabs.types"
import {
  EmptyViewContainer,
  EmptyViewDescription,
  EmptyViewTitle,
} from "./NotificationsFeed.styled"
import {
  NotificationFeedPrevious,
  NotificationFeedTabsContainer,
  NotificationFeedTabsContent,
  NotificationFeedTabsHeader,
  NotificationFeedTabsListContainer,
  NotificationFeedTabsListWrapper,
  NotificationFeedTabsTitle,
} from "./NotificationsFeedTabs.styled"

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
    <HistoryIcon sx={{ fontSize: "115px" }} />
    <EmptyViewTitle>{i18n[locale].feed.history.title}</EmptyViewTitle>
    <EmptyViewDescription>
      {i18n[locale].feed.history.description}
    </EmptyViewDescription>
  </EmptyViewContainer>
)

const NoNotifications = ({ locale }: { locale: NotificationLocale }) => (
  <EmptyViewContainer>
    <EmptyInboxIcon sx={{ fontSize: "115px" }} />
    <EmptyViewTitle>{i18n[locale].feed.empty.title}</EmptyViewTitle>
    <EmptyViewDescription>
      {i18n[locale].feed.empty.description}
    </EmptyViewDescription>
  </EmptyViewContainer>
)

const NotificationFeedTabs = React.memo((props: NotificationsFeedTabsProps) => {
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
    <NotificationFeedTabsContainer>
      <NotificationFeedTabsHeader>
        <NotificationFeedTabsTitle>
          {i18n[locale].feed.title}
        </NotificationFeedTabsTitle>
      </NotificationFeedTabsHeader>
      <NotificationFeedTabsContent>
        <Tabs
          value={activeTab}
          onChange={onChangeHandler}
          indicatorColor="primary"
        >
          <Tab
            label={i18n[locale].feed.tabs.newest}
            value={NotificationActiveTab.NEWEST}
            onClick={(e) => onChangeTab(e, NotificationActiveTab.NEWEST)}
          />
          <Tab
            label={i18n[locale].feed.tabs.read}
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
                          {i18n[locale].previous}
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
    </NotificationFeedTabsContainer>
  )
})

export { NotificationFeedTabs }
