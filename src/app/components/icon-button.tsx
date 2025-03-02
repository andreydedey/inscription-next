import { ComponentProps, ReactNode } from "react"

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton(props: IconButtonProps) {
  return (
    <button className="px-5 h-12 bg-gray-500 text-blue rounded-md 
    hover:bg-blue hover:text-gray-900 transition-colorsduration-200"
    {...props}/>
  )
}