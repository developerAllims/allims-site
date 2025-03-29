import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ArticleProps extends ComponentProps<'article'> {}

export const Article = ({
  children,
  className,
  style,
  ...rest
}: ArticleProps) => {
  return (
    <article
      {...rest}
      className={`flex flex-col h-full min-h-full w-1/2 ${className}`}
      style={{ padding: '7%', ...style }}
    >
      {children || ' '}
    </article>
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ArticleContainerProps extends ComponentProps<'div'> {}

export const ArticleContainer = ({
  children,
  ...rest
}: ArticleContainerProps) => {
  return (
    <div {...rest} className={`flex flex-col justify-between gap-6`}>
      {children}
    </div>
  )
}
