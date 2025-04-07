/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps } from 'react'

interface ParagraphProps extends ComponentProps<'p'> {}

export const Paragraph = ({
  children,
  className = '',
  ...rest
}: ParagraphProps) => {
  return (
    <p {...rest} className={`font-semibold ${className}`}>
      {children}
    </p>
  )
}
