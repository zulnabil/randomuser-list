import { FC, useState } from "react"
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

const UserListContainer: FC = () => {
  const [page, setPage] = useState(1)
  const [keyword, setKeyword] = useState("")

  const { users, isLoading } = useFishList({ page: String(page) }, keyword)

  const handleChangeKeyword = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(event.target.value)
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
        />
      </CardComponent>
      <TableComponent
        isLoading={isLoading}
        columns={COLUMNS}
        rows={users}
        rowCount={DEFAULT_LIMIT_PER_PAGE}
      ></TableComponent>
      {Boolean(!keyword) && (
        <div className="flex">
          <PaginationComponent
            page={page}
            range={5}
            totalPage={DEFAULT_TOTAL_PAGE}
            onChange={setPage}
          />
        </div>
      )}
    </>
  )
}

export default UserListContainer
