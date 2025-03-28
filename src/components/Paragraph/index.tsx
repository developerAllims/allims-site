import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Paragraph1Props extends ComponentProps<'p'> {}

export const Paragraph1 = ({ children }: Paragraph1Props) => {
  return <p className="text-xl text-gray-primary font-semibold">{children}</p>
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Paragraph2Props extends ComponentProps<'p'> {}

export const Paragraph2 = ({ children }: Paragraph2Props) => {
  return <p className="text-base text-white font-semibold">{children}</p>
}
