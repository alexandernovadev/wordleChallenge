import { useContext, useEffect, useState } from 'react'
import { Letter } from '../../atoms/Letter'
import { letters } from '../../../assets/data/data'
import { removeSpecialCharacter } from '../../../utils/RemoveSpecialLetters'
import { BoardProps } from './Board.type'
import { GameContext } from '../../../context/Game/GameContext'
// import { useWordleGame } from '../../../hooks/useWordleGame'

const wordsAvalible = ['pácó', 'mángo', 'perro', 'mojar']

const randomIndex = Math.floor(Math.random() * wordsAvalible.length)
const wordToPlay = wordsAvalible[randomIndex]
console.log('La palabra es ', wordToPlay)

const MAXIME_ROWS = wordToPlay.length
const MAXIME_ATTEMPTS = 5

const initialMatrix: Array<Array<BoxLetter>> = Array.from(
  { length: MAXIME_ATTEMPTS },
  () =>
    Array(MAXIME_ROWS).fill({
      letter: '',
      bgColor: 'bg-[#dbdddd] dark:bg-[#3b4150]'
    })
)
const valueInitals = JSON.parse(JSON.stringify(initialMatrix))

interface BoxLetter {
  letter: string
  bgColor:
    | 'bg-[#dbdddd] dark:bg-[#3b4150]'
    | 'bg-green'
    | 'bg-yellow'
    | 'bg-[#3b4150]'
}

export const Board = ({ isPresseKey, showStatitics }: BoardProps) => {
  // const { matrix, boxActive, drawColorByEvaluation } = useWordleGame()

  const { letter, dispatch, games, wins } = useContext(GameContext)

  const [matrix, setMatrix] = useState<Array<Array<BoxLetter>>>(valueInitals)
  const [boxActive, setBoxActive] = useState([0, 0])

  useEffect(() => {
    handleGameKeys(letter)
  }, [isPresseKey])

  const resetGame = () => {
    const newGame = JSON.parse(JSON.stringify(initialMatrix))
    setMatrix(newGame)
    setBoxActive([0, 0])
  }

  const setLetterInBox = (letter: string) => {
    const [rowIndex, colIndex] = boxActive

    const newMatrix = [...matrix]
    // Ponemos la letra en la posicion
    newMatrix[rowIndex][colIndex] = {
      ...newMatrix[rowIndex][colIndex],
      letter
    }

    setMatrix(newMatrix)

    // Avanzamos a siguiente caja SI se puede
    if (colIndex < MAXIME_ROWS - 1) {
      setBoxActive([rowIndex, colIndex + 1])
    }
  }

  const deleteLetter = () => {
    const [rowIndex, colIndex] = boxActive

    // Verifica si hay una letra para borrar
    if (matrix[rowIndex][colIndex].letter === '') {
      // Estamos en la primera posicion
      if (colIndex > 0) {
        // Delete previos letter
        setBoxActive([rowIndex, colIndex - 1])
        const newMatrix = [...matrix]
        newMatrix[rowIndex][colIndex - 1] = {
          ...newMatrix[rowIndex][colIndex - 1],
          letter: ''
        }
        setMatrix(newMatrix)
      }
    } else {
      // Si hay una letra en la pos actual delete it
      const newMatrix = [...matrix]
      newMatrix[rowIndex][colIndex] = {
        ...newMatrix[rowIndex][colIndex],
        letter: ''
      }

      setMatrix(newMatrix)
    }
  }

  const getWordAndCorrectDraw = () => {
    let currentWord = ''
    const newMatrix = [...matrix]
    // Get Word and pintar las correcciones
    for (let i = 0; i < matrix[boxActive[0]].length; i++) {
      const currentLetter = matrix[boxActive[0]][i].letter.toLocaleLowerCase()
      const lowerWordToPlay = wordToPlay.toLocaleLowerCase()
      currentWord += currentLetter

      let bgColor: BoxLetter['bgColor'] = 'bg-[#dbdddd] dark:bg-[#3b4150]'
      if (removeSpecialCharacter(lowerWordToPlay[i]) === currentLetter) {
        bgColor = 'bg-green'
      } else if (
        removeSpecialCharacter(lowerWordToPlay).includes(currentLetter)
      ) {
        bgColor = 'bg-yellow'
      }

      newMatrix[boxActive[0]][i] = {
        ...newMatrix[boxActive[0]][i],
        bgColor
      }
    }
    setMatrix(newMatrix)

    return currentWord
  }

  const verifyWord = () => {
    const currentWord = getWordAndCorrectDraw()

    const [rowIndex] = boxActive

    // Puede seguir jugando? perdio? o ya gano ?
    if (removeSpecialCharacter(wordToPlay) === currentWord) {
      dispatch({ type: 'SET_GAMES', payload: games + 1 })
      dispatch({ type: 'SET_WINS', payload: wins + 1 })
      resetGame()
      showStatitics()
    } else if (boxActive[0] < MAXIME_ATTEMPTS - 1) {
      //sumele un nueva attemps y poscisionelo
      setBoxActive([rowIndex + 1, 0])
    } else {
      console.log('Ya perdio')
      dispatch({ type: 'SET_GAMES', payload: games + 1 })
      resetGame()
      showStatitics()
    }
  }

  const handleGameKeys = (key: string) => {
    const [rowIndex, colIndex] = boxActive
    if (key === 'Backspace') {
      deleteLetter()
      return
    }

    if (key === 'Enter') {
      // Si esta en la ultima posicion del intento y lleno la ultima casilla
      if (
        colIndex == wordToPlay.length - 1 &&
        matrix[rowIndex][colIndex].letter !== ''
      ) {
        verifyWord()
      }
      return
    }

    if (letters.includes(key)) {
      setLetterInBox(key)
    }
  }

  const handleKeyPress = (event: KeyboardEvent) => handleGameKeys(event.key)

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress, false)

    return () => {
      document.removeEventListener('keydown', handleKeyPress, false)
    }
  }, [boxActive])

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
