import CircularProgress from "@mui/material/CircularProgress"
import {
  createDynamicImport,
  createLazyComponent,
} from "../../utils/optionalDependency"
import type { Document } from "@contentful/rich-text-types"

type ContentfulRichTextProps = {
  document: Document
}

const importContentful = createDynamicImport<
  typeof import("@contentful/rich-text-react-renderer")
>("@contentful/rich-text-react-renderer")

const ContentfulRichText = createLazyComponent<ContentfulRichTextProps>(
  {
    packageName: "@contentful/rich-text-react-renderer",
    componentName: "ContentfulRichText",
  },
  () =>
    importContentful().then((mod) => ({
      default: ({ document }: ContentfulRichTextProps) => (
        <>{mod.documentToReactComponents(document)}</>
      ),
    })),
  <CircularProgress size={16} color="inherit" />
)

export { ContentfulRichText }
export type { ContentfulRichTextProps }
