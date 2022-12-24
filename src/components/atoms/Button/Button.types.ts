import { MouseEventHandler } from "react"

export interface ButtonProps {
  text:string
  background?: string 
  isDisabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}