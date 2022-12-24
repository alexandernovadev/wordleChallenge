import React, { useContext } from 'react'
import { Button } from '../../atoms/Button'
import { Modal } from '../../molecules/Modal'
import { StatisticsProps } from './Statistics.type'
import { GameContext } from '../../../context/Game/GameContext'

export const Statistics = ({
  isModalStatiticsOpen,
  setIsModalStatisticsOpen
}: StatisticsProps) => {
  const { games, wins } = useContext(GameContext)

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
        <h3>
          La palabra era: <b>PERRO</b>
        </h3>

        <p className='mt-4'>SIGUIENTE PALABRA</p>
        <h3 className='mt-2 mb-12'>04:10</h3>

        <Button
          text={'Aceptar'}
          onClick={() => setIsModalStatisticsOpen(false)}
        />
      </div>
    </Modal>
  )
}