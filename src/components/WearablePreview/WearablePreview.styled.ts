import styled from "@emotion/styled"

const StyledWearablePreview = styled("iframe")(({ theme }) => ({
  background: theme.palette.background.default,
  border: 0,
  width: "100%",
  height: "100%",
}))

export { StyledWearablePreview }
