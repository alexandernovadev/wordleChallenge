import { useEffect, useReducer } from 'react'
import { ActionType, contextGameProps, GamePropsOnlyData } from './Game.type'
import { GameContext } from './GameContext'

interface Props {
  children: JSX.Element | JSX.Element[]
}
const TIME = 300000

const initialState:GamePropsOnlyData = {
  games: 0,
  wins: 0,
  letter: '',
  time: +getTime(),
  isFirstGame: true
}


function reducer(state: typeof initialState, action: ActionType) {
  switch (action.type) {
    case 'SET_LETTER':
      return { ...state, letter: action.payload }
    case 'SET_GAMES':
      return { ...state, games: action.payload }
    case 'SET_WINS':
      return { ...state, wins: action.payload }
    case 'SET_TIME':
      return { ...state, time: action.payload }
    default:
      throw new Error()
  }
}

function getTime() {
  return localStorage.getItem('time') || TIME
}

export const GameProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)


  useEffect(() => {
    const interval = setInterval(() => {
      if (state.time > 0) {
        dispatch({ type: 'SET_TIME', payload: state.time - 1000 });
        localStorage.setItem('time', (state.time - 1000).toString());
      } else {
        localStorage.setItem('time', initialState.time.toString());
        dispatch({ type: 'SET_TIME', payload: TIME});
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, [state.time]);
  
  return (
    <GameContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GameContext.Provider>
  )
}
