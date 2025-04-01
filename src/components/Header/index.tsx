import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface HeaderProps extends ComponentProps<'header'> {}

export const Header = ({ children, className = '', ...rest }: HeaderProps) => {
  return (
    <header
      {...rest}
      className={`flex justify-center w-full text-sm font-semibold text-gray-primary bg-white transition-all ${className}`}
    >
      <div className="flex w-full max-w-5xl justify-between items-center">
        {children}
      </div>
    </header>
  )
}
