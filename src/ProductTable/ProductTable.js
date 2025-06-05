import React, { useEffect, useState } from 'react';
import './ProductTable.css';

function ProductTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="table-container">
      <h2>Product Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Color</th>
            <th>Capacity</th>
            <th>Price</th>
            <th>Other Info</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
            const { name, data } = item;
            const color = data?.color || data?.Color || data?.['Strap Colour'] || '—';
            const capacity = data?.capacity || data?.['capacity GB'] || data?.Capacity || '—';
            const price = data?.price || data?.Price || '—';
            const others = Object.entries(data || {})
              .filter(([key]) => !['color', 'Color', 'capacity', 'capacity GB', 'Capacity', 'price', 'Price'].includes(key))
              .map(([key, value]) => `${key}: ${value}`)
              .join(', ');
            return (
              <tr key={item.id}>
                <td>{name}</td>
                <td>{color}</td>
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

export default ProductTable;
