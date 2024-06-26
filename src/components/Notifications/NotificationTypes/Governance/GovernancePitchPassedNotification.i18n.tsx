import React from "react"
import { Link } from "@mui/material"
import { SpanHighlighted } from "../../NotificationItem.styled"

const i18n = {
  en: {
    description: (link: string): React.ReactNode => (
      <>
        Help to advance this idea by proposing potential solutions{" "}
        <Link href={link}>here</Link>.
      </>
    ),
    title: (proposalTitle: string): React.ReactNode => (
      <>
        The Pitch &quot;
        <SpanHighlighted>{proposalTitle}</SpanHighlighted>
        &quot; can now receive Tenders
      </>
    ),
  },
  es: {
    description: (link: string): React.ReactNode => (
      <>
        Ayuda a avanzar esta idea proponiendo soluciones potenciales{" "}
        <Link href={link}>aquí</Link>.
      </>
    ),
    title: (proposalTitle: string): React.ReactNode => (
      <>
        La Convocatoria &quot;
        <SpanHighlighted>{proposalTitle}</SpanHighlighted>
        &quot; ahora puede recibir licitaciones
      </>
    ),
  },
  zh: {
    description: (link: string): React.ReactNode => (
      <>
        通过提出可能的解决方案来帮助推进这个想法 <Link href={link}>这里</Link>.
      </>
    ),
    title: (proposalTitle: string): React.ReactNode => (
      <>
        投标邀请 &quot;<SpanHighlighted>{proposalTitle}</SpanHighlighted>&quot;
        现在可以接收投标
      </>
    ),
  },
}

export { i18n }
