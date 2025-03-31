import { Route, Routes } from 'react-router-dom'
import { PageError, PageHome, PageTest } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" errorElement={<PageError />} Component={PageHome} />
      <Route path="/test" errorElement={<PageError />} Component={PageTest} />
      <Route path="*" Component={PageError} />
    </Routes>
  )
}

export default App
