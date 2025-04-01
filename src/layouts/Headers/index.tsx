import { useLocation } from 'react-router-dom'
import { logoCompanyPrimary } from '../../assets'
import { Header, Image, Menu, MenuItem, Link } from '../../components'
import { appRoutes } from '../../routes'
import { useScrollPosition } from '../../hooks'

export const LayoutHeaders = () => {
  const location = useLocation()
  const scrollPosition = useScrollPosition()
  return (
    <Header
      className={scrollPosition > 200 ? 'h-14' : 'h-20'}
      style={{
        position: 'fixed',
        top: 0,
        boxShadow: '0 0 7px var(--color-gray-tertiary)'
      }}
    >
      <Link href="/">
        <Image
          src={logoCompanyPrimary}
          className={`w-32 ${scrollPosition > 200 ? 'h-10' : 'h-14'}`}
        />
      </Link>
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
