import { memo } from 'react'
import { Logo } from '../../../Logo/Logo'

/** DCL Logo for the download modal — uses the existing Logo component */
const DclIcon = memo(function DclIcon() {
  return <Logo size="huge" sx={{ '&.MuiSvgIcon-root': { width: 85, height: 85, fontSize: 85 } }} />
})

export { DclIcon }
