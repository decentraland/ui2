import styled from "@emotion/styled"

const ManaBalancesWrapper = styled("div")((props) => {
  const { theme } = props
  return {
    display: "flex",
    "& svg": {
      fontSize: theme!.typography.subtitle2.fontSize,
    },
  }
})

export { ManaBalancesWrapper }
