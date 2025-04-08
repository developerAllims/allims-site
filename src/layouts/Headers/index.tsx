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
  const isTop = scrollPosition < 200
  return (
    <>
      <div
        className={`w-full h-20 bg-white ${isTop ? 'lg:h-20' : 'lg:h-14'}`}
      />
      <Header
        className={`lg:fixed lg:top-0 lg:z-98 px-6 lg:px-0 border-b-2 lg:shadow-md h-20 ${
          isTop ? 'lg:h-20' : 'lg:h-14'
        }`}
      >
        <Link to="/">
          <Image
            src={icon}
            className={`w-32 h-full ${isTop ? 'lg:h-14' : 'lg:h-10'}`}
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
    </>
  )
}
