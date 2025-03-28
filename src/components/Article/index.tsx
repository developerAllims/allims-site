import { ComponentProps } from 'react'

interface ArticleProps extends ComponentProps<'article'> {
  myBgColor?: string
}

export const Article = ({
  children,
  myBgColor,
  className,
  ...rest
}: ArticleProps) => {
  return (
    <article
      {...rest}
      className={`flex flex-col h-full w-1/2 max-w-1/2 p-20 bg-${myBgColor} ${className}`}
    >
      {children || ' '}
    </article>
  )
}

interface ArticleContainerProps extends ComponentProps<'div'> {
  myHeight?: number
  myWidth?: number
}

export const ArticleContainer = ({
  children,
  myHeight,
  myWidth
}: ArticleContainerProps) => {
  return (
    <div
      className={`flex flex-col h-[${myHeight}px] w-[${myWidth}px] justify-between gap-6`}
    >
      {children}
    </div>
  )
}
