/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

interface MenuProps extends ComponentProps<'nav'> {}

import { RiMenuFill } from 'react-icons/ri'

export const Menu = ({ children, ...rest }: MenuProps) => {
  const [open, setOpen] = useState(false)

  const handleClick = useCallback(() => {
    setOpen(!open)
  }, [open])

  return (
    <nav
      {...rest}
      className="flex h-auto w-full justify-end items-center gap-6 relative"
    >
      <div className="flex lg:hidden justify-center items-center h-full w-18 hover:bg-gray-secondary">
        <RiMenuFill
          className=" h-auto min-w-6 cursor-pointer"
          onClick={handleClick}
        />
      </div>
      <ul
        className={`${
          open
            ? 'flex absolute top-[80px] right-0 w-50 h-auto p-0 lg:p-6 flex-col border-t-2 lg:border-t-0 bg-white'
            : 'hidden lg:flex'
        } lg:flex-row gap-0 shadow lg:shadow-none`}
      >
        {children}
      </ul>
    </nav>
  )
}

interface MenuItemProps extends ComponentProps<'a'> {
  className?: string
  selected?: boolean
  to: string
  isTop: boolean
}

export const MenuItem = ({
  children,
  className = '',
  selected,
  to,
  isTop = true,
  ...rest
}: MenuItemProps) => {
  const [hover, setHover] = useState(false)
  return (
    <li className="flex w-full h-full hover:bg-gray-secondary">
      <Link
        {...rest}
        to={to}
        className={`flex w-full h-full ${selected && 'text-orange-primary'}`}
        style={hover ? { opacity: '0.7' } : {}}
        onMouseEnter={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}
      >
        <span
          className={`flex justify-start lg:justify-center items-center w-full h-[50px] px-6 ${
            isTop ? 'lg:h-[80px]' : 'lg:h-[50px]'
          } ${className}`}
        >
          {children}
        </span>
      </Link>
    </li>
  )
}
