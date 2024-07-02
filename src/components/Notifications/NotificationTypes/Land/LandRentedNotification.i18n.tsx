import React from "react"
import { IconBadge } from "../../../IconBadge"
import { IconBadgeIcon } from "../../../IconBadge/IconBadge.types"

const i18n = {
  en: {
    description: (
      coords: string,
      tenant: JSX.Element | string,
      link: string
    ): React.ReactNode => (
      <>
        Your LAND at{" "}
        <IconBadge
          inline
          icon={IconBadgeIcon.Places}
          text={coords}
          onClick={() => window.open(link, "_blank")}
        />{" "}
        was rented by {tenant}
      </>
    ),
    title: "LAND Rented",
  },
  es: {
    description: (
      coords: string,
      tenant: JSX.Element | string,
      link: string
    ): React.ReactNode => (
      <>
        Tu LAND en{" "}
        <IconBadge
          inline
          icon={IconBadgeIcon.Places}
          text={coords}
          onClick={() => window.open(link, "_blank")}
        />{" "}
        fue alquilada por {tenant}
      </>
    ),
    title: "LAND alquilada",
  },
  zh: {
    description: (
      coords: string,
      tenant: JSX.Element | string,
      link: string
    ): React.ReactNode => (
      <>
        你的土地{" "}
        <IconBadge
          inline
          icon={IconBadgeIcon.Places}
          text={coords}
          onClick={() => window.open(link, "_blank")}
        />{" "}
        租了 {tenant}
      </>
    ),
    title: "租用的土地",
  },
}

export { i18n }
