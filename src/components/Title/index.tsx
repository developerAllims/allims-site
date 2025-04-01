import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface TitleProps extends ComponentProps<'h2'> {}

export const Title = ({ children, className = '', ...rest }: TitleProps) => {
  return (
    <h2 {...rest} className={`font-bold ${className}`}>
      {children}
    </h2>
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface TitleDividerProps extends ComponentProps<'span'> {}

export const TitleDivider = ({ className = '' }: TitleDividerProps) => {
  return (
    <span className={`text-xl font-extrabold ${className}`}>
      . . . . . . . . . . . . . . .
    </span>
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface TitleContainerProps extends ComponentProps<'div'> {}

export const TitleContainer = ({ children }: TitleContainerProps) => {
  return <div className="flex flex-col gap-5">{children}</div>
}
