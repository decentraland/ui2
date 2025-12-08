import { memo } from "react"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import { PositionChangeRowProps } from "./PositionChangeRow.types"
import {
  PositionChangeContainer,
  PositionContent,
} from "./PositionChangeRow.styled"

const PositionChangeRow = memo((props: PositionChangeRowProps) => {
  const { change } = props

  if (change === undefined || change === 0) {
    return null
  }

  const isPositive = change > 0
  const ArrowIcon = isPositive ? ArrowUpwardIcon : ArrowDownwardIcon

  return (
    <PositionChangeContainer>
      <PositionContent isPositive={isPositive}>
        <ArrowIcon fontSize="small" />
        {Math.abs(change)}
      </PositionContent>
    </PositionChangeContainer>
  )
})

PositionChangeRow.displayName = "PositionChangeRow"

export { PositionChangeRow }
