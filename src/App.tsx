import { useContext, useState } from 'react'
import { Key } from './components/atoms/Key'

import { Game } from './components/molecules/Game'
import { KeyBoard } from './components/molecules/KeyBoard'
import { MiniHeader } from './components/molecules/MiniHeader'
import { Modal } from './components/molecules/Modal'
import { Instructions } from './components/organisms/Instructions'
import { Statistics } from './components/organisms/Statistics'
import { ThemeContext } from './context/Theme/ThemeContext'

function App() {
  const [isModalInstructionOpen, setIsModalInstructionOpen] = useState(false)
  const [isModalStatisticsOpen, setIsModalStatisticsOpen] = useState(false)

  const onKeyPressed = (letter: string) => {
    console.log('==>   ', letter)
  }
  return (
    <>
      <div className='flex flex-col mt-4 justify-center items-center mb-8'>
        <MiniHeader
          openInstructions={() => setIsModalInstructionOpen(true)}
          openStatistics={() => setIsModalStatisticsOpen(true)}
        />
        <Game onPressed={onKeyPressed} />
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
            <Key value='Ñ' onClick={onKeyPressed} />
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
      </div>

      <Instructions
        isModalInstructionOpen={isModalInstructionOpen}
        setIsModalInstructionOpen={setIsModalInstructionOpen}
      />
      <Statistics
        isModalStatiticsOpen={isModalStatisticsOpen}
        setIsModalStatisticsOpen={setIsModalStatisticsOpen}
      />
    </>
  )
}

export default App
