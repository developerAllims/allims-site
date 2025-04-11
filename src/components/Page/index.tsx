/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps } from 'react'

interface PageContainerProps extends ComponentProps<'div'> {}

export const PageContainer = ({
  children,
  className = ''
}: PageContainerProps) => {
  const direction = className.includes('flex-col') ? '' : 'flex-row'
  return (
    <div
      className={`flex ${direction} w-full max-w-2xl lg:max-w-4xl xl:max-w-6xl ${className}`}
    >
      {children}
    </div>
  )
}
