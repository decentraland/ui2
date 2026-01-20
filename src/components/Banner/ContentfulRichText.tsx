import { useEffect, useState } from "react"
import type { Document } from "@contentful/rich-text-types"

type ContentfulRichTextProps = {
  document: Document
}

const ContentfulRichText = ({ document }: ContentfulRichTextProps) => {
  const [content, setContent] = useState<React.ReactNode>(null)

  useEffect(() => {
    import("@contentful/rich-text-react-renderer").then((mod) => {
      setContent(mod.documentToReactComponents(document))
    })
  }, [document])

  return <>{content}</>
}

export { ContentfulRichText }
export type { ContentfulRichTextProps }
