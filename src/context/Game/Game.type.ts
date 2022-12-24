export interface contextGameProps {
  games: number
  wins: number
  letter: string
  time: number
  isFirstGame: boolean
  isDisabledGame: boolean

  dispatch: React.Dispatch<ActionType>
}

export interface GameProviderProps {
  children: JSX.Element | JSX.Element[]
}

export type ActionType =
  | { type: 'SET_LETTER'; payload: string }
  | { type: 'SET_GAMES'; payload: number }
  | { type: 'SET_WINS'; payload: number }
  | { type: 'SET_TIME'; payload: number }
  | { type: 'SET_FIRSTGAME'; payload: boolean }
  | { type: 'SET_DISABLEDGAME'; payload: boolean }

export type GamePropsOnlyData = Omit<contextGameProps, 'dispatch'>
