import { useEffect, useState } from "react"
import type { Document } from "@contentful/rich-text-types"
import { createDynamicImport } from "../../utils/optionalDependency"

type ContentfulRichTextProps = {
  document: Document
}

const ContentfulRichText = ({ document }: ContentfulRichTextProps) => {
  const [content, setContent] = useState<React.ReactNode>(null)

  useEffect(() => {
    const importContentful = createDynamicImport(
      "@contentful/rich-text-react-renderer"
    )
    importContentful()
      .then((mod: any) => {
        setContent(mod.documentToReactComponents(document))
      })
      .catch((error: any) => {
        if (
          error?.code === "MODULE_NOT_FOUND" ||
          error?.message?.includes("Cannot resolve module") ||
          error?.message?.includes("Can't resolve")
        ) {
          console.warn(
            `The ContentfulRichText component requires "@contentful/rich-text-react-renderer" to be installed.`
          )
        }
      })
  }, [document])

  return <>{content}</>
}

export { ContentfulRichText }
export type { ContentfulRichTextProps }
