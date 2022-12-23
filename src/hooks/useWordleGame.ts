import { useEffect, useState } from 'react'
import { letters } from '../assets/data/data'

const wordsAvalible = ['paco', 'mango', 'perro', 'mojar']

const randomIndex = Math.floor(Math.random() * wordsAvalible.length)
const wordToPlay = wordsAvalible[randomIndex]

const MAXIME_ROWS = wordToPlay.length
const MAXIME_ATTEMPTS = 5

const initialMatrix = Array.from({ length: MAXIME_ATTEMPTS }, () =>
  Array(MAXIME_ROWS).fill(' ')
)

export const useWordleGame = () => {
  const [matrix, setMatrix] = useState<string[][]>(initialMatrix)
  const [boxActive, setBoxActive] = useState([0, 0])

  const verifyWordAndFeedback = (attempt: number) => {
    // Se obtiene la palabra formada en el intento actual
    const word = matrix[attempt - 1].join('')

    // Si la palabra formada es igual a la palabra a adivinar, se muestra un mensaje de victoria
    if (word === wordToPlay) {
      alert('¡Has ganado!')
    }
    // Si se han agotado los intentos permitidos, se muestra un mensaje de derrota
    else if (attempt > MAXIME_ROWS) {
      alert(`¡Has perdido! La palabra era ${wordToPlay}`)
    }
  }

  const deleteLetter = () => {
    const [i, j] = boxActive
    // Verificamos que la caja anterior exista y no esté vacía
    if (j > 0 && matrix[i][j - 1] !== ' ') {
      // Eliminamos la letra anterior utilizando splice
      matrix[i][j - 1] = ' '
      // Actualizamos el estado de la matriz y de la caja activa
      setMatrix([...matrix])
      setBoxActive([i, j - 1])
    }
  }

  const handleChange = (event: string) => {
    try {
      const [i, j] = boxActive

      // Si la caja actual no está vacía, se pasa a la siguiente caja
      if (matrix[i][j] !== ' ') {
        setBoxActive([i, j + 1])
        return
      }

      // Se actualiza el valor de la caja actual con la letra ingresada
      matrix[i][j] = event
      setMatrix([...matrix])

      // Si se completó una fila, se verifica la palabra y se resetea la caja activa
      if (j === MAXIME_ROWS - 1) {
        verifyWordAndFeedback(i + 1)
        setBoxActive([i + 1, 0])
      }
      // Si no se completó una fila, se pasa a la siguiente caja
      else {
        setBoxActive([i, j + 1])
      }

      // Si se alcanzó el último intento y se escribió en la última caja, se acaba el juego
      if (i === MAXIME_ATTEMPTS - 1 && j === MAXIME_ROWS - 1) {
        // Se obtiene la palabra formada en el último intento
        const word = matrix[i].join('')
        // Si la palabra formada es igual a la palabra a adivinar, se muestra un mensaje de victoria
        if (word === wordToPlay) {
          alert('¡Has ganado!')
        }
        // Si no, se muestra un mensaje de derrota
        else {
          alert(`¡Has perdido! La palabra era ${wordToPlay}`)
        }
      }
    } catch (error) {
      console.log('EStudpido no ve q se acabo todos')
    }
  }

  const handleKeyPress = (event: any) => {
    if (event.key === 'Backspace') {
      deleteLetter()
      return
    }
    if (letters.includes(event.key)) {
      handleChange(event.key)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress, false)

    return () => {
      document.removeEventListener('keydown', handleKeyPress, false)
    }
  }, [boxActive])

  const drawColorByEvaluation = (i: number, j: number) => {
    const background = {
      background: 'bg-[#3b4150]'
    }

    // Si la letra se encuentra en el mismo lugar de la palabra a adivinar
    if (matrix[i][j] === wordToPlay[j]) {
      background.background = 'bg-green'
    }
    // Si la letra se encuentra en la palabra, pero no en el mismo lugar
    else if (wordToPlay.includes(matrix[i][j])) {
      background.background = 'bg-yellow'
    }
    // Si la letra no se encuentra en la palabra
    else {
      background.background = 'bg-[#dbdddd] dark:bg-[#3b4150]'
    }

    return background
  }

  return {
    matrix,
    boxActive,

    drawColorByEvaluation
  }
}
