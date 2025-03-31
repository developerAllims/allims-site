import { Route, Routes } from 'react-router-dom'
import { appRoutes } from './routes'
import { PageError } from './pages'

function App() {
  return (
    <Routes>
      {appRoutes.map(({ path, page }) => (
        <Route
          key={`app-${path}`}
          path={path}
          errorElement={<PageError />}
          Component={page}
        />
      ))}
    </Routes>
  )
}

export default App
