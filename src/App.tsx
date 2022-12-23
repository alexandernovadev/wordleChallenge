import { useContext, useState } from 'react'

import { Game } from './components/molecules/Game'
import { MiniHeader } from './components/molecules/MiniHeader'
import { Modal } from './components/molecules/Modal'
import { Instructions } from './components/organisms/Instructions'
import { Statistics } from './components/organisms/Statistics'
import { ThemeContext } from './context/Theme/ThemeContext'

function App() {
  const [isModalInstructionOpen, setIsModalInstructionOpen] = useState(false)
  const [isModalStatisticsOpen, setIsModalStatisticsOpen] = useState(false)

  return (
    <>
      <div className='flex flex-col mt-[83px] justify-center items-center mb-8'>
        <MiniHeader
          openInstructions={() => setIsModalInstructionOpen(true)}
          openStatistics={() => setIsModalStatisticsOpen(true)}
        />
        <Game />
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
