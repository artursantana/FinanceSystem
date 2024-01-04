import * as C from './App.styles'

import {Item} from './types/Item'
import {Category} from './types/category'

import { items } from './data/Items'
import {Categories} from './data/categories'
import { getHelper, FilterListByMonth } from './data/helpers/dateFilters'
import TableArea from "./components/table/Index"


import { useState, useEffect } from 'react'


function App() {
const [ list, setList ] = useState(items);
const [ filterlist, setFilterList ] = useState<Item[]>([])
const [ currentMonth, setCurrentMonth ] = useState(getHelper())


  useEffect(()=> {

setFilterList( FilterListByMonth(list, currentMonth) )

  }, [list,currentMonth])



  return (
   <C.Container>
    <C.Header>
      <C.HeaderText>
        Finance System
      </C.HeaderText>
    </C.Header>
    <C.Body>
      <TableArea />
    </C.Body>
   </C.Container>
  )
}

export default App
