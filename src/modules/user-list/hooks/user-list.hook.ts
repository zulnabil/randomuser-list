import useSWR from "swr"
import { dateFormatter } from "common/helper/string.helper"
import { defaultParams } from "modules/user-list/constants/user-list.const"
import { UserListParamsType } from "modules/user-list/types/user-list.type"

export default function useUserList(
  initialParams?: UserListParamsType,
  keyword?: string
) {
  const params = {
    ...defaultParams,
    ...initialParams,
    ...(initialParams?.gender && { seed: "" }),
  }
  const searchParams = new URLSearchParams(params as Record<string, string>)

  const path = `/${params ? `?${searchParams}` : ""}`

  const { data, error, mutate } = useSWR(path)

  return {
    users: getFilteredUsers(getFormattedUsers(data?.results), keyword),
    mutate,
    isLoading: !error && !data,
    isError: error,
  }
}

const getFormattedUsers = (users: any[]) => {
  if (!users || !users.length) return []

  return users.map((user: any) => ({
    ...user,
    name: `${user.name.first} ${user.name.last}`,
    username: user.login.username,
    registeredDate: dateFormatter(user.registered.date),
  }))
}

const getFilteredUsers = (users: any[], keyword?: string) => {
  if (!users || !users.length) return []

  if (!keyword) return users

  return users.filter(
    (user: any) => user.login.username && user.login.username.includes(keyword)
  )
}
