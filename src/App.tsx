import * as C from './App.styles'

import {Item} from './types/Item'

import { items } from './data/Items'
import { categories } from './data/categories'
import { getHelper, FilterListByMonth } from './data/helpers/dateFilters'
import TableArea from "./components/table/Index"
import InfoArea from './components/InforArea/Index'
import Index from './components/inputArea/Index'


import { useState, useEffect } from 'react'


function App() {
const [ list] = useState(items);
const [ currentMonth, setCurrentMonth ] = useState(getHelper())
const [ filterlist, setFilterList ] = useState<Item[]>([])
const [ inCome, setInCome] = useState(0)
const [ expensiveInc, setExpensiveInc] = useState(0)

  useEffect(()=> {
   
    setFilterList( FilterListByMonth(list, currentMonth) )


  }, [list,currentMonth])



  useEffect(()=> {

    let inc = 0
    let expens = 0

    for(const i in filterlist)
    if(categories[filterlist[i].category].expensive){

      expens += filterlist[i].value
    }else{
      inc += filterlist[i].value
    }

    setInCome(inc);
    setExpensiveInc(expens);

  },[filterlist])











  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }
  

  return (
   <C.Container>
    <C.Header>
      <C.HeaderText>
        Finance System
      </C.HeaderText>
    </C.Header>
    <C.Body>
      <InfoArea 
      currentRequest={currentMonth}
      onMonthChange={handleMonthChange}
      inComeRequest={inCome}
      expensiveRequest={expensiveInc}
      />
      <Index/>
      <TableArea list={filterlist} />
    </C.Body>
   </C.Container>
  )
}

export default App
