import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import type { Document } from "@contentful/rich-text-types"

type ContentfulRichTextProps = {
  document: Document
}

const ContentfulRichText = ({ document }: ContentfulRichTextProps) => {
  return <>{documentToReactComponents(document)}</>
}

export { ContentfulRichText }
export type { ContentfulRichTextProps }
