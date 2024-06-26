import React from "react"
import { Link } from "@mui/material"
import { SpanHighlighted } from "../../NotificationItem.styled"

const i18n = {
  en: {
    description: (link: string): React.ReactNode => (
      <>
        If think you can tackle this solution, propose a Project and get funding
        from the DAO <Link href={link}>here</Link>.
      </>
    ),
    title: (proposalTitle: string): React.ReactNode => (
      <>
        The Tender &quot;
        <SpanHighlighted>{proposalTitle}</SpanHighlighted>
        &quot; can now receive Bid Projects
      </>
    ),
  },
  es: {
    description: (link: string): React.ReactNode => (
      <>
        Si crees que puedes abordar esta solución, propón un proyecto y obtén
        financiación del DAO <Link href={link}>aquí</Link>.
      </>
    ),
    title: (proposalTitle: string): React.ReactNode => (
      <>
        La Licitación &quot;
        <SpanHighlighted>{proposalTitle}</SpanHighlighted>
        &quot; ahora puede recibir Proyectos de Oferta
      </>
    ),
  },
  zh: {
    description: (link: string): React.ReactNode => (
      <>
        如果你认为可以解决这个问题，提出一个项目并从DAO获得资金支持{" "}
        <Link href={link}>这里</Link>.
      </>
    ),
    title: (proposalTitle: string): React.ReactNode => (
      <>
        投标 &quot;
        <SpanHighlighted>{proposalTitle}</SpanHighlighted>
        &quot; 现在可以接收项目投标
      </>
    ),
  },
}

export { i18n }
