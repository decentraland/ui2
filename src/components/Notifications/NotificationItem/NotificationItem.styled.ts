import styled from '@emotion/styled'
import { Link, Typography } from '@mui/material'
import { neutral } from '../../../theme/colors'

const NotificationItemContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
  justifyContent: 'space-between',
  gap: '16px',
  '&:last-of-type': {
    padding: theme.spacing(1, 2, 2)
  }
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

const NotificationItemDescription = styled(Link)(({ theme }) => ({
  display: 'inline',
  color: neutral.gray3,
  margin: theme.spacing(0.5, 0),
  gap: '5px',
  flexWrap: 'wrap',
  alignItems: 'center',
  fontSize: theme.typography.pxToRem(14)
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
  SpanHighlighted
}
