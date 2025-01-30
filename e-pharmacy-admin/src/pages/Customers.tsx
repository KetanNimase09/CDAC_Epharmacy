// src/pages/Customers.tsx
import React, { useState } from 'react';
import { Button, Table, Modal, Spinner } from 'react-bootstrap';

const initialCustomers = [
  { id: 1, name: 'Customer A', email: 'customerA@example.com', phone: '1234567890' },
  { id: 2, name: 'Customer B', email: 'customerB@example.com', phone: '0987654321' },
  { id: 3, name: 'Customer C', email: 'customerC@example.com', phone: '1122334455' },
];

const Customers = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [showModal, setShowModal] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleOpenModal = (id: number) => {
    setCustomerToDelete(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCustomerToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (customerToDelete !== null) {
      setLoading(true);
      setTimeout(() => {
        setCustomers((prevCustomers) => prevCustomers.filter((customer) => customer.id !== customerToDelete));
        setLoading(false);
        handleCloseModal();
      }, 1000);
    }
  };

  return (
    <div>
      <h2>Customers</h2>
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>
                  <Button variant="danger" onClick={() => handleOpenModal(customer.id)}>
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
        <Modal.Body>Are you sure you want to delete this customer?</Modal.Body>
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

export default Customers;
