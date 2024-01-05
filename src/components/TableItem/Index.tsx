import * as C from './style'
import {Item} from '../../types/Item'
import { formatDate } from '../../data/helpers/dateFilters'
import { categories } from '../../data/categories'

type Props = {
        tableItem: Item
}

const Index = ({ tableItem }: Props) => {
  return (
    <C.TableLine>
            <C.TableColumn>{formatDate(tableItem.date)}</C.TableColumn>
            <C.TableColumn>
              <C.Category color={categories[tableItem.category].color}>
              {categories[tableItem.category].title}
              </C.Category>
              </C.TableColumn>
            <C.TableColumn>
              {tableItem.title}
            </C.TableColumn>
            <C.TableColumn>
            <C.Value color={categories[tableItem.category].expensive ? 'red' : 'green'}>
                € {tableItem.value}
                </C.Value>
            </C.TableColumn>
    </C.TableLine>
  )
}

export default Index
