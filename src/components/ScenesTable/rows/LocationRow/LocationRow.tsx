import { memo } from "react"
import { LocationIcon } from "../../../Icon"
import { LocationRowProps } from "./LocationRow.types"
import { LocationLink, LocationRowContainer } from "./LocationRow.styled"

const LocationRow = memo((props: LocationRowProps) => {
  const { location } = props

  const isWorld = location?.includes(".dcl.eth")
  const jumpInUrl = isWorld
    ? `https://decentraland.org/jump?realm=${location}`
    : `https://decentraland.org/jump?position=${location}`

  return (
    <LocationRowContainer>
      <LocationIcon />
      <LocationLink href={jumpInUrl} target="_blank" rel="noopener noreferrer">
        {location}
      </LocationLink>
    </LocationRowContainer>
  )
})

LocationRow.displayName = "LocationRow"

export { LocationRow }

