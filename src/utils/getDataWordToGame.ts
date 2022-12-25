import { wordsList } from "../assets/data/wordDataSmall"
import { BoxLetter } from "../components/molecules/Board/Board.type"

// Deberia ser redux-persist, TODO
const getData = ()=> {
  const listWord = localStorage.getItem('listWords') 

  if (listWord) {
    return JSON.parse(listWord)
  }else {
    localStorage.setItem('listWords',JSON.stringify(wordsList))
    return listWord
  }
}


const setWordActive = (word:string) => {
  localStorage.setItem('activeWord',word)
}

const wordsAvalible = getData()

const randomIndex = Math.floor(Math.random() * wordsAvalible.length)

// esto deberia esta en el localstorage
export const wordToPlay = wordsAvalible[randomIndex]
setWordActive(wordToPlay)


// console.log('La palabra es ', wordToPlay)

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








