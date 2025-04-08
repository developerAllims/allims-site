/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps } from 'react'

interface TextAreaProps extends ComponentProps<'textarea'> {}

export const TextArea = ({ className = '', ...rest }: TextAreaProps) => {
  return (
    <textarea
      {...rest}
      className={`border-3 p-3 w-full font-semibold placeholder:font-semibold border-orange-primary placeholder-white text-white min-h-[150px] ${className}`}
    />
  )
}
