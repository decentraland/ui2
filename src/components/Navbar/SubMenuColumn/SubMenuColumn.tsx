import { Typography } from '@mui/material'
import { SubMenuColumnProps } from './SubMenuColumn.types'
import { SubMenuColumnContainer } from './SubMenuColumn.styled'

const SubMenuColumn = (props: SubMenuColumnProps) => {
  const { children, title } = props
  return (
    <SubMenuColumnContainer>
      {!!title && <Typography variant="body2">{title}</Typography>}
      {children}
    </SubMenuColumnContainer>
  )
}

export { SubMenuColumn }
