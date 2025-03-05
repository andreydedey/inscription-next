import { type ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> { }

export function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      className={twMerge("px-5 h-12 bg-gray-500 text-blue rounded-md hover:bg-blue hover:text-gray-900 transition-colorsduration-200", className)}
      {...props}
    />
  )
}
