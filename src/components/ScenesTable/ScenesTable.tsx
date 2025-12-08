import { memo } from "react"
import Paper from "@mui/material/Paper"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableRow from "@mui/material/TableRow"
import { AvatarRow, LocationRow, PositionChangeRow, SceneRow } from "./rows"
import { JumpIn } from "../JumpIn"
import { ScenesTableProps } from "./ScenesTable.types"
import {
  ActionCell,
  ActionCellContainer,
  HideOnMobileCell,
  SceneCell,
  StyledTable,
  StyledTableBody,
  StyledTableHead,
  StyledTableHeadRow,
} from "./ScenesTable.styled"

const ScenesTable = memo((props: ScenesTableProps) => {
  const { rows } = props

  return (
    <TableContainer component={Paper}>
      <StyledTable aria-label="table">
        <StyledTableHead>
          <StyledTableHeadRow>
            <SceneCell>Scene Name</SceneCell>
            <TableCell>Creator</TableCell>
            <TableCell>Location</TableCell>
            <TableCell></TableCell>
          </StyledTableHeadRow>
        </StyledTableHead>
        <StyledTableBody>
          {rows.map((row, index) => (
            <TableRow key={`${row.sceneName}-${index}`}>
              <SceneCell component="th" scope="row">
                <SceneRow
                  name={row.sceneName}
                  thumbnail={row.thumbnail}
                  creator={row.creator}
                  location={row.location}
                />
              </SceneCell>
              <HideOnMobileCell>
                <AvatarRow avatar={row.creator} />
              </HideOnMobileCell>
              <HideOnMobileCell>
                <LocationRow location={row.location} />
              </HideOnMobileCell>
              <ActionCell>
                <ActionCellContainer>
                  <PositionChangeRow change={row.positionChange} />
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
                      row.location.includes(".dcl")
                        ? { realm: row.location }
                        : { position: row.location }
                    }
                  />
                </ActionCellContainer>
              </ActionCell>
            </TableRow>
          ))}
        </StyledTableBody>
      </StyledTable>
    </TableContainer>
  )
})

ScenesTable.displayName = "ScenesTable"

export { ScenesTable }
