import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { Box, Button as MuiButton } from "@mui/material"

const moveGradient = keyframes({
  "0%": {
    backgroundPosition: "300% 0%",
  },
  "100%": {
    backgroundPosition: "0% 0%",
  },
})

const Container = styled(Box)<{ active?: boolean }>(({ active }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "4px 18px",
  paddingLeft: "4px",
  borderRadius: "8px",
  border: "1px solid",
  borderColor: active ? "#a0abff" : "rgba(160, 171, 255, 0.15)",
  transition: "all 0.2s ease",
  marginBottom: "16px",
  position: "relative",
  ...(active
    ? {}
    : {
        "&::before": {
          content: '""',
          position: "absolute",
          inset: "-2px",
          borderRadius: "10px",
          background:
            "linear-gradient(90deg, transparent, transparent, #a0abff, #a0abff, transparent, transparent)",
          backgroundSize: "300% 100%",
          animation: `${moveGradient} 6s linear infinite`,
          WebkitMask: `
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0)
          `,
          WebkitMaskComposite: "xor",
          mask: `
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0)
          `,
          maskComposite: "exclude",
          padding: "2px",
          pointerEvents: "none",
          zIndex: 1,
        },
      }),
}))

const LeftSection = styled(Box)({
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  paddingLeft: "12px",
  "& .MuiSwitch-root.MuiSwitch-sizeMedium": {
    marginLeft: "-12px",
  },
})

const StyledText = styled("span")<{ active?: boolean }>(
  ({ theme, active }) => ({
    fontSize: "15px",
    fontWeight: 500,
    color: active ? "#a0abff" : theme.palette.text.primary,
    transition: "color 0.2s ease",
  })
)

const StyledAmount = styled("span")<{ active?: boolean }>(
  ({ theme, active }) => ({
    fontSize: "15px",
    color: active ? "#a0abff" : theme.palette.text.primary,
    transition: "color 0.2s ease",
  })
)

const StyledNumber = styled("span")({
  fontWeight: 600,
  color: "#a0abff",
  cursor: "pointer",
  transition: "color 0.2s ease",
})

const PopupContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "4px",
})

const StyledIcon = styled("img")({
  marginLeft: "12px",
  width: "18px",
  height: "18px",
})

const LearnMoreButton = styled(MuiButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  textTransform: "uppercase",
}))

export {
  Container,
  LeftSection,
  LearnMoreButton,
  PopupContainer,
  StyledAmount,
  StyledIcon,
  StyledNumber,
  StyledText,
}
