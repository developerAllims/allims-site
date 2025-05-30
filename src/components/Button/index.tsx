import { ComponentProps, useState } from 'react'
import { Link } from 'react-router-dom'

interface ButtonLinkProps extends ComponentProps<'a'> {
  classContainer?: string
  title: string
  to: string
  target?: string
  showArrow?: boolean
}

export const ButtonLink = ({
  className = '',
  classContainer = '',
  title,
  to = '/',
  target = '_self',
  showArrow = true,
  ...rest
}: ButtonLinkProps) => {
  const [hover, setHover] = useState(false)
  return (
    <div
      className={`flex ${
        classContainer.includes('justify-') ? classContainer : 'justify-center'
      }`}
    >
      <Link
        {...rest}
        to={to}
        target={target}
        className={`font-semibold max-w-max px-[1em] py-[0.4em] rounded-[3px] ${className}`}
        style={hover && showArrow ? { padding: '0.4em 1.2em 0.4em 0.7em' } : {}}
        onMouseEnter={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}
      >
        <span>{title}</span>
        {showArrow ? (
          <span className={`${hover ? '' : 'hidden'}`}>{'  ❯'}</span>
        ) : (
          ''
        )}
      </Link>
    </div>
  )
}

interface ButtonSimpleProps extends ComponentProps<'button'> {
  classContainer?: string
  title: string
  showArrow?: boolean
}

export const ButtonSimple = ({
  className = '',
  classContainer = '',
  title,
  showArrow = true,
  ...rest
}: ButtonSimpleProps) => {
  const [hover, setHover] = useState(false)
  const fontWeight = className.includes('font-') ? '' : 'font-semibold'
  return (
    <div
      className={`flex ${
        classContainer.includes('justify-') ? classContainer : 'justify-center'
      }`}
    >
      <button
        {...rest}
        className={`max-w-max px-[1em] py-[0.4em] rounded-[3px] ${className} ${fontWeight}`}
        style={hover && showArrow ? { padding: '0.4em 1.2em 0.4em 0.7em' } : {}}
        onMouseEnter={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}
      >
        <span className={`${fontWeight}`}>{title}</span>
        {showArrow ? (
          <span className={`${hover ? '' : 'hidden'} ${fontWeight}`}>
            {'  ❯'}
          </span>
        ) : (
          ''
        )}
      </button>
    </div>
  )
}

interface ButtonIconProps extends ComponentProps<'button'> {
  classContainer?: string
  title: string
  icon: string
}

import { CiCircleChevLeft } from 'react-icons/ci'

export const ButtonIcon = ({
  className = '',
  classContainer = '',
  title,
  icon,
  ...rest
}: ButtonIconProps) => {
  return (
    <div
      className={`flex ${
        classContainer.includes('justify-') ? classContainer : 'justify-center'
      }`}
    >
      <button
        {...rest}
        className={`flex gap-2 font-semibold max-w-max rounded-[3px] ${className}`}
      >
        {icon === 'CiCircleChevLeft' ? (
          <CiCircleChevLeft className="text-3xl" />
        ) : (
          ''
        )}
        <span className="text-xl font-semibold">{title}</span>
      </button>
    </div>
  )
}
