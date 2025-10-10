import React, { useState } from "react"
import { ExpandMore } from "@mui/icons-material"
import { Menu } from "@mui/material"
import type {
  LanguageDropdownProps,
  SupportedLanguage,
} from "./LanguageDropdown.types"
import {
  FlagIcon,
  LanguageButton,
  StyledMenuItem,
} from "./LanguageDropdown.styled"

const LanguageDropdown = React.memo((props: LanguageDropdownProps) => {
  const { languages, selectedLanguage, onLanguageChange } = props

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLanguageSelect = (languageCode: SupportedLanguage) => {
    onLanguageChange(languageCode)
    handleClose()
  }

  const selectedLang = languages.find((lang) => lang.code === selectedLanguage)

  return (
    <div>
      <LanguageButton
        onClick={handleClick}
        endIcon={<ExpandMore />}
        aria-controls={open ? "language-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {selectedLang && (
          <>
            <FlagIcon>{selectedLang.flag}</FlagIcon>
            {selectedLang.code.toUpperCase()}
          </>
        )}
      </LanguageButton>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "language-button",
        }}
      >
        {languages.map((language) => (
          <StyledMenuItem
            key={language.code}
            onClick={() => handleLanguageSelect(language.code)}
            selected={language.code === selectedLanguage}
          >
            <FlagIcon>{language.flag}</FlagIcon>
            {language.name}
          </StyledMenuItem>
        ))}
      </Menu>
    </div>
  )
})

export { LanguageDropdown }
