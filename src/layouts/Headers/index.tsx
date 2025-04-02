import { Link, useLocation } from 'react-router-dom'
import { Header, Image, Menu, MenuItem } from '../../components'
import { appRoutes, getBasePath } from '../../routes'
import { useScrollPosition } from '../../hooks'
import { dataHeaders } from '../../data'

export const LayoutHeaders = () => {
  const { icon } = dataHeaders
  const location = useLocation()
  const basePath = getBasePath(location.pathname)
  const scrollPosition = useScrollPosition()
  return (
    <Header
      className={scrollPosition > 200 ? 'h-14' : 'h-20'}
      style={{
        position: 'fixed',
        top: 0,
        boxShadow: '0 0 7px var(--color-gray-tertiary)',
        zIndex: 99
      }}
    >
      <Link to="/">
        <Image
          src={icon}
          className={`w-32 ${scrollPosition > 200 ? 'h-10' : 'h-14'}`}
        />
      </Link>
      <Menu>
        {appRoutes.map(
          ({ path, name, hide }) =>
            !hide && (
              <MenuItem
                key={`menu-${path}`}
                to={path}
                selected={basePath === path}
              >
                {name}
              </MenuItem>
            )
        )}
      </Menu>
    </Header>
  )
}
