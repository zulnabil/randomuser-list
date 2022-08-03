import LayoutComponent from "layouts/layout.component"
import UserListContainer from "modules/user-list/containers/user-list.container"

const DashboardPage = () => {
  return (
    <LayoutComponent>
      <UserListContainer />
    </LayoutComponent>
  )
}

export default DashboardPage
