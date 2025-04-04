import { ComponentProps, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface GalleryProps extends ComponentProps<'div'> {}

export const Gallery = ({
  children,
  className = '',
  ...rest
}: GalleryProps) => {
  return (
    <div {...rest} className={`grid place-items-center ${className}`}>
      {children}
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface GalleryCheckTextProps extends ComponentProps<'div'> {}

export const GalleryCheckText = ({
  children,
  className = '',
  ...rest
}: GalleryCheckTextProps) => {
  return (
    <div {...rest} className={`flex gap-3 w-[225px] ${className}`}>
      <span className="text-4xl text-orange-primary">☑</span>
      <span className="text-base text-left font-semibold text-gray-primary">
        {children}
      </span>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface GalleryLampTextProps extends ComponentProps<'div'> {}

import { TiLightbulb } from 'react-icons/ti'

export const GalleryLampText = ({
  children,
  className = '',
  ...rest
}: GalleryLampTextProps) => {
  return (
    <div {...rest} className={`flex gap-3 w-full h-[120px] ${className}`}>
      {/* <span
        className="text-4xl"
        style={{
          textShadow: [
            `${size}px ${size}px ${size}px #fff`,
            `${size}px -${size}px ${size}px #fff`,
            `-${size}px ${size}px ${size}px #fff`,
            `-${size}px -${size}px ${size}px #fff`
          ].join(', ')
        }}
      >
        💡
      </span> */}
      <TiLightbulb size={36} className="min-w-[40px] text-white opacity-60" />
      <span className="text-base text-left font-normal text-white">
        {children}
      </span>
    </div>
  )
}

interface GalleryIconTextProps extends ComponentProps<'div'> {
  icon: string
}

export const GalleryIconText = ({
  children,
  className = '',
  icon,
  ...rest
}: GalleryIconTextProps) => {
  return (
    <div {...rest} className={`flex flex-col gap-3 w-[225px] ${className}`}>
      <img src={icon} className="max-h-[133px] object-contain" />
      <span className="text-base font-semibold text-gray-primary">
        {children}
      </span>
    </div>
  )
}

import { FaPhoneAlt } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'

interface GalleryIconLabelTextProps extends ComponentProps<'div'> {
  iconType: string
  label: string
}

export const GalleryIconLabelText = ({
  children,
  className = '',
  iconType = 'email',
  label,
  ...rest
}: GalleryIconLabelTextProps) => {
  return (
    <div {...rest} className={`flex gap-3 w-[225px] ${className}`}>
      {iconType === 'phone' ? (
        <FaPhoneAlt size={30} className="min-w-[50px] text-orange-primary" />
      ) : iconType === 'address' ? (
        <FiMapPin size={35} className="min-w-[50px] text-orange-primary" />
      ) : (
        <MdEmail size={42} className="min-w-[50px] text-orange-primary" />
      )}
      <div className="flex flex-col gap-1">
        <label className="text-lg font-bold text-white">{label}</label>
        <span
          className="text-base font-semibold text-white"
          style={{ width: '273px' }}
        >
          {children}
        </span>
      </div>
    </div>
  )
}

interface GalleryPhotoTextProps extends ComponentProps<'div'> {
  icon: string
}

export const GalleryPhotoText = ({
  children,
  className = '',
  icon,
  ...rest
}: GalleryPhotoTextProps) => {
  const [hover, setHover] = useState(false)
  return (
    <div {...rest} className={`flex flex-col gap-7 w-[225px] ${className}`}>
      <img
        src={icon}
        className="max-h-[161px] object-contain"
        style={
          hover
            ? {}
            : { filter: 'grayscale(100%)', transform: 'translate(0, 10px)' }
        }
        onMouseEnter={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}
      />
      <span className="text-base font-semibold text-gray-primary">
        {children}
      </span>
    </div>
  )
}
