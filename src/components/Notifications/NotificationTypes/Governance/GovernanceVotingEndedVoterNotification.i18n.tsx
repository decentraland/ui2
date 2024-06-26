import React from "react"
import { Link } from "@mui/material"

const i18n = {
  en: {
    description: (link: string): React.ReactNode => (
      <>
        <Link href={link}>Discover the results</Link> of the proposal you
        participated in as a voter. Your input matters!
      </>
    ),
    title: "Voting ended on a proposal you voted on",
  },
  es: {
    description: (link: string): React.ReactNode => (
      <>
        <Link href={link}>Descubre los resultados</Link> de la propuesta en la
        que participaste como votante. Tu opinion es importante!
      </>
    ),
    title: "La votacion ha finalizado en una propuesta que votaste",
  },
  zh: {
    description: (link: string): React.ReactNode => (
      <>
        <Link href={link}>了解您作为选民参与的提案的结果</Link>.
        您的意见很重要！
      </>
    ),
    title: "您已投票的提案投票结束",
  },
}

export { i18n }
