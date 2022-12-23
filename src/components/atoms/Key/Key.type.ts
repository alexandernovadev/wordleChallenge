export interface KeyProps {
  color?: string
  bgColor?: string,
  state?: "default"|"presed"|"active"
  type?: "ENTER"|"BACKSPACE" |"KEY"
  value?: string
  onClick: Function
}