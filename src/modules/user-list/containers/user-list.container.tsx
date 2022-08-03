import { FC, useEffect, useRef, useState } from "react"
import debounce from "debounce"
import PaginationComponent from "common/components/pagination/pagination.component"
import TableComponent from "common/components/table/table.component"
import {
  COLUMNS,
  DEFAULT_LIMIT_PER_PAGE,
  DEFAULT_TOTAL_PAGE,
} from "modules/user-list/constants/user-list.const"
import useFishList from "modules/user-list/hooks/user-list.hook"
import IconComponent from "common/components/icon/icon.component"
import TextInput from "common/components/text-input/text-input.component"
import CardComponent from "common/components/card/card.component"
import { pushUrlQuery } from "common/helper/url.helper"
import DropdownComponent from "common/components/dropdown/dropdown.component"
import { GenderType } from "modules/user-list/types/user-list.type"

const UserListContainer: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [page, setPage] = useState(1)
  const [keyword, setKeyword] = useState("")
  const [gender, setGender] = useState<GenderType>("")
  const [url, setUrl] = useState<URL>()

  const { users, isLoading } = useFishList(
    { page: String(page), gender },
    keyword
  )

  useEffect(() => {
    const tempUrl = new URL(window.location.href)
    setUrl(tempUrl)
    const currentKeyword = tempUrl.searchParams.get("keyword") || ""
    setKeyword(currentKeyword)
    setPage(Number(tempUrl.searchParams.get("page")) || 1)
    setGender((tempUrl.searchParams.get("gender") as GenderType) || "")

    if (inputRef.current) {
      inputRef.current.value = currentKeyword
    }
  }, [])

  const handleSetPage = (initialNewPage: number) => {
    setPage(initialNewPage)

    if (!url) return

    const newPage = String(initialNewPage)
    const currentPage = url.searchParams.get("page") || "1"

    if (currentPage === newPage) return
    pushUrlQuery(url, "page", newPage)
  }

  const handleChangeKeyword = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newKeyword = event.target.value
      setKeyword(newKeyword)

      if (!url) return

      pushUrlQuery(url, "keyword", newKeyword)
    },
    500
  )

  const handleChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newGender = event.target.value
    setGender(newGender as GenderType)

    if (!url) return

    pushUrlQuery(url, "gender", newGender)
  }

  return (
    <>
      <CardComponent className="flex flex-align-center flex-justify-between gap-16">
        <TextInput
          onChange={handleChangeKeyword}
          leftAddon={<IconComponent color="grey">search</IconComponent>}
          placeholder="Cari username"
          ref={inputRef}
        />
        <DropdownComponent name="gender" onChange={handleChangeGender}>
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </DropdownComponent>
      </CardComponent>
      <TableComponent
        isLoading={isLoading}
        columns={COLUMNS}
        rows={users}
        rowCount={DEFAULT_LIMIT_PER_PAGE}
      />
      {Boolean(!keyword) && (
        <div className="flex">
          <PaginationComponent
            page={page}
            range={5}
            totalPage={DEFAULT_TOTAL_PAGE}
            onChange={handleSetPage}
          />
        </div>
      )}
    </>
  )
}

export default UserListContainer
