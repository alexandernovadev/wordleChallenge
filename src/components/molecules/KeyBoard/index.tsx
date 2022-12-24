import React from 'react'
import { KeyBoarProps } from './KeyBoard.type'

export const KeyBoard = ({ children }: KeyBoarProps) => {
  return (
    <div className='mt-[33px] flex flex-col gap-[8.96px] justify-center items-center w-[638px] h-[238px] rounded-[15px] bg-keyBoardLight dark:bg-keyBoardDark'>
      {children}
    </div>
  )
}
