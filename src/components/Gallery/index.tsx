import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface GalleryProps extends ComponentProps<'div'> {}

export const Gallery = ({
  children,
  className = '',
  ...rest
}: GalleryProps) => {
  return (
    <div
      {...rest}
      className={`grid gap-20 grid-cols-4 place-items-center ${className}`}
    >
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
  return (
    <div {...rest} className={`flex flex-col gap-7 w-[225px] ${className}`}>
      <img src={icon} className="max-h-[161px] object-contain" />
      <span className="text-base font-semibold text-gray-primary">
        {children}
      </span>
    </div>
  )
}
