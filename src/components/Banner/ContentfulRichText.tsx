import CircularProgress from '@mui/material/CircularProgress'
import { createLazyComponent } from '../../utils/optionalDependency'
import type { Document } from '@contentful/rich-text-types'

type ContentfulRichTextProps = {
  document: Document
}

const ContentfulRichText = createLazyComponent<ContentfulRichTextProps>(
  {
    packageName: '@contentful/rich-text-react-renderer',
    componentName: 'ContentfulRichText'
  },
  () =>
    import('@contentful/rich-text-react-renderer').then(mod => ({
      default: ({ document }: ContentfulRichTextProps) => <>{mod.documentToReactComponents(document)}</>
    })),
  <CircularProgress size={16} color="inherit" />
)

export { ContentfulRichText }
export type { ContentfulRichTextProps }
