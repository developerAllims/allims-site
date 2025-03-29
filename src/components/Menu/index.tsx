import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface MenuProps extends ComponentProps<'nav'> {}

export const Menu = ({ children, ...rest }: MenuProps) => {
  return (
    <nav {...rest} className="flex">
      <ul className="flex flex-row gap-6">{children}</ul>
    </nav>
  )
}

interface MenuItemProps extends ComponentProps<'li'> {
  selected?: boolean
}

export const MenuItem = ({ children, selected }: MenuItemProps) => {
  return (
    <li>
      <a className={`${selected && 'text-orange-primary'}`} style={{}}>
        {children}
      </a>
    </li>
  )
}
