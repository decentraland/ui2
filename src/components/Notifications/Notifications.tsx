import { useMemo } from "react"
import NotificationsFeed from "./NotificationsFeed"
import NotificationBellActiveIcon from "../Icon/Notifications/NotificationBellActiveIcon"
import NotificationBellIcon from "../Icon/Notifications/NotificationBellIcon"
import { NotificationsProps } from "./Notifications.types"
import { NotificationIconContainer } from "./Notifications.styled"

export default function Notifications(props: NotificationsProps) {
  const {
    isOpen,
    items,
    isLoading,
    locale,
    isOnboarding,
    activeTab,
    renderProfile,
    onClick,
    onChangeTab,
    onBegin,
    onClose,
  } = props
  const newNotificationsCount = useMemo(() => {
    return items.filter((notification) => !notification.read).length
  }, [items])

  return (
    <div className="dcl notifications">
      <div>
        <NotificationIconContainer
          active={newNotificationsCount > 0}
          onClick={onClick}
          badgeContent={newNotificationsCount}
          color="primary"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          invisible={newNotificationsCount === 0}
        >
          {!isOpen ? (
            <NotificationBellIcon fontSize="large" color="primary" />
          ) : (
            <NotificationBellActiveIcon fontSize="large" color="primary" />
          )}
        </NotificationIconContainer>
      </div>
      {isOpen && (
        <NotificationsFeed
          isOpen={isOpen}
          items={items}
          isLoading={isLoading}
          locale={locale}
          isOnboarding={isOnboarding}
          activeTab={activeTab}
          onChangeTab={onChangeTab}
          onBegin={onBegin}
          onClose={onClose}
          renderProfile={renderProfile}
        />
      )}
    </div>
  )
}
