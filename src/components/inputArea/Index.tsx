import * as C from './style'
import { useState } from 'react';
import { items } from '../../data/Items';

const Index = () => {
  const [formData, setFormData] = useState({
    date: '',
    category: 'Food',
    title: '',
    value: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = () => {
    
    if (formData.date && formData.category && formData.title && formData.value) {
      const newItem = {
        date: new Date(formData.date),
        category: formData.category.toLowerCase(),
        title: formData.title,
        value: parseFloat(formData.value)
      };
      items.push(newItem);

      setFormData({
        date: '',
        category: 'Food',
        title: '',
        value: ''
      });
    } else {
      alert('Preencha todos os campos antes de enviar.');
    }
    alert('Item adicionado!')
  };

  return (
    <>
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={100}>
            <h3>Data</h3>
            <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
          </C.TableHeadColumn>
          <C.TableHeadColumn width={130}>
            <h3>Category</h3>
            <select name="category" value={formData.category} onChange={handleInputChange}>
              <option>Food</option>
              <option>Rent</option>
              <option>Salary</option>
              <option>Other</option>
            </select>
          </C.TableHeadColumn>
          <C.TableHeadColumn>
            <h3>Title</h3>
            <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
          </C.TableHeadColumn>
          <C.TableHeadColumn width={150}>
            <h3>Value</h3>
            <input type="text" name="value" value={formData.value} onChange={handleInputChange} />
          </C.TableHeadColumn>
        </tr>
      </thead>
    </C.Table>
          <button onClick={handleFormSubmit}>Send</button>
          </>
  );
}

export default Index;
