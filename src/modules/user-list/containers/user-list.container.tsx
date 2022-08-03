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

const UserListContainer: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [page, setPage] = useState(1)
  const [keyword, setKeyword] = useState("")
  const [url, setUrl] = useState<URL>()

  const { users, isLoading } = useFishList({ page: String(page) }, keyword)

  useEffect(() => {
    const tempUrl = new URL(window.location.href)
    setUrl(tempUrl)
    const currentKeyword = tempUrl.searchParams.get("keyword") || ""
    setKeyword(currentKeyword)
    setPage(Number(tempUrl.searchParams.get("page")) || 1)

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

  return (
    <>
      <CardComponent>
        <TextInput
          onChange={handleChangeKeyword}
          leftAddon={<IconComponent color="grey">search</IconComponent>}
          placeholder="Cari username"
          ref={inputRef}
        />
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
