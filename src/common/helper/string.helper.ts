export const objToString = (obj: any) => {
  try {
    return Object.keys(obj)
      .filter((item: string) => obj[item])
      .map((item: string) => item)
      .join(" ")
  } catch (e) {
    console.error(e)
    throw e
  }
}

export const isValidDate = (date: any) => {
  return date instanceof Date && !isNaN(+date)
}

export const dateFormatter = (dateString: string, locale = "id"): string => {
  if (!dateString || typeof dateString !== "string") return dateString

  const date = new Date(dateString)

  if (!isValidDate(date)) return dateString

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return date.toLocaleDateString(locale, options)
}
