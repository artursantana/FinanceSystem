import * as C from './style'
import {Item} from '../../types/Item'
import TableItem from '../TableItem/Index'

type Props = {
  list: Item[];
}




const Index = ({list}: Props) => {

  return (
    <C.Table>

        <thead>
            <tr>
        <C.TableHeadColumn width={100}>Date</C.TableHeadColumn>
        <C.TableHeadColumn width={130}>Category</C.TableHeadColumn>
        <C.TableHeadColumn>Title</C.TableHeadColumn>
        <C.TableHeadColumn width={150}>Value</C.TableHeadColumn>
            </tr>
        </thead>
        <tbody>
         {
          list.map((ite, index) => (
            <TableItem key={index} tableItem={ite} />
          ))
         }
          
        </tbody>
    </C.Table>
  )
}

export default Index
