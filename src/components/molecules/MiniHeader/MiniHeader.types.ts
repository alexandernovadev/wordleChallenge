import { MouseEventHandler } from 'react'

export interface MiniHeaderProps {
  openInstructions: MouseEventHandler<HTMLImageElement>
  openStatistics: MouseEventHandler<HTMLImageElement>
}

export interface Icons {
  [key: string]: {
    bi_question: string
    chart: string
  }
}
