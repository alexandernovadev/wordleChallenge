import React, { useContext } from 'react'
import { Button } from '../../atoms/Button'
import { Modal } from '../../molecules/Modal'
import { StatisticsProps } from './Statistics.type'
import { GameContext } from '../../../context/Game/GameContext'
import { formatTime } from '../../../utils/MiliSecondToTime'

export const Statistics = ({
  isModalStatiticsOpen,
  setIsModalStatisticsOpen
}: StatisticsProps) => {
  const { games, wins, time, isDisabledGame } = useContext(GameContext)
  return (
    <Modal isOpen={isModalStatiticsOpen} classNames='!px-[70px]'>
      <div className='flex justify-center items-center mb-[44px] '>
        <h1>Estadísticas</h1>
      </div>

      <div className='flex items-center justify-between'>
        <section className='flex-col flex justify-center items-center'>
          <h1>{games}</h1>
          <p className='mt-4 text-[21px]'>Jugadas</p>
        </section>
        <section className='flex-col flex justify-center items-center'>
          <h1>{wins}</h1>
          <p className='mt-4 text-[21px]'>Victorias</p>
        </section>
      </div>

      <div className='flex flex-col justify-center items-center mt-[42px]'>
        {localStorage.getItem('oldWord') && (
          <h3>
            {' '}
            La palabra era: <b>{localStorage.getItem('oldWord')}</b>
          </h3>
        )}

        <p className='mt-4'>SIGUIENTE PALABRA</p>
        <h3 className='mt-2 mb-12'>{formatTime(time)}</h3>

        <Button
          text={'Aceptar'}
          isDisabled={isDisabledGame}
          onClick={() => setIsModalStatisticsOpen(isDisabledGame)}
        />
      </div>
    </Modal>
  )
}
