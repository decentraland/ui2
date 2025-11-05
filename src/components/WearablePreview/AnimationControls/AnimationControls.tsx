import React, { useCallback, useEffect, useMemo, useState } from "react"
import { SocialEmoteAnimation } from "@dcl/schemas/dist/dapps/preview/social-emote-animation"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp"
import ButtonGroup from "@mui/material/ButtonGroup"
import ClickAwayListener from "@mui/material/ClickAwayListener"
import MenuItem from "@mui/material/MenuItem"
import MenuList from "@mui/material/MenuList"
import Paper from "@mui/material/Paper"
import Popper from "@mui/material/Popper"
import { useWearablePreviewController } from "../useWearablePreviewController"
import { AnimationControlsProps } from "./AnimationControls.types"
import {
  StyledAnimationButton,
  StyledAnimationDivider,
  StyledAnimationGrow,
} from "./AnimationControls.styled"

export const AnimationControls: React.FC<AnimationControlsProps> = ({
  wearablePreviewId,
  className,
  wearablePreviewController,
  selectedAnimation,
  onSelectAnimation,
}) => {
  const { controllerRef, isReady } = useWearablePreviewController(
    wearablePreviewId,
    wearablePreviewController
  )
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLDivElement>(null)
  const [socialEmoteAnimations, setSocialEmoteAnimations] = useState<
    SocialEmoteAnimation[] | null | undefined
  >(undefined)

  const selectedIndex = useMemo(() => {
    if (!socialEmoteAnimations || !selectedAnimation) {
      return 0
    }
    const index = socialEmoteAnimations.findIndex(
      (anim) => anim.title === selectedAnimation.title
    )
    return index >= 0 ? index : 0
  }, [socialEmoteAnimations, selectedAnimation])

  useEffect(() => {
    if (isReady && controllerRef.current) {
      if (socialEmoteAnimations === undefined) {
        controllerRef.current.emote
          .getSocialEmoteAnimations()
          .then((socialEmoteAnimations) => {
            setSocialEmoteAnimations(socialEmoteAnimations)
          })
          .catch((error) => {
            console.error("Error checking social emote:", error)
            setSocialEmoteAnimations(null)
          })
      }
    }
  }, [socialEmoteAnimations, isReady, controllerRef])

  const handleMenuItemClick = useCallback(
    (_event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
      setOpen(false)
      onSelectAnimation?.(socialEmoteAnimations![index])
    },
    [socialEmoteAnimations, onSelectAnimation]
  )

  const handleToggle = useCallback(() => {
    setOpen((prevOpen) => !prevOpen)
  }, [])

  const handleClose = useCallback(
    (event: Event) => {
      if (
        anchorRef.current &&
        anchorRef.current.contains(event.target as HTMLElement)
      ) {
        return
      }

      setOpen(false)
    },
    [anchorRef]
  )

  if (!socialEmoteAnimations) {
    return null
  }

  return (
    <React.Fragment>
      <ButtonGroup
        className={className}
        variant="contained"
        ref={anchorRef}
        aria-label="Button group with a nested menu"
      >
        <StyledAnimationButton
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          {socialEmoteAnimations[selectedIndex].title}
          <StyledAnimationDivider orientation="vertical" flexItem />
          {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </StyledAnimationButton>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        className={`${className}__popper`}
      >
        {({ TransitionProps, placement }) => (
          <StyledAnimationGrow {...TransitionProps} placement={placement}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {socialEmoteAnimations.map((option, index) => (
                    <MenuItem
                      key={option.title}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option.title}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </StyledAnimationGrow>
        )}
      </Popper>
    </React.Fragment>
  )
}
