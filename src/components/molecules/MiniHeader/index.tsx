import { ChangeEvent, useContext } from 'react'
import { ThemeContext } from '../../../context/Theme/ThemeContext'
import { handleChangeThemeInLocalStorage } from '../../../utils/ChangueThemeLocal'
import { Switch } from '../../atoms/Switch'
import { icons } from './data'
import { MiniHeaderProps } from './MiniHeader.types'

export const MiniHeader = ({
  openInstructions,
  openStatistics
}: MiniHeaderProps) => {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleChangeTheme = (value: ChangeEvent<HTMLInputElement>) => {
    const typeTheme = value.target.checked ? 'light' : 'dark'
    setTheme(typeTheme)
    handleChangeThemeInLocalStorage(typeTheme)
  }

  const { bi_question, chart } = icons[theme]

  return (
    <div
      className={`w-[638px] h-[84px] rounded-[15px] flex justify-around items-center bg-miniheaderLigh dark:bg-miniheaderDark `}
    >
      <div>
        <img
          title='Instrucciones'
          onClick={openInstructions}
          src={bi_question}
          className='w-[27px] h-[27px] object-cover cursor-pointer mr-[13px]'
          alt='Instrucciones'
        />
      </div>
      <div>
        <h1
          className={`font-semibold text-[40px] leading-[47px] tracking-[0.075em] dark:text-lightWhite text-darKBlue`}
        >
          WORDLE
        </h1>
      </div>
      <div className='flex'>
        <img
          title='Estadisticas'
          onClick={openStatistics}
          src={chart}
          className='w-[27px] h-[27px] object-cover cursor-pointer mr-[13px]'
          alt='Estadisticas'
        />
        <Switch
          onChange={handleChangeTheme}
          value={theme === 'light' ? true : false}
        />
      </div>
    </div>
  )
}
