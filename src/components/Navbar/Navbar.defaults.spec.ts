import { getMenuConfig } from './Navbar.defaults'
import prod from '../../config/env/prod.json'

// @dcl/ui-env ships ESM that ts-jest can't load, so the config reads straight from the prod env file.
jest.mock('../../config', () => ({
  config: { get: (key: string) => (jest.requireActual('../../config/env/prod.json') as Record<string, string>)[key] }
}))

describe('when building the Create menu', () => {
  it('should send "Publish wearables & emotes" to the creators app collections page', () => {
    const item = getMenuConfig().create.items?.find(menuItem => menuItem.label === 'publishWearablesEmotes')

    expect(item?.url).toBe(prod.BUILDER_WEARABLE_EMOTES_URL)
    expect(item?.url).toBe('https://decentraland.org/create/collections')
  })
})
