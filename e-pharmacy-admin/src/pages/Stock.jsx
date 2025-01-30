    // src/pages/Stock.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const Stock = () => {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    axios.get('/api/stock')  // Replace with your API endpoint
      .then(response => setStock(response.data))
      .catch(error => console.error('Error fetching stock:', error));
  }, []);

  return (
    <div>
      <h1>Stock</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Vendor</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stock.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.productName}</TableCell>
              <TableCell>{item.vendor}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>${item.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Stock;
