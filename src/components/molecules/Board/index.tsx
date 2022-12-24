import { Letter } from '../../atoms/Letter'
import { BoardProps } from './Board.type'
import { useWordleGame } from '../../../hooks/useWordleGame'

export const Board = ({ isPresseKey, showStatitics }: BoardProps) => {
  const { matrix, boxActive } = useWordleGame({ isPresseKey, showStatitics })

  return (
    <>
      {matrix.map((letterBoxs, i) => (
        <div className='flex gap-2 m-2' key={`row-${i}`}>
          {letterBoxs.map((letter_box, j) => (
            <Letter
              key={`col-${j}`}
              letter={letter_box.letter}
              background={letter_box.bgColor}
              active={i == boxActive[0] && j == boxActive[1]}
            />
          ))}
        </div>
      ))}
    </>
  )
}
