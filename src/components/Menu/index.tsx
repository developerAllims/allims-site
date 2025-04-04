import { ComponentProps, useState } from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface MenuProps extends ComponentProps<'nav'> {}

export const Menu = ({ children, ...rest }: MenuProps) => {
  return (
    <nav {...rest} className="flex h-full">
      <ul className="flex flex-row gap-6 h-full">{children}</ul>
    </nav>
  )
}

interface MenuItemProps extends ComponentProps<'a'> {
  selected?: boolean
  to: string
}

export const MenuItem = ({
  children,
  selected,
  to,
  ...rest
}: MenuItemProps) => {
  const [hover, setHover] = useState(false)
  return (
    <li className="flex h-full">
      <Link
        {...rest}
        to={to}
        className={`${selected && 'text-orange-primary'}`}
        style={hover ? { opacity: '0.7' } : {}}
        onMouseEnter={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}
      >
        <div className="flex items-center h-full">{children}</div>
      </Link>
    </li>
  )
}
