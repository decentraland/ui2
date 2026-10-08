import { NotificationType } from '@dcl/schemas'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { renderToStaticMarkup } from 'react-dom/server'
import { CreditsOnDemandGrantedNotification } from './CreditsOnDemandGrantedNotification'
import { NotificationLocale } from '../../Notifications.types'
import { CreditsOnDemandGrantedNotificationProps } from './Credits.types'

// The notifications' shared helpers pull in every notification type, and some read the app config, which loads an
// ESM-only package jest does not transform. None of that is under test here.
jest.mock('../../../../config', () => ({ config: { get: () => '' } }))

const notificationWith = (metadata: CreditsOnDemandGrantedNotificationProps['metadata']): CreditsOnDemandGrantedNotificationProps => ({
  id: 'notification-1',
  type: NotificationType.CREDITS_ON_DEMAND_GRANTED,
  address: '0x1234567890123456789012345678901234567890',
  timestamp: Date.UTC(2026, 9, 8),
  read: false,
  created_at: '2026-10-08T00:00:00.000Z',
  updated_at: '2026-10-08T00:00:00.000Z',
  metadata
})

const render = (notification: CreditsOnDemandGrantedNotificationProps, locale: NotificationLocale = 'en') =>
  renderToStaticMarkup(
    <ThemeProvider theme={createTheme()}>
      <CreditsOnDemandGrantedNotification notification={notification} locale={locale} />
    </ThemeProvider>
  )

describe('when rendering credits granted on demand', () => {
  describe("and they are a studio's gift of Shop credits", () => {
    let markup: string

    beforeEach(() => {
      markup = render(
        notificationWith({ creditsGranted: 100, denomination: 'USD', studioName: 'Pixel Forge', link: 'https://decentraland.org/shop' })
      )
    })

    it('should name the studio and say the credits never expire and are spent in the Shop', () => {
      expect(markup).toContain('A gift from Pixel Forge')
      expect(markup).toContain('Pixel Forge gifted you 100 Credits. They never expire: spend them in the Shop.')
      expect(markup).not.toContain('season')
    })

    it('should link to the Shop', () => {
      expect(markup).toMatch(/<a [^>]*href="https:\/\/decentraland.org\/shop"/)
    })
  })

  describe('and they are Shop credits with no studio', () => {
    it('should word them as credits added to the account', () => {
      const markup = render(notificationWith({ creditsGranted: 100, denomination: 'USD', link: 'https://decentraland.org/shop' }))

      expect(markup).toContain('Credits added to your account')
      expect(markup).toContain('You received 100 Credits. They never expire: spend them in the Shop.')
    })
  })

  describe('and they are Shop credits whose link is not https', () => {
    it('should not link anywhere', () => {
      const markup = render(notificationWith({ creditsGranted: 100, denomination: 'USD', link: 'javascript:alert(1)' }))

      expect({ link: /<a [^>]*href=/.test(markup), script: markup.includes('javascript:') }).toEqual({
        link: false,
        script: false
      })
    })
  })

  describe('and they are a retired season grant, which names no denomination', () => {
    it('should keep the season copy', () => {
      const markup = render(notificationWith({ creditsGranted: 50 }))

      expect(markup).toContain('Bonus Credits Unlocked!')
      expect(markup).toContain('earned 50 extra Credits for this season. Make sure to use them before they expire!')
    })
  })

  describe('and the viewer reads Spanish', () => {
    it("should word a studio's gift in Spanish", () => {
      const markup = render(notificationWith({ creditsGranted: 100, denomination: 'USD', studioName: 'Pixel Forge' }), 'es')

      expect(markup).toContain('Un regalo de Pixel Forge')
      expect(markup).toContain('Pixel Forge te regaló 100 Créditos. No vencen: úsalos en el Shop.')
    })
  })
})
