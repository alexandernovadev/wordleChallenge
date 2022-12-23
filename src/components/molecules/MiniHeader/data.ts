import { Icons } from './MiniHeader.types'
import bi_questionDark from '../../../assets/svgs/bi_question-dark.svg'
import bi_questionLight from '../../../assets/svgs/bi_question-light.svg'
import chart_lightLight from '../../../assets/svgs/chart_light.svg'
import chart_lightDark from '../../../assets/svgs/chart_dark.svg'

export const icons: Icons = {
  dark: {
    bi_question: bi_questionLight,
    chart: chart_lightLight
  },
  light: {
    bi_question: bi_questionDark,
    chart: chart_lightDark
  }
}
