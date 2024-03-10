import { Category } from '../types/category'

export const categories: Category = {
    food: { title: 'Food', color: 'blue', expensive: true },
    rent: { title: 'Rent', color: 'brown', expensive: true },
    salary: { title: 'Salary', color: 'green', expensive: false },
    other: { title: 'Other', color: 'gray', expensive: true }
}

export default categories