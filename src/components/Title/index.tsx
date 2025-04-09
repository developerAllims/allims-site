/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps } from 'react'

interface TitleProps extends ComponentProps<'h2'> {}

export const Title = ({ children, className = '', ...rest }: TitleProps) => {
  return (
    <h2 {...rest} className={`font-bold ${className}`}>
      {children}
    </h2>
  )
}

interface TitleMainProps extends ComponentProps<'h1'> {}

export const TitleMain = ({
  children,
  className = '',
  ...rest
}: TitleMainProps) => {
  return (
    <h1 {...rest} className={`font-bold ${className}`}>
      {children}
    </h1>
  )
}

interface TitleDividerProps extends ComponentProps<'span'> {}

export const TitleDivider = ({ className = '' }: TitleDividerProps) => {
  return (
    <span className={`text-xl font-extrabold ${className}`}>
      . . . . . . . . . . . . . . .
    </span>
  )
}

interface TitleContainerProps extends ComponentProps<'div'> {}

export const TitleContainer = ({ children }: TitleContainerProps) => {
  return <div className="flex flex-col gap-5">{children}</div>
}
