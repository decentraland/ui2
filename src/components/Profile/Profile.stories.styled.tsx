import styled from "@emotion/styled"

const ProfileStoryContainer = styled("div")(({ theme }) => ({
  "& a, & a > span > span": {
    display: "inline-flex",
    gap: theme.spacing(0.5),
    alignItems: "center",
    verticalAlign: "top",
    color: theme.palette.primary.main,
    fontWeight: 500,
    textDecoration: "none",
  },
}))

const ProfileList = styled("div")({
  display: "flex",
  flexDirection: "column",
})

const ProfileSizeList = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
})

export { ProfileStoryContainer, ProfileList, ProfileSizeList }
