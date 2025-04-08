/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps } from 'react'

interface ArticleProps extends ComponentProps<'article'> {}

export const Article = ({
  children,
  className = '',
  style = {},
  ...rest
}: ArticleProps) => {
  return (
    <article
      {...rest}
      className={`flex flex-col h-full min-h-full w-1/2 py-[7%] ${className}`}
      style={{ ...style }}
    >
      {children || ' '}
    </article>
  )
}

interface ArticleContainerProps extends ComponentProps<'div'> {}

export const ArticleContainer = ({
  children,
  className = '',
  ...rest
}: ArticleContainerProps) => {
  return (
    <div
      {...rest}
      className={`flex flex-col justify-between ${
        className.includes('gap-') ? '' : 'gap-6'
      } ${className}`}
    >
      {children}
    </div>
  )
}
