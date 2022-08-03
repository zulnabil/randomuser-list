export const pushUrlQuery = (url: URL, key: string, value: string): void => {
  url.searchParams.set(key, String(value))
  window.history.replaceState(value, value, url.href)
}
