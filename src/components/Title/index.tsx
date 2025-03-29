import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Title1Props extends ComponentProps<'h1'> {}

export const Title1 = ({ children, className, ...rest }: Title1Props) => {
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

export const Title2 = ({ children, className, ...rest }: Title2Props) => {
  return (
    <h1 {...rest} className={`text-4xl font-bold text-white ${className}`}>
      {children}
    </h1>
  )
}
