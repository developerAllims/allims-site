import { GoLightBulb } from 'react-icons/go'

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
      <GoLightBulb size={30} className="min-w-[40px] text-white" />
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
