import { ComponentProps, useState } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps extends ComponentProps<'a'> {
  classContainer?: string
  to: string
}

export const Button = ({
  children,
  className = '',
  classContainer = '',
  to,
  ...rest
}: ButtonProps) => {
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
        className={`font-semibold max-w-max px-[1em] py-[0.4em] rounded-[3px] ${className}`}
        style={hover ? { padding: '0.4em 1.2em 0.4em 0.7em' } : {}}
        onMouseEnter={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}
      >
        {`${children}${hover ? '  ❯' : ''}`}
      </Link>
    </div>
  )
}
