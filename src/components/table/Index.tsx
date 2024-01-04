import * as C from './style'
import { Item } from '../../types/Item'

type Props = {
  list: Item[];
}


const Index = ({list}: Props) => {
  console.log(list)
  return (
    <C.Table>
        <thead>
            <tr>
        <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
        <C.TableHeadColumn width={130}>Category</C.TableHeadColumn>
        <C.TableHeadColumn>Title</C.TableHeadColumn>
        <C.TableHeadColumn width={150}>Value</C.TableHeadColumn>
            </tr>
        </thead>
        <tbody>
         
          
        </tbody>
    </C.Table>
  )
}

export default Index
