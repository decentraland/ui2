import styled from "@emotion/styled"
import { Box as BoxMui, Paper as PaperMui, useTheme } from "@mui/material"
import { ModalProps } from "./Modal.types"

const ModalContainer = styled(PaperMui)((props: Pick<ModalProps, "size">) => {
  const theme = useTheme()
  let size = "900px"
  if (props.size === "tiny") {
    size = "540px"
  } else if (props.size === "small") {
    size = "720px"
  }

  return {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: size,
    borderRadius: "12px",
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
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
  ModalContainer,
  ModalTitleContainer,
  ModalContentContainer,
  ModalActionsContainer,
}
