import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Title1Props extends ComponentProps<'h1'> {}

export const Title1 = ({ children, className = '', ...rest }: Title1Props) => {
  return (
    <h1
      {...rest}
      className={`text-[55px] font-bold text-orange-primary ${className}`}
    >
      {children}
    </h1>
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Title2Props extends ComponentProps<'h2'> {}

export const Title2 = ({ children, className = '', ...rest }: Title2Props) => {
  return (
    <h1 {...rest} className={`text-4xl font-bold text-white ${className}`}>
      {children}
    </h1>
  )
}

interface Title3Props extends ComponentProps<'h2'> {
  reverse?: boolean
}

export const Title3 = ({
  children,
  className = '',
  reverse = false,
  ...rest
}: Title3Props) => {
  return (
    <div className="flex flex-col gap-5">
      <h1
        {...rest}
        className={`text-4xl font-bold ${
          reverse ? 'text-orange-primary' : 'text-gray-primary'
        } ${className}`}
      >
        {children}
      </h1>
      <span
        className={`text-xl font-extrabold ${
          reverse ? 'text-gray-primary' : 'text-orange-primary'
        }`}
      >
        . . . . . . . . . . . . . . .
      </span>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Title2Props extends ComponentProps<'h2'> {}

export const Title4 = ({ children, className = '', ...rest }: Title2Props) => {
  return (
    <h2 {...rest} className={`text-2xl font-bold text-white ${className}`}>
      {children}
    </h2>
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Title5Props extends ComponentProps<'h2'> {}

export const Title5 = ({ children, className = '', ...rest }: Title5Props) => {
  return (
    <h3
      {...rest}
      className={`text-3xl font-bold text-gray-primary ${className}`}
    >
      {children}
    </h3>
  )
}
