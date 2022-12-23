import React from 'react'
import { Button } from '../../atoms/Button'
import { Modal } from '../../molecules/Modal'
import { StatisticsProps } from './Statistics.type'

export const Statistics = ({
  isModalStatiticsOpen,
  setIsModalStatisticsOpen
}: StatisticsProps) => {
  return (
    <Modal isOpen={isModalStatiticsOpen} classNames='!px-[70px]'>
      <div className='flex flex justify-center items-center mb-[44px] '>
        <h1>Estadísticas</h1>
      </div>

      <div className='flex items-center  justify-between'>
        <section className='flex flex-col flex justify-center items-center'>
          <h1>8</h1>
          <p className='mt-4 text-[21px]'>Jugadas</p>
        </section>
        <section className='flex flex-col flex justify-center items-center'>
          <h1>3</h1>
          <p className='mt-4 text-[21px]'>Victorias</p>
        </section>
      </div>

      <div className='flex flex-col justify-center items-center mt-[42px]'>
        <h3>La palabra era: <b>PERRO</b></h3>

        <p className='mt-4'>SIGUIENTE PALABRA</p>
        <h3 className='mt-2 mb-12'>04:10</h3>

        <Button text={'Aceptar'} onClick={()=>setIsModalStatisticsOpen(false) }/>
      </div>
    </Modal>
  )
}
