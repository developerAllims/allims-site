import { logoCompanyPrimary } from '../../assets'
import { Header, Image, Menu, MenuItem } from '../../components'

export const HeaderLayout = () => {
  return (
    <Header>
      <Image src={logoCompanyPrimary} className="w-32 max-h-14" />
      <Menu>
        <MenuItem selected>Home</MenuItem>
        <MenuItem>Sistema ALLÌMS</MenuItem>
        <MenuItem>Módulos</MenuItem>
        <MenuItem>Empresa</MenuItem>
        <MenuItem>Contato</MenuItem>
      </Menu>
    </Header>
  )
}
