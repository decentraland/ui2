import { HTMLProps } from 'react'

// `ref` is omitted from the public props: the component manages its own internal
// ref to drive playback, and `HTMLProps`' legacy `ref` (which allows string refs)
// is incompatible with the library's strict React types.
type VideoProps = Omit<HTMLProps<HTMLVideoElement>, 'ref'> & {
  /** Imperatively play/pause the video. Leave undefined to control it via native attributes. */
  play?: boolean
  playsInline?: boolean
  /** Video source URL. Forwarded to the `src` attribute. */
  source?: string
}

export type { VideoProps }
