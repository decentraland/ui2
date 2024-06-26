import React from "react"

const i18n = {
  en: {
    description: (link: string): React.ReactNode => (
      <>
        Congratulations!{" "}
        <a className="dcl notification-link" href={link}>
          Your Project
        </a>{" "}
        has been successfully enacted and a funding Vesting Contract was
        created.
      </>
    ),
    title: "Your Project has been funded",
  },
  es: {
    description: (link: string): React.ReactNode => (
      <>
        Felicitaciones!{" "}
        <a className="dcl notification-link" href={link}>
          Tu proyecto
        </a>{" "}
        ha sido aprobado y un Vesting Contract de financiamiento fue creado.
      </>
    ),
    title: "Su proyecto ha sido financiado",
  },
  zh: {
    description: (link: string): React.ReactNode => (
      <>
        恭喜您！
        <a className="dcl notification-link" href={link}>
          您的项目已成功立项
        </a>
        ，并签订了资金归属合同.
      </>
    ),
    title: "您的项目已获得资助",
  },
}

export { i18n }
