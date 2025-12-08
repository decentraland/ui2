import { memo } from "react"
import Paper from "@mui/material/Paper"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableRow from "@mui/material/TableRow"
import { AvatarRow, LocationRow, PositionChangeRow, SceneRow } from "./rows"
import { JumpIn } from "../JumpIn"
import { ScenesTableProps } from "./ScenesTable.types"
import {
  ActionCellContainer,
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
            <TableCell>Scene Name</TableCell>
            <TableCell>Creator</TableCell>
            <TableCell>Location</TableCell>
            <TableCell></TableCell>
          </StyledTableHeadRow>
        </StyledTableHead>
        <StyledTableBody>
          {rows.map((row, index) => (
            <TableRow key={`${row.sceneName}-${index}`}>
              <SceneCell component="th" scope="row">
                <SceneRow name={row.sceneName} thumbnail={row.thumbnail} />
              </SceneCell>
              <TableCell>
                <AvatarRow avatar={row.creator} />
              </TableCell>
              <TableCell>
                <LocationRow location={row.location} />
              </TableCell>
              <TableCell>
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
              </TableCell>
            </TableRow>
          ))}
        </StyledTableBody>
      </StyledTable>
    </TableContainer>
  )
})

ScenesTable.displayName = "ScenesTable"

export { ScenesTable }
