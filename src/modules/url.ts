const addQueryParamsToUrlString = (
  url: string,
  params: Record<string, string | undefined | null>
): string => {
  if (!params || Object.keys(params).length === 0) {
    return url
  }

  const urlObj = new URL(url)

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      urlObj.searchParams.append(key, value)
    }
  })

  return urlObj.toString()
}

const updateUrlWithLastValue = (
  url: string,
  paramKey: string,
  paramValue: string
) => {
  const urlObj = new URL(url)

  urlObj.searchParams.delete(paramKey)
  urlObj.searchParams.append(paramKey, paramValue)

  return urlObj.toString()
}

export { addQueryParamsToUrlString, updateUrlWithLastValue }
