// src/pages/Vendors.tsx
import React, { useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';

const initialVendors = [
  { id: 1, name: 'Vendor A', email: 'vendorA@example.com', phone: '1234567890' },
  { id: 2, name: 'Vendor B', email: 'vendorB@example.com', phone: '0987654321' },
  { id: 3, name: 'Vendor C', email: 'vendorC@example.com', phone: '1122334455' },
];

const Vendors = () => {
  const [vendors, setVendors] = useState(initialVendors);
  const [showModal, setShowModal] = useState(false);
  const [vendorToDelete, setVendorToDelete] = useState<number | null>(null);
  const [newVendor, setNewVendor] = useState({ name: '', email: '', phone: '' });

  // Add new vendor
  const handleAddVendor = () => {
    setVendors([...vendors, { ...newVendor, id: vendors.length + 1 }]);
    setNewVendor({ name: '', email: '', phone: '' });
  };

  // Handle modal and deletion
  const handleOpenModal = (id: number) => {
    setVendorToDelete(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setVendorToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (vendorToDelete !== null) {
      setVendors(vendors.filter((vendor) => vendor.id !== vendorToDelete));
      handleCloseModal();
    }
  };

  return (
    <div className="container mt-4">
      <h2>Vendors</h2>

      {/* Add New Vendor */}
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Vendor Name</Form.Label>
          <Form.Control
            type="text"
            value={newVendor.name}
            onChange={(e) => setNewVendor({ ...newVendor, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Vendor Email</Form.Label>
          <Form.Control
            type="email"
            value={newVendor.email}
            onChange={(e) => setNewVendor({ ...newVendor, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Vendor Phone</Form.Label>
          <Form.Control
            type="text"
            value={newVendor.phone}
            onChange={(e) => setNewVendor({ ...newVendor, phone: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddVendor}>
          Add Vendor
        </Button>
      </Form>

      {/* Vendors Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Vendor Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.id}>
              <td>{vendor.name}</td>
              <td>{vendor.email}</td>
              <td>{vendor.phone}</td>
              <td>
                <Button variant="danger" onClick={() => handleOpenModal(vendor.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Delete Confirmation Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this vendor?
        </Modal.Body>
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

export default Vendors;
