// The real config module loads JSON env files through @dcl/ui-env, which is ESM
// and unloadable under this repo's node-environment jest.
jest.mock('../config', () => ({
  config: { get: () => 'https://download-gateway.decentraland.org' }
}))

import { CDNSource, getCDNRelease } from './cdnReleases'

describe('getCDNRelease', () => {
  describe('when resolving the macOS builds', () => {
    // The published dmg is a universal binary (`lipo -archs` → `x86_64 arm64`).
    // Intel used to be pointed at the legacy Electron build named "Decentraland
    // Outdated" instead, and that cohort never converted. These assertions exist
    // so the two architectures cannot silently drift apart again.
    it('should serve Intel and Apple Silicon the same universal artifact', () => {
      const links = getCDNRelease(CDNSource.LAUNCHER)

      expect(links?.macOS.amd64).toBe(links?.macOS.arm64)
    })

    it('should serve the same universal artifact on the identity-bound source', () => {
      const links = getCDNRelease(CDNSource.AUTO_SIGNING, 'identity-123')

      expect(links?.macOS.amd64).toBe(links?.macOS.arm64)
    })

    it('should never point at the legacy Outdated build', () => {
      for (const source of [CDNSource.LAUNCHER, CDNSource.AUTO_SIGNING]) {
        const links = getCDNRelease(source, 'identity-123')

        expect(links?.macOS.amd64).not.toMatch(/Outdated/i)
        expect(links?.macOS.arm64).not.toMatch(/Outdated/i)
      }
    })

    it('should bake the identity into both architectures on the identity-bound source', () => {
      const links = getCDNRelease(CDNSource.AUTO_SIGNING, 'identity-123')

      // Intel downloads must stay attributable: an un-baked CDN URL would drop
      // the id the launcher forwards into the funnel.
      expect(links?.macOS.amd64).toContain('identity-123')
      expect(links?.macOS.arm64).toContain('identity-123')
      expect(links?.macOS.amd64).not.toContain(':identityId')
    })
  })

  describe('when resolving the Windows build', () => {
    it('should return the launcher installer', () => {
      const links = getCDNRelease(CDNSource.LAUNCHER)

      expect(links?.Windows.amd64).toContain('Decentraland_installer.exe')
    })
  })
})
