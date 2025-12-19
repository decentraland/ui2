import { memo } from "react"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import { JumpIn } from "../../../JumpIn"
import { ActionRowProps } from "./ActionRow.types"
import {
  ActionRowContainer,
  PositionChangeContainer,
  PositionContent,
} from "./ActionRow.styled"

const ActionRow = memo((props: ActionRowProps) => {
  const { positionChange, location } = props

  const hasPositionChange = positionChange !== undefined && positionChange !== 0
  const isPositive = positionChange !== undefined && positionChange > 0
  const ArrowIcon = isPositive ? ArrowUpwardIcon : ArrowDownwardIcon

  return (
    <ActionRowContainer>
      {hasPositionChange && (
        <PositionChangeContainer>
          <PositionContent isPositive={isPositive}>
            <ArrowIcon fontSize="small" />
            {Math.abs(positionChange!)}
          </PositionContent>
        </PositionChangeContainer>
      )}
      <JumpIn
        variant="button"
        buttonProps={{ className: "jump-in-button" }}
        modalProps={{
          title: "Download Decentraland",
          description:
            "To jump into this scene, you need to download the Decentraland desktop app.",
          buttonLabel: "Download",
        }}
        desktopAppOptions={
          location.includes(".dcl")
            ? { realm: location }
            : { position: location }
        }
      />
    </ActionRowContainer>
  )
})

ActionRow.displayName = "ActionRow"

export { ActionRow }
