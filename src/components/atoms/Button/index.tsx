import { ButtonProps } from './Button.types'

export const Button = ({
  text,
  background = 'bg-green',
  onClick,
  isDisabled = false
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer w-[263px] h-[50px] rounded-[5px] text-white ${isDisabled ? 'bg-gray cursor-not-allowed': background} text-[28px] font-extrabold`}
    >
      {text}
    </button>
  )
}
