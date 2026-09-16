import styled from '@emotion/styled'
import { ButtonBase as ButtonMui } from '@mui/material'
import { ManaProps } from './Mana.types'

interface StyledManaButtonProps extends Pick<ManaProps, 'inline' | 'href' | 'onClick' | 'color'> {
  fontSize?: string
}

interface StyledImageContainerProps {
  primary?: boolean
  color?: string
}

const ManaButtonContainer = styled(ButtonMui, {
  /* Kept off the DOM: <button color> is a dead HTML attribute and React would render it verbatim. */
  shouldForwardProp: prop => prop !== 'color'
})<StyledManaButtonProps>(props => {
  const { inline, fontSize, href, onClick, color, theme } = props
  return {
    display: inline ? 'inline-flex' : 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    /* `color` used to reach only the icon's fill, so a caller asking for a secondary-text amount got a
       tinted icon next to a number still pinned to text.primary. The three notification types that pass
       it are the only callers, and all three want the pair to read as one piece of the sentence. */
    color: color ? color : theme!.palette.text.primary,
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
