import styled from "@emotion/styled"

const WearablePreviewContainer = styled("iframe")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: "100%",
  height: "100%",
  border: "none",
  "& .play-controls": {
    display: "flex",
    margin: "16px 0",
  },
  "& .ui.button.play-control": {
    width: "56px",
    height: "44px",
    padding: "0",
    minWidth: "unset",
    marginRight: "16px",
  },
}))

export { WearablePreviewContainer }
