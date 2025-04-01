import { ComponentProps, useState } from 'react'

interface ButtonProps extends ComponentProps<'a'> {
  classContainer?: string
}

export const Button = ({
  children,
  className = '',
  classContainer = '',
  ...rest
}: ButtonProps) => {
  const [hover, setHover] = useState(false)
  return (
    <div
      className={`flex ${
        classContainer.includes('justify-') ? classContainer : 'justify-center'
      }`}
    >
      <a
        {...rest}
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
      </a>
    </div>
  )
}
