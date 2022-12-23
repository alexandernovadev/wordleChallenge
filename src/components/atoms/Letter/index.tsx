import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/Theme/ThemeContext'
import { Classes } from './Classes'
import { LetterProps } from './Letter.type'

export const Letter = (props: LetterProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={Classes(props,theme)}>
      {props.letter.toLocaleUpperCase()}
    </div>
  )
}
