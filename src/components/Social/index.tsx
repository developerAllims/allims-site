/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps } from 'react'
import { dataSource } from '../../assets'

import { AiOutlineWhatsApp } from 'react-icons/ai'
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { useLanguage } from '../../hooks'

export const SocialWhatsApp = () => {
  const { language } = useLanguage()
  const { socials } = dataSource(language)
  const { whatsapp } = socials
  return (
    <div className="flex fixed right-6 lg:right-8 bottom-6 hover:bottom-8 lg:bottom-8 hover:lg:bottom-10 z-97 rounded-full shadow-md shadow-gray-primary">
      <a
        href={whatsapp}
        target="_blank"
        className="cursor-pointer border-4 border-green-primary rounded-full bg-green-primary"
      >
        <AiOutlineWhatsApp className="h-14 lg:h-18 w-14 lg:w-18 text-white" />
      </a>
    </div>
  )
}

interface SocialIconProps extends ComponentProps<'a'> {
  type: 'facebook' | 'instagram' | 'linkedin'
}

export const SocialIcon = ({ type }: SocialIconProps) => {
  const { language } = useLanguage()
  const { socials } = dataSource(language)
  const { facebook, instagram, linkedin } = socials
  const classes = 'h-7 lg:h-10 w-7 lg:w-10 text-white hover:text-gray-primary'
  const link =
    type === 'facebook' ? facebook : type === 'instagram' ? instagram : linkedin
  return (
    <div className="flex">
      <a href={link} target="_blank" className="cursor-pointer">
        {type === 'facebook' ? (
          <FaFacebookSquare className={classes} />
        ) : type === 'instagram' ? (
          <FaInstagram className={classes} />
        ) : (
          <FaLinkedin className={classes} />
        )}
      </a>
    </div>
  )
}

interface SocialContainerProps extends ComponentProps<'div'> {}

export const SocialContainer = ({
  children,
  className = ''
}: SocialContainerProps) => {
  return <div className={`flex flex-row gap-3 ${className}`}>{children}</div>
}
