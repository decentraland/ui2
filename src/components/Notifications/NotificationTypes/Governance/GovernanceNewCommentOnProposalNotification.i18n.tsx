import React from "react"
import { Link } from "@mui/material"

const i18n = {
  en: {
    description: (link: string): React.ReactNode => (
      <>
        Engage in a productive conversation by replying to{" "}
        <Link href={link}>this comment</Link>.
      </>
    ),
    title: "New comment posted on proposal",
  },
  es: {
    description: (link: string): React.ReactNode => (
      <>
        Participe en una conversación productiva respondiendo a{" "}
        <Link href={link}>este comentario</Link>.
      </>
    ),
    title: "Nuevo comentario en tu propuesta",
  },
  zh: {
    description: (link: string): React.ReactNode => (
      <>
        <Link href={link}>回复此评论</Link>
        ，参与富有成效的对话
      </>
    ),
    title: "就提案发表的新评论",
  },
}

export { i18n }
