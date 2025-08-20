const triggerFileDownload = (link: string): Promise<void> => {
  return new Promise((resolve) => {
    const a = document.createElement("a")
    a.href = link
    a.setAttribute("download", "")
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    setTimeout(resolve, 300)
  })
}

export { triggerFileDownload }
