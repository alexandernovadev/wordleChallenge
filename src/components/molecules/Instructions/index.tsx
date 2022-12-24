import { Button } from '../../atoms/Button'
import { Letter } from '../../atoms/Letter'
import { Modal } from '../../molecules/Modal'
import { IntructionsProps } from './Instuctions.type'

export const Instructions = ({
  isModalInstructionOpen,
  setIsModalInstructionOpen
}: IntructionsProps) => {

  return (
    <Modal isOpen={isModalInstructionOpen}>
      <div className='flex justify-center items-center mb-8 text-slate-900 dark:text-white'>
        <h1>Cómo jugar</h1>
      </div>
      <p>
        Adivina la palabra oculta en cinco intentos. <br />
        <br />
        Cada intento debe ser una palabra válida de 5 letras.
        <br />
        <br />
        Después de cada intento el color de las letras cambia para mostrar qué
        tan cerca estás de acertar la palabra.
      </p>
      <h3 className='mt-4 mb-[26px]'>Ejemplos</h3>
      <div className='flex gap-2'>
        <Letter letter='g' color='text-dark dark:text-white' background='bg-green' />
        <Letter letter='a' color='text-dark dark:text-white' />
        <Letter letter='t' color='text-dark dark:text-white'/>
        <Letter letter='o' color='text-dark dark:text-white'/>
        <Letter letter='s' color='text-dark dark:text-white'/>
      </div>
      <p className='mt-[19px] mb-[23px]'>
        La letra <b>G</b> está en la palabra y en la posición correcta.
      </p>
      <div className='flex gap-2'>
        <Letter letter='v' color='text-dark dark:text-white'/>
        <Letter letter='o' color='text-dark dark:text-white'/>
        <Letter letter='c' background='bg-yellow' />
        <Letter letter='a' color='text-dark dark:text-white'/>
        <Letter letter='l' color='text-dark dark:text-white'/>
      </div>
      <p className='mt-[19px] mb-[23px]'>
        La letra <b>C</b> está en la palabra pero en la posición incorrecta.
      </p>

      <div className='flex gap-2'>
        <Letter letter='c' color='text-dark dark:text-white' />
        <Letter letter='a' color='text-dark dark:text-white'/>
        <Letter letter='n' color='text-dark dark:text-white'/>
        <Letter letter='t' color='text-dark dark:text-white'/>
        <Letter letter='o' color='text-dark dark:text-white' background='bg-gray' />
      </div>
      <p className='mt-[19px] mb-[23px]'>
        La letra <b>O</b> no está en la palabra.
      </p>
      <p>
        Puede haber letras repetidas. Las pistas son <br />
        independientes para cada letra.
      </p>
      <div className='flex flex-col justify-center items-center py-[31px]'>
        <p className='mb-[34px]'>¡Una palabra nueva cada 5 minutos!</p>
        <Button
          text='!JUGAR¡'
          onClick={() => setIsModalInstructionOpen(false)}
        />
      </div>
    </Modal>
  )
}
