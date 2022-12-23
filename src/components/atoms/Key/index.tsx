import { KeyProps } from './Key.type'
import backspaceLight from '../../../assets/svgs/backspaceLight.svg'
import backspaceDark from '../../../assets/svgs/backspaceDark.svg'
import { ThemeContext } from '../../../context/Theme/ThemeContext'
import { useContext } from 'react'

export const Key = ({
  state = 'default',
  type = 'KEY',
  color,
  bgColor,
  value,
  onClick
}: KeyProps) => {
  const { theme } = useContext(ThemeContext)

  const width = type === 'KEY' ? 'w-[44.67px]' : 'w-[71.78px]'
  const fontStyle =
    type === 'KEY' ? 'text-[18px] leading-[21px]' : 'text-[15px] leading-[18px]'

  const backSpaceKey = () => {
    const iconBackSpace = theme === 'dark' ? backspaceDark : backspaceLight

    return <img src={iconBackSpace} alt='backspace' />
  }

  return (
    <div
      onClick={()=> onClick(value)}
      className={`cursor-pointer flex justify-center items-center ${fontStyle} font-semibold  ${width} h-[51.05px] dark:bg-[#565F7E] bg-[#D3D6DA] rounded-[5px]`}
    >
      {type === 'BACKSPACE'
        ? backSpaceKey()
        : type === 'ENTER'
        ? 'ENTER'
        : value}
    </div>
  )
}
