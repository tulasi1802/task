import React, { useEffect, useState } from "react";

export const fetchProductData = () => {
  return Promise.resolve([
    { id: "1", name: "Google Pixel 6 Pro", data: { color: "Cloudy White", capacity: "128 GB" } },
    { id: "2", name: "Apple iPhone 12 Mini, 256GB, Blue", data: null },
    { id: "3", name: "Apple iPhone 12 Pro Max", data: { color: "Cloudy White", "capacity GB": 512 } },
    { id: "4", name: "Apple iPhone 11, 64GB", data: { price: 389.99, color: "Purple" } },
    { id: "5", name: "Samsung Galaxy Z Fold2", data: { price: 689.99, color: "Brown" } },
    { id: "6", name: "Apple AirPods", data: { generation: "3rd", price: 120 } },
    { id: "7", name: "Apple MacBook Pro 16", data: { year: 2019, price: 1849.99, "CPU model": "Intel Core i9", "Hard disk size": "1 TB" } },
    { id: "8", name: "Apple Watch Series 8", data: { "Strap Colour": "Elderberry", "Case Size": "41mm" } },
    { id: "9", name: "Beats Studio3 Wireless", data: { Color: "Red", Description: "High-performance wireless noise cancelling headphones" } },
    { id: "10", name: "Apple iPad Mini 5th Gen", data: { Capacity: "64 GB", "Screen size": 7.9 } },
    { id: "11", name: "Apple iPad Mini 5th Gen", data: { Capacity: "254 GB", "Screen size": 7.9 } },
    { id: "12", name: "Apple iPad Air", data: { Generation: "4th", Price: "419.99", Capacity: "64 GB" } },
    { id: "13", name: "Apple iPad Air", data: { Generation: "4th", Price: "519.99", Capacity: "256 GB" } },
  ]);
};

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductData().then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ padding: "20px", width: "100%" }}>
      <h2 style={{ color: "#1db954" }}>Product List</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ background: "#333", color: "#fff" }}>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Details</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} style={{ background: "#222", color: "#eee" }}>
              <td style={tdStyle}>{product.id}</td>
              <td style={tdStyle}>{product.name}</td>
              <td style={tdStyle}>
                {product.data ? (
                  <ul style={{ paddingLeft: "20px" }}>
                    {Object.entries(product.data).map(([key, value]) => (
                      <li key={key}>
                        <strong>{key}:</strong> {value}
                      </li>
                    ))}
                  </ul>
                ) : (
                  "No details"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  padding: "10px",
  border: "1px solid #444",
};

const tdStyle = {
  padding: "10px",
  border: "1px solid #444",
  verticalAlign: "top",
};

export default ProductTable;
