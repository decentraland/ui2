import styled from '@emotion/styled'
import { Link, Typography } from '@mui/material'
import { neutral } from '../../../theme/colors'

/* A row that has somewhere to go marks itself as the positioning context for the stretched link
   below, and answers to the pointer. One that does not stays inert, because most notification
   types (credits reminders, rewards, streaming keys) carry no destination at all. */
const NotificationItemContainer = styled('div', {
  shouldForwardProp: prop => prop !== 'clickable'
})<{ clickable?: boolean }>(({ theme, clickable }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
  justifyContent: 'space-between',
  gap: '16px',
  '&:last-of-type': {
    padding: theme.spacing(1, 2, 2)
  },
  ...(clickable && {
    position: 'relative',
    transition: 'background-color 0.15s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.06)'
    }
  })
}))

const NotificationItemImageContainer = styled('div')(({ theme }) => ({
  marginLeft: theme.spacing(2),
  fontSize: '48px'
}))

const NotificationItemContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1
})

const NotificationItemTimestamp = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: theme.typography.pxToRem(12)
}))

const NotificationItemTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: theme.typography.pxToRem(14),
  marginBottom: 0
}))

/* The title carries the row's link, and an empty ::after stretches it over the whole row. Done this
   way rather than by wrapping the row in an <a> because several descriptions hold links of their own
   (the NFT name, a proposal), and anchors cannot nest. It also keeps the link a real anchor, so
   keyboard focus, middle-click and "open in new tab" all behave, and it gives the link an accessible
   name, which a bare overlay would not have. */
const NotificationItemTitleLink = styled(Link)(({ theme }) => ({
  fontWeight: 600,
  fontSize: theme.typography.pxToRem(14),
  marginBottom: 0,
  width: 'fit-content',
  color: 'inherit',
  textDecoration: 'none',
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    zIndex: 0
  }
}))

/* Was a MUI Link, which is what put every description in link colours on hover even though only six
   of the fifty-two notification types ever gave it an href to point at. It is text; the row owns the
   navigation now. Any link the description does carry is raised over the stretched ::after above so
   it stays clickable in its own right. */
const NotificationItemDescription = styled(Typography)(({ theme }) => ({
  display: 'inline',
  color: neutral.gray3,
  margin: theme.spacing(0.5, 0),
  gap: '5px',
  flexWrap: 'wrap',
  alignItems: 'center',
  fontSize: theme.typography.pxToRem(14),
  /* Anchors and buttons alike: three types (the two Land rentals and Streaming) put an IconBadge with
     its own onClick in here, and MUI renders that as a <button>. Without this they would fall under
     the stretched ::after and stop opening their own tab. */
  '& a, & button': {
    position: 'relative',
    zIndex: 1
  }
}))

const NotificationItemCountdown = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1.25),
  backgroundColor: '#37333d',
  width: 'fit-content',
  color: '#fff',
  borderRadius: '20px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: theme.spacing(-0.25),
  transform: 'translateY(2px)',
  '& svg': {
    marginRight: theme.spacing(0.625)
  }
}))

const SpanHighlighted = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main
}))

export {
  NotificationItemContainer,
  NotificationItemContent,
  NotificationItemCountdown,
  NotificationItemDescription,
  NotificationItemImageContainer,
  NotificationItemTimestamp,
  NotificationItemTitle,
  NotificationItemTitleLink,
  SpanHighlighted
}
