import { Box, Card, Chip, Theme, styled } from "@mui/material"

const CardContainer = styled(Card)({
  borderRadius: "16px",
  maxWidth: "345px",
})

const ContentContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",
  justifyContent: "space-between",
}))

const AvatarContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",
}))

const LocationChip = styled(Chip)(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
}))

export { AvatarContainer, CardContainer, ContentContainer, LocationChip }
