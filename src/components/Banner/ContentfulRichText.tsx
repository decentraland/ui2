import { useEffect, useState } from "react"
import { createDynamicImport } from "../../utils/optionalDependency"
import type { Document } from "@contentful/rich-text-types"

type ContentfulRichTextProps = {
  document: Document
}

const ContentfulRichText = ({ document }: ContentfulRichTextProps) => {
  const [content, setContent] = useState<React.ReactNode>(null)

  useEffect(() => {
    const importContentful = createDynamicImport<{
      documentToReactComponents: (doc: Document) => React.ReactNode
    }>("@contentful/rich-text-react-renderer")
    importContentful()
      .then((mod) => {
        setContent(mod.documentToReactComponents(document))
      })
      .catch((error: unknown) => {
        const errorMessage =
          error && typeof error === "object" && "message" in error
            ? String((error as { message?: unknown }).message)
            : ""
        if (
          (error && typeof error === "object" && "code" in error
            ? (error as { code?: unknown }).code === "MODULE_NOT_FOUND"
            : false) ||
          errorMessage.includes("Cannot resolve module") ||
          errorMessage.includes("Can't resolve")
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
