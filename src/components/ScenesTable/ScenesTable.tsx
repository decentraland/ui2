import { memo, useMemo } from "react"
import { AvatarRow, LocationRow, PositionChangeRow, SceneRow } from "./rows"
import { JumpIn } from "../JumpIn"
import { Column, Table } from "../Table"
import { SceneRowData, ScenesTableProps } from "./ScenesTable.types"
import { ActionCellContainer } from "./ScenesTable.styled"

const ScenesTable = memo((props: ScenesTableProps) => {
  const { rows } = props

  const columns: Column<SceneRowData>[] = useMemo(
    () => [
      {
        id: "scene",
        header: "Scene Name",
        width: "40%",
        cellPadding: 0,
        render: (row) => (
          <SceneRow
            name={row.sceneName}
            thumbnail={row.thumbnail}
            creator={row.creator}
            location={row.location}
          />
        ),
      },
      {
        id: "creator",
        header: "Creator",
        hideOnMobile: true,
        render: (row) => <AvatarRow avatar={row.creator} />,
      },
      {
        id: "location",
        header: "Location",
        hideOnMobile: true,
        render: (row) => <LocationRow location={row.location} />,
      },
      {
        id: "action",
        header: "",
        render: (row) => (
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
        ),
      },
    ],
    []
  )

  const getRowKey = (row: SceneRowData, index: number) =>
    `${row.sceneName}-${index}`

  return <Table columns={columns} rows={rows} getRowKey={getRowKey} />
})

ScenesTable.displayName = "ScenesTable"

export { ScenesTable }
