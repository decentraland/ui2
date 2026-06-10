import React, { useCallback, useMemo, useState } from 'react'
import { NotificationBellActiveIcon, NotificationBellIcon } from '../../Icon'
import { NotificationsFeed } from '../NotificationsFeed'
import { NotificationsProps } from './Notifications.types'
import { NotificationIconContainer, NotificationIconWrapper } from './Notifications.styled'

const Notifications = React.memo((props: NotificationsProps) => {
  const { isOpen, items, isLoading, locale, isOnboarding, activeTab, renderProfile, onClick, onChangeTab, onBegin, onClose } = props
  const newNotificationsCount = useMemo(() => {
    return items.filter(notification => !notification.read).length
  }, [items])

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick(event)
    setAnchorEl(event.currentTarget)
  }, [])

  const handleClose = useCallback((event: React.MouseEvent<HTMLElement> | MouseEvent) => {
    onClose(event)
    setAnchorEl(null)
  }, [])

  return (
    <>
      <NotificationIconContainer
        active={newNotificationsCount > 0}
        onClick={handleClick}
        badgeContent={newNotificationsCount}
        color="primary"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        invisible={newNotificationsCount === 0}
      >
        {!isOpen ? (
          <NotificationIconWrapper>
            <NotificationBellIcon fontSize="large" color="primary" />
          </NotificationIconWrapper>
        ) : (
          <NotificationBellActiveIcon fontSize="large" color="primary" />
        )}
      </NotificationIconContainer>
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
          onClose={handleClose}
          renderProfile={renderProfile}
          anchorEl={anchorEl}
        />
      )}
    </>
  )
})

export { Notifications }
