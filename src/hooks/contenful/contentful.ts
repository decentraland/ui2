import { useEffect, useState } from "react"
import {
  ContentfulAsset,
  ContentfulResponse,
  Locales,
  LocalizedField,
  LocalizedFieldType,
  SysAssetLink,
} from "./contentful.types"

const getAssetUrl = (
  assets: Record<string, ContentfulAsset>,
  locale: Locales,
  assetLink?: SysAssetLink
): string => {
  if (!assetLink) return ""
  const asset = assets[assetLink.sys.id]
  return asset?.fields.file[locale]?.url
    ? `https:${asset.fields.file[locale].url}`
    : ""
}

const useGetContentfulEntry = <
  T extends Record<string, LocalizedField<LocalizedFieldType>>,
>(
  id: string,
  environment: string,
  contentType: string,
  token: string,
  space: string
): {
  fields: T | null
  assets: {}
  isLoading: boolean
  error: string | null
} => {
  const [fields, setFields] = useState<T | null>(null)
  const [assets, setAssets] = useState<Record<string, ContentfulAsset>>({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cdn.contentful.com/spaces/${space}/environments/${environment}/entries/?` +
            new URLSearchParams({
              "sys.id": id,
              content_type: contentType,
              locale: "*",
            }),
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        if (!response.ok) {
          throw new Error("Failed to fetch entity data")
        }

        const data: ContentfulResponse<T> = await response.json()

        if (!data.items || data.items.length === 0) {
          throw new Error("No entity found with the specified ID")
        }

        const assetsMap = data.includes.Asset.reduce(
          (acc, asset) => {
            acc[asset.sys.id] = asset
            return acc
          },
          {} as Record<string, ContentfulAsset>
        )

        setAssets(assetsMap)
        setFields(data.items[0].fields)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id, environment, token, space])

  return { fields, assets, isLoading, error }
}

export { useGetContentfulEntry, getAssetUrl }
