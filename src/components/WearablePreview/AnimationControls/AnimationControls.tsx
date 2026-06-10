import { FC, Fragment, MouseEvent as ReactMouseEvent, useCallback, useEffect, useRef, useState } from 'react'
import { SocialEmoteAnimation } from '@dcl/schemas/dist/dapps/preview/social-emote-animation'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ButtonGroup from '@mui/material/ButtonGroup'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import { useWearablePreviewController } from '../useWearablePreviewController'
import { AnimationControlsProps } from './AnimationControls.types'
import { StyledAnimationButton, StyledAnimationDivider, StyledAnimationGrow } from './AnimationControls.styled'

export const AnimationControls: FC<AnimationControlsProps> = ({
  wearablePreviewId,
  className,
  wearablePreviewController,
  selectedAnimation,
  onSelectAnimation,
  renderAnimationSelector
}) => {
  const { controllerRef, isReady } = useWearablePreviewController(wearablePreviewId, wearablePreviewController)
  const [open, setOpen] = useState(false)
  const anchorRef = useRef<HTMLDivElement>(null)
  const [socialEmoteAnimations, setSocialEmoteAnimations] = useState<SocialEmoteAnimation[] | null | undefined>(undefined)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Sync selectedIndex when selectedAnimation prop changes (controlled mode)
  useEffect(() => {
    if (!socialEmoteAnimations || !selectedAnimation) {
      return
    }
    const index = socialEmoteAnimations.findIndex(anim => anim.title === selectedAnimation.title)
    setSelectedIndex(index >= 0 ? index : 0)
  }, [socialEmoteAnimations, selectedAnimation])

  useEffect(() => {
    if (!isReady || !controllerRef.current || socialEmoteAnimations !== undefined) {
      return
    }

    Promise.all([controllerRef.current.emote.getSocialEmoteAnimations(), controllerRef.current.emote.getPlayingSocialEmoteAnimation()])
      .then(([animations, playingAnimation]) => {
        setSocialEmoteAnimations(animations)
        if (playingAnimation) {
          onSelectAnimation?.(playingAnimation)
          const index = animations?.findIndex(anim => anim.title === playingAnimation.title) ?? -1
          setSelectedIndex(index >= 0 ? index : 0)
        }
      })
      .catch(error => {
        console.error('Error checking social emote:', error)
        setSocialEmoteAnimations(null)
      })
  }, [socialEmoteAnimations, isReady, controllerRef, onSelectAnimation])

  const handleMenuItemClick = useCallback(
    (_event: ReactMouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
      setOpen(false)
      setSelectedIndex(index)
      if (socialEmoteAnimations?.[index]) {
        onSelectAnimation?.(socialEmoteAnimations[index])
      }
    },
    [socialEmoteAnimations, onSelectAnimation]
  )

  const handleToggle = useCallback(() => {
    setOpen(prevOpen => !prevOpen)
  }, [])

  const handleClose = useCallback((event: Event) => {
    if (anchorRef.current?.contains(event.target as HTMLElement)) {
      return
    }
    setOpen(false)
  }, [])

  if (!socialEmoteAnimations || socialEmoteAnimations.length === 0) {
    return null
  }

  if (renderAnimationSelector && onSelectAnimation) {
    return renderAnimationSelector({
      socialEmoteAnimations,
      selectedAnimation: selectedAnimation ?? socialEmoteAnimations[0],
      onSelectAnimation
    })
  }

  return (
    <Fragment>
      <ButtonGroup className={className} variant="contained" ref={anchorRef} aria-label="Button group with a nested menu">
        <StyledAnimationButton
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          {socialEmoteAnimations[selectedIndex].title}
          <StyledAnimationDivider orientation="vertical" flexItem />
          {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </StyledAnimationButton>
      </ButtonGroup>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={`${className}__popper`}>
        {({ TransitionProps, placement }) => (
          <StyledAnimationGrow {...TransitionProps} placement={placement}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {socialEmoteAnimations.map((option, index) => (
                    <MenuItem key={option.title} selected={index === selectedIndex} onClick={event => handleMenuItemClick(event, index)}>
                      {option.title}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </StyledAnimationGrow>
        )}
      </Popper>
    </Fragment>
  )
}
