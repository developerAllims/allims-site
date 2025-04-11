import { Link, useLocation } from 'react-router-dom'
import { dataSource } from '../../assets'
import { Header, Image, LanguageSelect, Menu, MenuItem } from '../../components'
import { appRoutes, getBasePath } from '../../routes'
import { useLanguage, useScrollPosition } from '../../hooks'

export const LayoutHeaders = () => {
  const { language, setLanguage } = useLanguage()
  const { pages, headers } = dataSource(language)

  const { icon } = headers
  const location = useLocation()
  const basePath = getBasePath(location.pathname)
  const scrollPosition = useScrollPosition()
  const isTop = scrollPosition < 200

  return (
    <>
      <div
        className={`flex w-full h-20 bg-white ${isTop ? 'lg:h-20' : 'lg:h-14'}`}
      />
      <Header
        className={`fixed top-0 z-98 px-6 sm:px-16 lg:px-0 border-b-2 lg:shadow-md h-20 ${
          isTop ? 'lg:h-20' : 'lg:h-14'
        }`}
      >
        <Link to="/">
          <Image
            icon={icon}
            classContainer="w-32"
            className={`w-32 h-full ${isTop ? 'lg:h-14' : 'lg:h-10'}`}
          />
        </Link>
        <div className="flex h-full">
          <Menu>
            {appRoutes.map(
              ({ path, hide }, idx) =>
                !hide && (
                  <MenuItem
                    key={`menu-${path}`}
                    to={path}
                    selected={basePath === path}
                    isTop={isTop}
                    className={`${
                      idx + 1 === appRoutes.length
                        ? ''
                        : 'border-b-2 lg:border-b-0 border-gray-secondary'
                    }`}
                  >
                    {pages[path].name}
                  </MenuItem>
                )
            )}
          </Menu>
          <LanguageSelect lang={language} setLang={setLanguage} />
        </div>
      </Header>
    </>
  )
}
