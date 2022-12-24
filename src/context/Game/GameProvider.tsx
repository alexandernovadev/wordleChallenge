import { useReducer } from 'react'
import { contextGameProps } from './Game.type'
import { GameContext } from './GameContext'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const initialState = {
  games: 0,
  wins: 0,
  letter: ''
}

type ActionType =
  | { type: 'SET_LETTER'; payload: string }
  | { type: 'SET_GAMES'; payload: number }
  | { type: 'SET_WINS'; payload: number }

function reducer(state: typeof initialState, action: ActionType) {
  switch (action.type) {
    case 'SET_LETTER':
      return { ...state, letter: action.payload }
    case 'SET_GAMES':
      return { ...state, games: action.payload }
    case 'SET_WINS':
      return { ...state, wins: action.payload }
    default:
      throw new Error()
  }
}

export const GameProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GameContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GameContext.Provider>
  )
}
