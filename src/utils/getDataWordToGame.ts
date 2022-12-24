import { BoxLetter } from "../components/molecules/Board/Board.type"

const wordsAvalible = ['pácó', 'mángo', 'perro', 'mojar']

const randomIndex = Math.floor(Math.random() * wordsAvalible.length)

// esto deberia esta en el localstorage
export const wordToPlay = wordsAvalible[randomIndex]



console.log('La palabra es ', wordToPlay)

export const MAXIME_ROWS = wordToPlay.length
export const MAXIME_ATTEMPTS = 5

export const mockMatrix: Array<Array<BoxLetter>> = Array.from(
  { length: MAXIME_ATTEMPTS },
  () =>
    Array(MAXIME_ROWS).fill({
      letter: '',
      bgColor: 'bg-[#dbdddd] dark:bg-[#3b4150]'
    })
)
export const initialValuesMatrix = JSON.parse(JSON.stringify(mockMatrix))








