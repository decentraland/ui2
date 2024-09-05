import { default as MuiButton } from "@mui/material/Button"
import { ButtonProps } from "./Button.types"

export const Button = ({ children, ...props }: ButtonProps) => (
  <MuiButton {...props}>{children}</MuiButton>
)
