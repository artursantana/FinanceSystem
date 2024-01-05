import * as C from './style'
import { formatCurrentMonth } from '../../data/helpers/dateFilters'


import ResumeIndex from '../ResumeItem/Index'


type Props = {
    onMonthChange: (newMonth: string) => void
    currentRequest: string 
    inComeRequest: number
    expensiveRequest: number

}


const Index = ({currentRequest, onMonthChange, expensiveRequest, inComeRequest}: Props) => {

    const handlePrevMonth = () => {
        const [year, month] = currentRequest.split('-')
        const currentDate = new Date(parseInt(year), parseInt(month)-1, 1)
        currentDate.setMonth( currentDate.getMonth() - 1)

        onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`)

    }
    const handleNextMonth = () => {
        const [year, month] = currentRequest.split('-')
        const currentDate = new Date(parseInt(year), parseInt(month)-1, 1)
        currentDate.setMonth( currentDate.getMonth() + 1)

        onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`)
        
    }


  return (
    <C.Container>
      <C.Month>
            <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
            <C.MonthTitle>{formatCurrentMonth(currentRequest)}</C.MonthTitle>
            <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
      </C.Month>
      <C.ResumeArea>
        <ResumeIndex title='revenues' value={inComeRequest}/>
        <ResumeIndex title='expenses' value={expensiveRequest}/>
        <ResumeIndex
         title='balance'
         value={inComeRequest-expensiveRequest}
         color={(inComeRequest-expensiveRequest) < 0 ? 'red' : 'green'}
         />
      </C.ResumeArea>
    </C.Container>
  )
}

export default Index
