import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Button1Props extends ComponentProps<'a'> {}

export const Button1 = ({ children }: Button1Props) => {
  return (
    <a className="bg-orange-primary text-white font-normal text-lg max-w-max px-4 py-1.5 rounded-[3px]">
      {children}
    </a>
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Button2Props extends ComponentProps<'a'> {}

export const Button2 = ({ children }: Button2Props) => {
  return (
    <a className="border-2 text-white font-normal text-lg max-w-max px-4 py-1.5 rounded-[3px]">
      {children}
    </a>
  )
}
