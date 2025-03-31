import { logoCompanyPrimary } from '../../assets'
import { Header, Image, Menu, MenuItem } from '../../components'
import { appRoutes } from '../../routes'

export const LayoutHeaders = () => {
  return (
    <Header>
      <Image src={logoCompanyPrimary} className="w-32 max-h-14" />
      <Menu>
        {appRoutes.map(
          ({ path, name, hide }) =>
            !hide && (
              <MenuItem
                href={path}
                selected={window.location.pathname === path}
              >
                {name}
              </MenuItem>
            )
        )}
      </Menu>
    </Header>
  )
}
