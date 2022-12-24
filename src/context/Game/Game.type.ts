export interface contextGameProps {
  games: number
  wins: number
  letter: string
  time: number
  isFirstGame: boolean

  dispatch: React.Dispatch<ActionType>
}

export type ActionType =
  | { type: 'SET_LETTER'; payload: string }
  | { type: 'SET_GAMES'; payload: number }
  | { type: 'SET_WINS'; payload: number }
  | { type: 'SET_TIME'; payload: number }

export type GamePropsOnlyData = Omit<contextGameProps, 'dispatch'>
