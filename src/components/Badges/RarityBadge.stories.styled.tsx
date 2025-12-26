import styled from "@emotion/styled"
import { Box } from "@mui/material"

const RarityBadgeContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(1),
}))

export { RarityBadgeContainer }
