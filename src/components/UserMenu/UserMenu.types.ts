import * as React from "react"
import { ManaBalancesProps } from "./ManaBalances/ManaBalances.types"
import { UserMenuSignedInProps } from "./UserMenuSignedIn/UserMenuSignedIn.types"

type UserMenuI18N = Record<
  | "myAssets"
  | "account"
  | "viewProfile"
  | "signIn"
  | "signOut"
  | "guest"
  | "marketplaceAuthorizations"
  | "download",
  string
> &
  ManaBalancesProps["i18n"]

type UserMenuProps = Omit<
  UserMenuSignedInProps,
  "isOpen" | "isClickable" | "trackingId" | "onClickToggle"
> & {
  isSignedIn?: boolean
  isSigningIn?: boolean
  isDisconnecting?: boolean
  isActivity?: boolean
  i18n?: UserMenuI18N
  hideDownloadButton?: boolean
  cdnLinks?: Record<string, Record<string, string>>
  onClickSignIn?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onClickOpen?: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    trackingId: string
  ) => void
  onClickDownload?: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    options: { href: string }
  ) => void
}

enum UserMenuEventId {
  ACTIVITY = "activity",
  ACCOUNT = "account",
  MY_ASSETS = "my_assets",
  PROFILE = "profile",
  SIGN_IN = "sign_in",
  SIGN_OUT = "sign_out",
  GUEST = "guest",
  MARKETPLACE_AUTHORIZATIONS = "marketplace_authorizations",
  DOWNLOAD = "download",
  BALANCE = "balance",
}

type DownloadProps = {
  icon: React.ReactNode
  link: string
  arch: string
}

export type { UserMenuProps, UserMenuI18N, DownloadProps }
export { UserMenuEventId }
