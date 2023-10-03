import { useState } from 'react';
import { useAppDispatch } from './app/hooks';
import { addProduct } from './app/productSlice';
import { ProductList } from './components/ProductList';
import { ProductForm } from './components/ProductForm'; 
import './App.css';

function App() {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addProduct(text));
      setText('');
    } 
  }

  return (
    <div className="App">
      <ProductForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <ProductList/>
      
    </div>
  );
}

export default App;
