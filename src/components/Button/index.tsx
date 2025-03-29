import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Button1Props extends ComponentProps<'a'> {}

export const Button1 = ({ children }: Button1Props) => {
  return (
    <div>
      <a className="bg-orange-primary text-white font-semibold text-lg max-w-max rounded-[3px] px-[1em] py-[0.4em] button-hover">
        {children}
      </a>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Button2Props extends ComponentProps<'a'> {}

export const Button2 = ({ children }: Button2Props) => {
  return (
    <div>
      <a className="border-2 text-white font-semibold text-lg max-w-max rounded-[3px] px-[1em] py-[0.4em] button-hover">
        {children}
      </a>
    </div>
  )
}
