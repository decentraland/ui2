import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { Badge, Box } from "@mui/material"

const shake = keyframes`
0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-2px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(2px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-2px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(2px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }`

const NotificationIconContainer = styled(Badge)<{ active: boolean }>((
  props
) => {
  const { active, theme } = props
  let otherStyles = {}
  if (active) {
    otherStyles = {
      animation: `${shake} 0.8s`,
      animationIterationCount: 4,
    }
  }
  return {
    ...otherStyles,
    "&:hover": {
      backgroundColor: "transparent",
    },
    "& .MuiBadge-badge": {
      transform: "scale(0.8) translate(40%, 60%)",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "8px",
    },
  }
})

const NotificationIconWrapper = styled(Box)(({ theme }) => {
  return {
    height: "30.625px",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
      borderRadius: "50%",
      cursor: "pointer",
    },
  }
})

export { NotificationIconContainer, NotificationIconWrapper }
