import styled from "@emotion/styled"

const StyledAddress = styled("span")(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
}))

export { StyledAddress }
