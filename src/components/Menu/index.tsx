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

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface MenuItemProps extends ComponentProps<'li'> {}

export const MenuItem = ({ children }: MenuItemProps) => {
  return <li>{children}</li>
}
