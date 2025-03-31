import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Gallery4Props extends ComponentProps<'div'> {}

export const Gallery4 = ({
  children,
  className = '',
  ...rest
}: Gallery4Props) => {
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
interface Gallery3Props extends ComponentProps<'div'> {}

export const Gallery3 = ({
  children,
  className = '',
  ...rest
}: Gallery3Props) => {
  return (
    <div
      {...rest}
      className={`grid gap-20 grid-cols-3 place-items-center ${className}`}
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

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface GalleryLampTextProps extends ComponentProps<'div'> {}

export const GalleryLampText = ({
  children,
  className = '',
  ...rest
}: GalleryLampTextProps) => {
  const size = 1
  return (
    <div
      {...rest}
      className={`flex gap-3 w-[23${size}px] h-[120px] ${className}`}
    >
      <span
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
      </span>
      <span className="text-base text-left font-semibold text-white">
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
