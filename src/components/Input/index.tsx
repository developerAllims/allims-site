import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InputProps extends ComponentProps<'input'> {}

export const Input = ({ children, className = '', ...rest }: InputProps) => {
  return (
    <input
      {...rest}
      className={`border-3 p-3 text-orange-primary placeholder-white w-full placeholder:font-semibold ${className}`}
    >
      {children}
    </input>
  )
}
