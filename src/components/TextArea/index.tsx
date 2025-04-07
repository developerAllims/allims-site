/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps } from 'react'

interface TextAreaProps extends ComponentProps<'textarea'> {}

export const TextArea = ({ className = '', ...rest }: TextAreaProps) => {
  return (
    <textarea
      {...rest}
      className={`border-3 p-3 w-full placeholder:font-semibold min-h-[150px] placeholder-white ${className}`}
      style={{
        border: '3px solid var(--color-orange-primary)',
        color: 'var(--color-white)',
        fontWeight: '500',
        outline: 'none'
      }}
    />
  )
}
