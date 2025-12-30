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
  const { positionChange, location, onJumpInTrack } = props

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
        onTrack={onJumpInTrack}
        modalProps={{
          title: "Download Decentraland to Jump In",
          description:
            "Once you've installed and launched Decentraland, you can jump straight to the scene in-world!",
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
