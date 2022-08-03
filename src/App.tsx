import fetcher from "common/libs/fetch.lib"
import DashboardPage from "pages/dashboard.page"
import { SWRConfig } from "swr"
import "./common/styles/index.scss"

function App() {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <div className="App">
        <DashboardPage />
      </div>
    </SWRConfig>
  )
}

export default App
