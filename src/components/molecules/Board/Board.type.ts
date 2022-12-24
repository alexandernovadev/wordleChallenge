export interface BoardProps {
  // This flag use the state to call function setKey like a switch
  isPresseKey: boolean
  showStatitics:Function
}

export interface BoxLetter {
  letter: string
  bgColor:
    | 'bg-[#dbdddd] dark:bg-[#3b4150]'
    | 'bg-green'
    | 'bg-yellow'
    | 'bg-[#3b4150]'
}
