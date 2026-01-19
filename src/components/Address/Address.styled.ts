import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import IconButton from "@mui/material/IconButton"
import styled from "@emotion/styled"

const AddressContainer = styled("span")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(0.25),
}))

const CopyButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(0.25),
  color: theme.palette.text.secondary,

  "&:hover": {
    color: theme.palette.text.primary,
  },
}))

const CopyIcon = styled(ContentCopyIcon)({
  fontSize: "0.875em",
})

const StyledAddress = styled("span")(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
}))

export { AddressContainer, CopyButton, CopyIcon, StyledAddress }
