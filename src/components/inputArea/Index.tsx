
import * as C from './style'

const Index = () => {
  return (
    <C.Table>
    <thead>
        <tr>
    <C.TableHeadColumn width={100}>
        <h3>data</h3>
       <input type="date" />
    </C.TableHeadColumn>
    <C.TableHeadColumn width={130}>
        <h3>Category</h3>
        <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
    </C.TableHeadColumn>
    <C.TableHeadColumn>
        <h3>Title</h3>
        <input type="text" />
    </C.TableHeadColumn>
    <C.TableHeadColumn width={150}>
        <h3>Value</h3>
        <input type="text" />
        </C.TableHeadColumn>
        </tr>
    </thead>
   
   
</C.Table>
  )
}

export default Index
