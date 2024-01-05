




import { Item } from '../../types/Item'


export const getHelper = ()  => {
    const now = new Date();
    return ` ${now.getFullYear()}-${now.getMonth()+1} `
}











export const FilterListByMonth = (list: Item[], date: string): Item[] => {

    
    const newList: Item[] = [];
    const [year , month] = date.split('-').map(Number);
    

    for(const i in list) {
        if(
            list[i].date.getFullYear() === year && (list[i].date.getMonth()+1) === month
        ){
            
            newList.push(list[i])
        }
    }

    return newList;

}









export const formatDate = (date: Date): string => {
    const year = date.getFullYear()
    const month = (date.getMonth()+1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')

return `${day}/${month}/${year}`

}