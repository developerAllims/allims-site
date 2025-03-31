import { useLocation } from 'react-router-dom'
import { logoCompanyPrimary } from '../../assets'
import { Header, Image, Menu, MenuItem } from '../../components'
import { appRoutes } from '../../routes'

export const LayoutHeaders = () => {
  const location = useLocation()
  return (
    <Header>
      <Image src={logoCompanyPrimary} className="w-32 max-h-14" />
      <Menu>
        {appRoutes.map(
          ({ path, name, hide }) =>
            !hide && (
              <MenuItem
                key={`menu-${path}`}
                href={path}
                selected={location.pathname === path}
              >
                {name}
              </MenuItem>
            )
        )}
      </Menu>
    </Header>
  )
}
