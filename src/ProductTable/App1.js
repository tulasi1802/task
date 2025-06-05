import React, { useEffect, useState } from 'react';
import './ProductTable.css';

function App1() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.restful-api.dev/objects')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('API fetch error:', err));
  }, []);

  return (
    <div className="table-container">
      <h2>Product Table (API Data)</h2>
      <table>
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Name</th>
            <th>Color</th>
            <th>Strap Colour</th>
            <th>Generation</th>
            <th>Model</th>
            <th>Capacity</th>
            <th>Price</th>
            <th>Other Info</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            const { name, data } = item;
            const color = data?.color || data?.Color || '—';
            const strapColor = data?.['Strap Colour'] || '—';
            const generation = data?.generation || data?.Generation || '—';
            const model = data?.model || data?.['CPU model'] || '—';
            const capacity =
              data?.capacity || data?.['capacity GB'] || data?.Capacity || '—';
            const price = data?.price || data?.Price || '—';

            const others = Object.entries(data || {})
              .filter(([key]) =>
                !['color', 'Color', 'Strap Colour', 'generation', 'Generation', 'model', 'CPU model', 'capacity', 'capacity GB', 'Capacity', 'price', 'Price'].includes(key)
              )
              .map(([key, value]) => `${key}: ${value}`)
              .join(', ');

            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{color}</td>
                <td>{strapColor}</td>
                <td>{generation}</td>
                <td>{model}</td>
                <td>{capacity}</td>
                <td>{price}</td>
                <td>{others}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App1;
