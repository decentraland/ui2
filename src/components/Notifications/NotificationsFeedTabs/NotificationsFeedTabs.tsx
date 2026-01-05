import React, { useCallback } from "react"
import { Tab, Tabs } from "@mui/material"
import { i18n } from "./NotificationsFeedTabs.i18n"
import { EmptyInboxIcon, HistoryIcon } from "../../Icon"
import { NotMobile } from "../../Media"
import { NotificationActiveTab } from "../Notifications.types"
import {
  EmptyViewContainer,
  EmptyViewDescription,
  EmptyViewTitle,
} from "../NotificationsFeed/NotificationsFeed.styled"
import { NotificationComponentByType } from "../utils"
import { NotificationsFeedTabsProps } from "./NotificationsFeedTabs.types"
import {
  NotificationFeedPrevious,
  NotificationFeedTabsContainer,
  NotificationFeedTabsContent,
  NotificationFeedTabsHeader,
  NotificationFeedTabsListContainer,
  NotificationFeedTabsListWrapper,
  NotificationFeedTabsTitle,
} from "./NotificationsFeedTabs.styled"
import type {
  DCLNotificationProps,
  NotificationLocale,
} from "../Notifications.types"

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

  if (!NotificationComponent) {
    return null
  }

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
      <NotMobile>
        <NotificationFeedTabsHeader>
          <NotificationFeedTabsTitle>
            {i18n[locale].feed.title}
          </NotificationFeedTabsTitle>
        </NotificationFeedTabsHeader>
      </NotMobile>
      <NotificationFeedTabsContent>
        <Tabs
          value={activeTab}
          onChange={onChangeHandler}
          indicatorColor="primary"
        >
          <Tab
            label={i18n[locale].feed.tabs.newest}
            value={NotificationActiveTab.NEWEST}
          />
          <Tab
            label={i18n[locale].feed.tabs.read}
            value={NotificationActiveTab.READ}
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
