import { Footer, Header, Image, Main, Menu, MenuItem } from './components'

import logoAllimsCinza from './assets/logo_allims_cinza.png'

function App() {
  return (
    <>
      <Header>
        <Image className="w-32 max-h-14" src={logoAllimsCinza} />
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>Home</MenuItem>
          <MenuItem>Home</MenuItem>
          <MenuItem>Home</MenuItem>
          <MenuItem>Home</MenuItem>
        </Menu>
      </Header>
      <Main></Main>
      <Footer>
        <span>Todos os Direitos Reservados @ALLÌMS</span>
        <span>Desenvolvido por ALLÌMS</span>
      </Footer>
    </>
  )
}

export default App
