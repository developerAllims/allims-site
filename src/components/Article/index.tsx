import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ArticleProps extends ComponentProps<'article'> {}

export const Article = ({ children, ...rest }: ArticleProps) => {
  return <article {...rest}>{children}</article>
}
