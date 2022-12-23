import { LetterProps } from './Letter.type'

export const Classes = (
  {
    background = 'white',
    border = 'border border-sky-500',
    color = 'text-white',
    active = false
  }: LetterProps,
  theme: string
) => {
  let letterContainer = ['flex justify-center items-center rounded-[5px]']
  letterContainer.push('w-[76px] h-[76px] text-[35px] font-extrabold')

  letterContainer.push(color)
  letterContainer.push(background)
  letterContainer.push(background == 'white' ? border : '')
  letterContainer.push(
    active ? 'scale-110 shadow-md shadow-[#919fc1] skew-x-1 !border-1' : ''
  )

  return letterContainer.join(' ')
}
