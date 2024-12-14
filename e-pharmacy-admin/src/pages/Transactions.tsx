// src/pages/Transactions.tsx
import React, { useState } from 'react';
import { Button, Table, Modal, Spinner } from 'react-bootstrap';

const initialTransactions = [
  { id: 1, transactionId: 'TX001', customerName: 'Customer A', amount: 500, date: '2024-12-10' },
  { id: 2, transactionId: 'TX002', customerName: 'Customer B', amount: 300, date: '2024-12-12' },
  { id: 3, transactionId: 'TX003', customerName: 'Customer C', amount: 150, date: '2024-12-14' },
];

const Transactions = () => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [showModal, setShowModal] = useState(false);
  const [transactionToDelete, setTransactionToDelete] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleOpenModal = (id: number) => {
    setTransactionToDelete(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTransactionToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (transactionToDelete !== null) {
      setLoading(true);
      setTimeout(() => {
        setTransactions((prevTransactions) =>
          prevTransactions.filter((transaction) => transaction.id !== transactionToDelete)
        );
        setLoading(false);
        handleCloseModal();
      }, 1000);
    }
  };

  return (
    <div>
      <h2>Transactions</h2>
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Customer Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.transactionId}</td>
                <td>{transaction.customerName}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.date}</td>
                <td>
                  <Button variant="danger" onClick={() => handleOpenModal(transaction.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this transaction?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Transactions;
