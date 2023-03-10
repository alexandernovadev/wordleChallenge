import { useCallback, useContext, useMemo, useState } from 'react'
import { GameContext } from '../../../context/Game/GameContext'
import { Key } from '../../atoms/Key'
import { Board } from '../../molecules/Board'
import { Instructions } from '../../molecules/Instructions'
import { KeyBoard } from '../../molecules/KeyBoard'
import { MiniHeader } from '../../molecules/MiniHeader'
import { Statistics } from '../../molecules/Statistics'

export const Game = () => {
  const { dispatch,isFirstGame ,isDisabledGame} = useContext(GameContext)
  const [isModalInstructionOpen, setIsModalInstructionOpen] = useState(isFirstGame)
  const [isModalStatisticsOpen, setIsModalStatisticsOpen] = useState(isDisabledGame)
  const [isPresseKey, setIsPresseKey] = useState(false)

  const onKeyPressed = useCallback((letter: string) => {
    dispatch({ type: 'SET_LETTER', payload: letter })
    setIsPresseKey((v) => !v)
  }, [])

  const instructions = useMemo(
    () => (
      <Instructions
        isModalInstructionOpen={isModalInstructionOpen}
        setIsModalInstructionOpen={setIsModalInstructionOpen}
      />
    ),
    [isModalInstructionOpen]
  )
  const statistics = useMemo(
    () => (
      <Statistics
        isModalStatiticsOpen={isModalStatisticsOpen}
        setIsModalStatisticsOpen={setIsModalStatisticsOpen}
      />
    ),
    [isModalStatisticsOpen]
  )

  return (
    <>
      <div className='flex flex-col mt-4 justify-center items-center mb-8 select-none'>
        <MiniHeader
          openInstructions={() => setIsModalInstructionOpen(true)}
          openStatistics={() => setIsModalStatisticsOpen(true)}
        />
        <Board
          isPresseKey={isPresseKey}
          showStatitics={() => setIsModalStatisticsOpen(true)}
        />
        <KeyBoard>
          <div className='flex gap-[9.57px] '>
            <Key value='Q' onClick={onKeyPressed} />
            <Key value='W' onClick={onKeyPressed} />
            <Key value='E' onClick={onKeyPressed} />
            <Key value='R' onClick={onKeyPressed} />
            <Key value='T' onClick={onKeyPressed} />
            <Key value='Y' onClick={onKeyPressed} />
            <Key value='U' onClick={onKeyPressed} />
            <Key value='I' onClick={onKeyPressed} />
            <Key value='O' onClick={onKeyPressed} />
            <Key value='P' onClick={onKeyPressed} />
          </div>
          <div className='flex gap-[9.57px] relative left-[20px]'>
            <Key value='A' onClick={onKeyPressed} />
            <Key value='S' onClick={onKeyPressed} />
            <Key value='D' onClick={onKeyPressed} />
            <Key value='F' onClick={onKeyPressed} />
            <Key value='G' onClick={onKeyPressed} />
            <Key value='H' onClick={onKeyPressed} />
            <Key value='J' onClick={onKeyPressed} />
            <Key value='K' onClick={onKeyPressed} />
            <Key value='L' onClick={onKeyPressed} />
            <Key value='??' onClick={onKeyPressed} />
          </div>
          <div className='flex gap-[9.57px] relative right-[20px]'>
            <Key value='Enter' type='ENTER' onClick={onKeyPressed} />
            <Key value='Z' onClick={onKeyPressed} />
            <Key value='X' onClick={onKeyPressed} />
            <Key value='C' onClick={onKeyPressed} />
            <Key value='V' onClick={onKeyPressed} />
            <Key value='B' onClick={onKeyPressed} />
            <Key value='N' onClick={onKeyPressed} />
            <Key value='M' onClick={onKeyPressed} />
            <Key value='Backspace' type='BACKSPACE' onClick={onKeyPressed} />
          </div>
        </KeyBoard>
        {instructions}
        {statistics}
      </div>
    </>
  )
}
