import { MouseEventHandler } from "react"

export interface ButtonProps {
  text:string
  background?: string 
  onClick?: MouseEventHandler<HTMLButtonElement>
}