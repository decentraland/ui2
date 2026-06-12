import { Rarity } from '@dcl/schemas'

/**
 * Real prod catalog items so hover previews resolve against the live peer: the
 * thumbnail, the urn and the asset metadata all belong to the SAME item (an emote
 * card must play that emote; a wearable card must dress the avatar with that wearable).
 */
type PreviewFixture = {
  name: string
  urn: string
  rarity: Rarity
  creator: string
}

const peerThumbnail = (urn: string): string => `https://peer.decentraland.org/lambdas/collections/contents/${urn}/thumbnail`

const EMOTE_FIXTURES: PreviewFixture[] = [
  {
    name: 'Building Castles in the Sky',
    urn: 'urn:decentraland:matic:collections-v2:0xedabe0283a5f87c2ca3d9a6326781c9125d6e556:0',
    rarity: Rarity.MYTHIC,
    creator: '0x4a6767c70796be741453cc6b74f0567eb886614d'
  },
  {
    name: 'Jack Frost Sad Boi',
    urn: 'urn:decentraland:matic:collections-v2:0x1d30377fe076d67f573179a6800d5cff1d5b3187:0',
    rarity: Rarity.LEGENDARY,
    creator: '0xb5658530f22c1009e1b920fa657f6ce21564f974'
  },
  {
    name: 'Say Hello, Friend',
    urn: 'urn:decentraland:matic:collections-v2:0x145d8f54194283a6ae71ad4316040d4c13633194:1',
    rarity: Rarity.EPIC,
    creator: '0x9990a41efb8a6176199ee2676cf08f5424adf0fd'
  }
]

const WEARABLE_FIXTURES: PreviewFixture[] = [
  {
    name: 'Grill Angel',
    urn: 'urn:decentraland:matic:collections-v2:0x7dd2c14796d6a411439f3ed465071fb1626084a8:0',
    rarity: Rarity.LEGENDARY,
    creator: '0xdb760099f0f3359131e08716848f23c014d35b9e'
  },
  {
    name: 'Calaca Headphones',
    urn: 'urn:decentraland:matic:collections-v2:0x6bcc21bc566ca5359fc79bdea1b41c9aacc75bbe:1',
    rarity: Rarity.EPIC,
    creator: '0x8b4221b34efeb8f4ba874cf07d7f6c456c5cc347'
  },
  {
    name: 'Sneakers Viva La Calaca',
    urn: 'urn:decentraland:matic:collections-v2:0x4fde0297c458e7a0bc35f07c015f322ca31b459e:1',
    rarity: Rarity.RARE,
    creator: '0x8b4221b34efeb8f4ba874cf07d7f6c456c5cc347'
  }
]

export { EMOTE_FIXTURES, WEARABLE_FIXTURES, peerThumbnail }
export type { PreviewFixture }
