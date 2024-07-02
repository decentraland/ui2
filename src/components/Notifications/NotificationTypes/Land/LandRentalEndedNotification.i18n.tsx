import React from "react"
import { IconBadge } from "../../../IconBadge"
import { IconBadgeIcon } from "../../../IconBadge/IconBadge.types"

const i18n = {
  en: {
    description: (coords: string, link: string): React.ReactNode => (
      <>
        The rent on your LAND at{" "}
        <IconBadge
          inline
          icon={IconBadgeIcon.Places}
          text={coords}
          onClick={() => window.open(link, "_blank")}
        />{" "}
        has ended
      </>
    ),
    title: "Rent Period Ended",
  },
  es: {
    description: (coords: string, link: string): React.ReactNode => (
      <>
        El alquiler de su LAND en{" "}
        <IconBadge
          inline
          icon={IconBadgeIcon.Places}
          text={coords}
          onClick={() => window.open(link, "_blank")}
        />{" "}
        ha terminado
      </>
    ),
    title: "Período de alquiler finalizado",
  },
  zh: {
    description: (coords: string, link: string): React.ReactNode => (
      <>
        土地上的租金{" "}
        <IconBadge
          inline
          icon={IconBadgeIcon.Places}
          text={coords}
          onClick={() => window.open(link, "_blank")}
        />{" "}
        结束了
      </>
    ),
    title: "租金期结束",
  },
}
export { i18n }
