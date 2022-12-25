import { ActionType, GamePropsOnlyData } from "./Game.type"

export const TIME = 20000 // 5 minutos

export const initialState: GamePropsOnlyData = {
  games: +getGames(),
  wins: +getWins(),
  letter: '',
  time: +getTime(),
  isFirstGame: getFistTime(),
  isDisabledGame: isDisabledGame()
}

export function reducer(state: GamePropsOnlyData, action: ActionType) {
  switch (action.type) {
    case 'SET_LETTER':
      return { ...state, letter: action.payload }
    case 'SET_GAMES':
      return { ...state, games: action.payload }
    case 'SET_WINS':
      return { ...state, wins: action.payload }
    case 'SET_TIME':
      return { ...state, time: action.payload }
    case 'SET_FIRSTGAME':
      return { ...state, isFirstGame: action.payload }
    case 'SET_DISABLEDGAME':
      return { ...state, isDisabledGame: action.payload }
    default:
      throw new Error()
  }
}

// Helpers
function getTime() {
  return localStorage.getItem('time') || TIME
}
function getWins() {
  return localStorage.getItem('wins') || 0
}
function getGames() {
  return localStorage.getItem('games') || 0
}
function getFistTime() {
  const fistTime = localStorage.getItem('first')
  return fistTime ? JSON.parse(fistTime) : true
}
function isDisabledGame() {
  const isDisabledGame = localStorage.getItem('isDisabledGame')
  return isDisabledGame ? JSON.parse(isDisabledGame) : false
}