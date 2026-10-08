import { NotificationType } from '@dcl/schemas'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { renderToStaticMarkup } from 'react-dom/server'
import { NotificationLocale } from '../../Notifications.types'
import { CURRENT_AVAILABLE_NOTIFICATIONS, NotificationComponentByType } from '../../utils'
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

// Rendered the way the feed and the Shop's bell render it: looked up by its type. A component that is not
// registered there is never shown, whatever its copy.
const render = (notification: CreditsOnDemandGrantedNotificationProps, locale: NotificationLocale = 'en') => {
  const Component = NotificationComponentByType[NotificationType.CREDITS_ON_DEMAND_GRANTED]
  if (!Component) throw new Error('credits_on_demand_granted has no component in NotificationComponentByType')
  return renderToStaticMarkup(
    <ThemeProvider theme={createTheme()}>
      <Component notification={notification} locale={locale} />
    </ThemeProvider>
  )
}

const linksTo = (markup: string) => markup.match(/<a [^>]*href="([^"]*)"/)?.[1]

describe('when rendering credits granted on demand', () => {
  it('should be one of the notifications the feed shows', () => {
    expect(CURRENT_AVAILABLE_NOTIFICATIONS).toContain(NotificationType.CREDITS_ON_DEMAND_GRANTED)
  })

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
      expect(linksTo(markup)).toBe('https://decentraland.org/shop')
    })
  })

  describe('and they are Shop credits with no studio', () => {
    it('should word them as credits added to the account', () => {
      const markup = render(notificationWith({ creditsGranted: 100, denomination: 'USD', link: 'https://decentraland.org/shop' }))

      expect(markup).toContain('Credits added to your account')
      expect(markup).toContain('You received 100 Credits. They never expire: spend them in the Shop.')
    })
  })

  describe('and their denomination is written another way', () => {
    it('should still word them as Shop credits, never as credits that expire', () => {
      const markup = render(notificationWith({ creditsGranted: 100, denomination: 'usd' }))

      expect(markup).toContain('They never expire')
      expect(markup).not.toContain('before they expire')
    })
  })

  describe.each([
    ['a script', 'javascript:alert(1)'],
    ['a plain http address', 'http://decentraland.org/shop'],
    ['another site', 'https://example.com/shop'],
    ['a look-alike site', 'https://decentraland.org.example.com/shop'],
    ['a subdomain', 'https://shop.decentraland.org/shop'],
    ['something that is not an address', 'not a url']
  ])('and their link is %s', (_label, link) => {
    it('should not link anywhere', () => {
      const markup = render(notificationWith({ creditsGranted: 100, denomination: 'USD', link }))

      expect({ link: linksTo(markup), script: markup.includes('javascript:') }).toEqual({ link: undefined, script: false })
    })
  })

  describe("and their link is on one of Decentraland's sites", () => {
    it('should link there', () => {
      const markup = render(notificationWith({ creditsGranted: 100, denomination: 'USD', link: 'https://decentraland.zone/shop' }))

      expect(linksTo(markup)).toBe('https://decentraland.zone/shop')
    })
  })

  describe('and they are a retired season grant, which names no denomination', () => {
    let markup: string

    beforeEach(() => {
      markup = render(notificationWith({ creditsGranted: 50 }))
    })

    it('should say what was received, in the past tense', () => {
      expect(markup).toContain('Bonus Credits')
      expect(markup).toContain('You received 50 bonus Credits.')
    })

    it('should not ask to use them before they expire, as their season is over', () => {
      expect({ expire: markup.includes('expire'), season: markup.includes('season') }).toEqual({ expire: false, season: false })
    })
  })

  describe('and the grant is missing its amount', () => {
    it('should render instead of failing the feed', () => {
      const markup = render(notificationWith({ denomination: 'USD' } as CreditsOnDemandGrantedNotificationProps['metadata']))

      expect(markup).toContain('You received 0 Credits.')
    })
  })

  describe('and the viewer reads Spanish', () => {
    it("should word a studio's gift and a grant in Spanish", () => {
      const gift = render(notificationWith({ creditsGranted: 100, denomination: 'USD', studioName: 'Pixel Forge' }), 'es')
      const grant = render(notificationWith({ creditsGranted: 100, denomination: 'USD' }), 'es')

      expect({ gift, grant }).toEqual({
        gift: expect.stringContaining('Pixel Forge te regaló 100 Créditos. No caducan: úsalos en el Shop.'),
        grant: expect.stringContaining('Créditos añadidos a tu cuenta')
      })
    })

    it('should write the amount the way the viewer reads numbers', () => {
      const markup = render(notificationWith({ creditsGranted: 12500, denomination: 'USD' }), 'es')

      expect(markup).toContain('Recibiste 12.500 Créditos.')
    })
  })
})
