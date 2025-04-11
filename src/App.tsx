import { Route, Routes, useLocation } from 'react-router-dom'
import { appRoutes } from './routes'
import { PageError } from './pages'
import { useEffect } from 'react'
import { LanguageProvider, useLanguage } from './hooks'
import { LanguageHelmet } from './components'

function App() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useLanguage()

  return (
    <LanguageProvider>
      <LanguageHelmet />
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
    </LanguageProvider>
  )
}

export default App
