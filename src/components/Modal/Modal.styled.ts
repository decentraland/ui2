import styled from "@emotion/styled"
import { Box as BoxMui, Paper as PaperMui } from "@mui/material"
import { ModalProps } from "./Modal.types"

export const ModalContainer = styled(PaperMui)((
  props: Pick<ModalProps, "size">
) => {
  let size = "900px"
  if (props.size === "tiny") {
    size = "540px"
  } else if (props.size === "small") {
    size = "720px"
  }

  return {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: size,
    borderRadius: "12px",
    overflow: "hidden",
    "@media (max-width: 700px)": {
      minWidth: "100vw",
      maxWidth: "100vw",
      minHeight: "100vh",
      borderRadius: "0px",
      margin: "0",
      padding: "0",
      top: "0",
      left: "0",
      transform: "translate(0, 0)",
    },
  }
})

export const ModalTitleContainer = styled(BoxMui)({
  display: "flex",
  justifyContent: "space-between",
  padding: "24px",
})

export const ModalContentContainer = styled(BoxMui)({
  padding: "24px",
})

export const ModalActionsContainer = styled(BoxMui)({
  display: "flex",
  padding: "24px",
  "& > *": {
    flex: 1,
  },
  "& > *.MuiButtonBase-root:not(:last-child)": {
    marginRight: "16px",
  },
})
