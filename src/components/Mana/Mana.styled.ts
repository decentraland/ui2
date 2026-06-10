import styled from '@emotion/styled'
import { ButtonBase as ButtonMui } from '@mui/material'
import { ManaProps } from './Mana.types'

interface StyledManaButtonProps extends Pick<ManaProps, 'inline' | 'href' | 'onClick'> {
  fontSize?: string
}

interface StyledImageContainerProps {
  primary?: boolean
  color?: string
}

const ManaButtonContainer = styled(ButtonMui)<StyledManaButtonProps>(props => {
  const { inline, fontSize, href, onClick, theme } = props
  return {
    display: inline ? 'inline-flex' : 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme!.palette.text.primary,
    verticalAlign: 'middle',
    fontSize: fontSize === 'small' ? '20px' : fontSize === 'medium' ? '24px' : fontSize === 'large' ? '36px' : 'inherit',
    lineHeight: 'inherit',
    cursor: !!href || !!onClick ? 'pointer' : 'default',
    '& + &': {
      marginLeft: '0.3em'
    }
  }
})

const ImageContainer = styled('div')<StyledImageContainerProps>(props => {
  const { color, primary, theme } = props
  return {
    display: 'flex',
    paddingRight: '0.3em',
    '& svg path': {
      fill: color ? color : primary ? theme!.palette.primary.main : theme!.palette.text.primary
    }
  }
})

export { ImageContainer, ManaButtonContainer }
