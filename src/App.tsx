import { Route, Routes, useLocation } from 'react-router-dom'
import { appRoutes } from './routes'
import { PageError } from './pages'
import { useEffect } from 'react'

function App() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

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
