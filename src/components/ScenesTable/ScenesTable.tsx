import { memo, useMemo } from "react"
import { ActionRow, AvatarRow, LocationRow, SceneRow } from "./rows"
import { Column, Table } from "../Table"
import { SceneRowData, ScenesTableProps } from "./ScenesTable.types"

const ScenesTable = memo((props: ScenesTableProps) => {
  const { rows, headerVisible = true, onMobileRowClick } = props

  const columns: Column<SceneRowData>[] = useMemo(
    () => [
      {
        id: "scene",
        header: "Scene Name",
        width: { desktop: "40%", mobile: "100%" },
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
        hideOnMobile: true,
        render: (row) => (
          <ActionRow
            positionChange={row.positionChange}
            location={row.location}
          />
        ),
      },
    ],
    []
  )

  return (
    <Table
      columns={columns}
      rows={rows}
      headerVisible={headerVisible}
      onMobileRowClick={onMobileRowClick}
    />
  )
})

ScenesTable.displayName = "ScenesTable"

export { ScenesTable }
