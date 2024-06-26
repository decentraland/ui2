import React from "react"
import { Link } from "@mui/material"

const i18n = {
  en: {
    description: (link: string): React.ReactNode => (
      <>
        The votes are in! Find out the outcome of the voting on{" "}
        <Link href={link}> your proposal</Link>.
      </>
    ),
    title: "Voting ended on your proposal",
  },
  es: {
    description: (link: string): React.ReactNode => (
      <>
        Ya estan los votos! Descubre el resultado de la votacion en{" "}
        <Link href={link}>tu propuesta</Link>.
      </>
    ),
    title: "La votacion finalizo en tu propuesta",
  },
  zh: {
    description: (link: string): React.ReactNode => (
      <>
        投票结果出来了！
        <Link href={link}>了解您提案的投票结果</Link>.
      </>
    ),
    title: "您的提案投票结束",
  },
}

export { i18n }
