import React from "react"
import { Link } from "@mui/material"

const i18n = {
  en: {
    description: (link: string): React.ReactNode => (
      <>
        Access to your Worlds has been restricted due to{" "}
        <Link href={link}>insufficient resources</Link>.
      </>
    ),
    title: "Worlds restricted",
  },
  es: {
    description: (link: string): React.ReactNode => (
      <>
        El acceso a tus Mundos ha sido restringido debido a{" "}
        <Link href={link}>falta de recursos</Link>.
      </>
    ),
    title: "Mundos restringidos",
  },
  zh: {
    description: (link: string): React.ReactNode => (
      <>
        由于资源不足，
        <Link href={link}>访问您的世界受到限制</Link>.
      </>
    ),
    title: "世界限制",
  },
}

export { i18n }
