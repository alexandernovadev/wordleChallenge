import { useEffect, useReducer } from 'react'
import { initialState, reducer, TIME } from './Game.reducer'
import { GameProviderProps } from './Game.type'
import { GameContext } from './GameContext'

// TODO: Maybe a redux and redux-persist, it would been better
// I dont have time :'(

export const GameProvider = ({ children }: GameProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const interval = setInterval(() => {
      if (state.time > 0) {
        dispatch({ type: 'SET_TIME', payload: state.time - 1000 })
        localStorage.setItem('time', (state.time - 1000).toString())
      } else {
        dispatch({ type: 'SET_DISABLEDGAME', payload: false })
        dispatch({ type: 'SET_TIME', payload: TIME })

        localStorage.setItem('time', initialState.time.toString())
        localStorage.setItem('isDisabledGame', String(false))
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [state.time])

  useEffect(() => {
    if (state.isFirstGame) {
      dispatch({ type: 'SET_FIRSTGAME', payload: false })
      localStorage.setItem('first', String(false))
    }
  }, [])

  return (
    <GameContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GameContext.Provider>
  )
}
