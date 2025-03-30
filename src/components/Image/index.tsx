import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ImageProps extends ComponentProps<'img'> {}

export const Image = ({ children, className = '', ...rest }: ImageProps) => {
  return (
    <img {...rest} className={`object-contain ${className}`}>
      {children}
    </img>
  )
}

interface LogoProps extends ComponentProps<'img'> {
  client:
    | 'adambiental'
    | 'adm'
    | 'agrolab'
    | 'agronomico'
    | 'allims'
    | 'alsukkar'
    | 'ascana'
    | 'atralabs'
    | 'bachema'
    | 'biolab'
    | 'camda'
    | 'centralanalitica'
    | 'cetal'
    | 'cispar'
    | 'cls'
    | 'colombo'
    | 'coopercitrus'
    | 'cooxupe'
    | 'cqlab'
    | 'custom'
    | 'dark'
    | 'default'
    | 'dsm'
    | 'econsulting'
    | 'esalq'
    | 'fundacaoabc'
    | 'iac'
    | 'ibra'
    | 'laborfort'
    | 'light'
    | 'mattos'
    | 'salus'
    | 'solum'
    | 'ufes'
    | 'unicamp'
    | 'upf'
    | 'vapor'
}

export const Logo = ({
  children,
  className = '',
  client,
  ...rest
}: LogoProps) => {
  return (
    <img
      {...rest}
      src={`https://allims-files.s3.sa-east-1.amazonaws.com/front/${client}_logo_color.png`}
      className={`max-h-[50px] object-contain ${className}`}
    >
      {children}
    </img>
  )
}
