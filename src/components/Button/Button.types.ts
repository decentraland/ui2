import { ReactNode } from "react"
import { ButtonProps as MuiButtonProps } from "@mui/material"

type LoadingPosition = "start" | "center" | "end"

interface ButtonProps extends Omit<MuiButtonProps, "loading"> {
  loading?: boolean
  loadingIcon?: ReactNode
  loadingPosition?: LoadingPosition
}

export type { ButtonProps, LoadingPosition }
