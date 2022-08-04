export const pushUrlQuery = (url: URL, key: string, value: string): void => {
  url.searchParams.set(key, String(value))
  window.history.replaceState(value, value, url.href)
}

export const resetUrl = (url: URL): void => {
  const params = Array.from(url.searchParams)
  for (const element of params) {
    const [key, value] = element
    if (value === "undefined" || typeof value === "undefined") {
      url.searchParams.delete(key)
    }
  }
  window.history.replaceState(null, "", "/")
}
