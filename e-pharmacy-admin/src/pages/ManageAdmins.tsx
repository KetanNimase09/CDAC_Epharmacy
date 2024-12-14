// src/pages/ManageAdmin.tsx
import React, { useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';  // Import Bootstrap components

// Initial dummy data for admins (you can replace this with data from an API)
const initialAdmins = [
  { id: 1, name: 'Admin A', email: 'adminA@example.com' },
  { id: 2, name: 'Admin B', email: 'adminB@example.com' },
];

const ManageAdmin = () => {
  const [admins, setAdmins] = useState(initialAdmins); // Admins state
  const [showModal, setShowModal] = useState(false); // Modal state for confirmation
  const [adminToDelete, setAdminToDelete] = useState<number | null>(null); // Track admin to delete
  const [newAdmin, setNewAdmin] = useState({ name: '', email: '' }); // Form for adding new admin
  const [showForm, setShowForm] = useState(false); // Form visibility toggle

  // Open the confirmation modal
  const handleOpenModal = (id: number) => {
    setAdminToDelete(id);
    setShowModal(true);
  };

  // Close the confirmation modal
  const handleCloseModal = () => {
    setShowModal(false);
    setAdminToDelete(null);
  };

  // Confirm delete admin
  const handleConfirmDelete = () => {
    if (adminToDelete !== null) {
      setAdmins(admins.filter((admin) => admin.id !== adminToDelete));
      handleCloseModal(); // Close modal after deleting
    }
  };

  // Handle form submission for adding a new admin
  const handleAddAdmin = (e: React.FormEvent) => {
    e.preventDefault();

    if (newAdmin.name && newAdmin.email) {
      setAdmins([
        ...admins,
        { id: admins.length + 1, name: newAdmin.name, email: newAdmin.email },
      ]);
      setNewAdmin({ name: '', email: '' }); // Clear form
      setShowForm(false); // Close the form after submission
    }
  };

  return (
    <div className="container mt-4">
      <h2>Manage Admins</h2>
      
      {/* Button to show the form */}
      <Button variant="primary" onClick={() => setShowForm(true)} className="mb-3">
        Add New Admin
      </Button>

      {/* Show Add Admin Form */}
      {showForm && (
        <Form onSubmit={handleAddAdmin} className="mb-4">
          <Form.Group controlId="adminName">
            <Form.Label>Admin Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter admin name"
              value={newAdmin.name}
              onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="adminEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter admin email"
              value={newAdmin.email}
              onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Add Admin
          </Button>
          <Button
            variant="secondary"
            className="ml-2"
            onClick={() => setShowForm(false)} // Close form
          >
            Cancel
          </Button>
        </Form>
      )}

      {/* Table to display admins */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Admin Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin.id}>
              <td>{admin.name}</td>
              <td>{admin.email}</td>
              <td>
                {/* Delete button */}
                <Button variant="danger" onClick={() => handleOpenModal(admin.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this admin?</p>
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

export default ManageAdmin;
