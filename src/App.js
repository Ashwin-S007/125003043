import React, { useState, useEffect } from 'react';
import api from './api/products'; 
import Home from './Home';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        console.log(response);
        setProducts(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    fetchProducts(); 
  }, []);

  return (
    <div className='App'>
      <Home response={products} /> 
    </div>
  );
}

export default App;
