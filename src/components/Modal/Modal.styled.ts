import styled from "@emotion/styled"
import {
  Box as BoxMui,
  Modal as MuiModal,
  Paper as PaperMui,
} from "@mui/material"
import { ModalProps } from "./Modal.types"

interface StyledModalProps extends Pick<
  ModalProps,
  | "size"
  | "backgroundImage"
  | "backgroundSize"
  | "backgroundPosition"
  | "backgroundRepeat"
> {}

const Modal = styled(MuiModal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

const ModalContainer = styled(PaperMui)<StyledModalProps>((props) => {
  const {
    size,
    theme,
    backgroundImage,
    backgroundSize,
    backgroundPosition,
    backgroundRepeat,
  } = props
  let width = "900px"
  if (size === "tiny") {
    width = "540px"
  } else if (size === "small") {
    width = "720px"
  }

  return {
    width,
    borderRadius: "12px",
    overflow: "hidden",
    backgroundImage: backgroundImage && `url(${backgroundImage})`,
    backgroundSize: backgroundImage && backgroundSize,
    backgroundPosition: backgroundImage && backgroundPosition,
    backgroundRepeat: backgroundImage && backgroundRepeat,
    [theme.breakpoints.down("xs")]: {
      minWidth: "100vw",
      maxWidth: "100vw",
      minHeight: "100vh",
      borderRadius: "0px",
      margin: "0",
      padding: "0",
    },
  }
})

const ModalTitleContainer = styled(BoxMui)({
  display: "flex",
  justifyContent: "space-between",
  padding: "24px",
})

const ModalContentContainer = styled(BoxMui)({
  padding: "24px",
})

const ModalActionsContainer = styled(BoxMui)({
  display: "flex",
  padding: "24px",
  "& > *": {
    flex: 1,
  },
  "& > *.MuiButtonBase-root:not(:last-child)": {
    marginRight: "16px",
  },
})

export {
  Modal,
  ModalContainer,
  ModalTitleContainer,
  ModalContentContainer,
  ModalActionsContainer,
}
