import { ComponentProps } from 'react'

interface DividerProps extends ComponentProps<'div'> {
  classContainer?: string
}

export const Divider = ({
  className = '',
  classContainer = ''
}: DividerProps) => {
  return (
    <div className={`${classContainer}`}>
      <div className={`bg-gray-primary w-full h-[1px] ${className}`} />
    </div>
  )
}
