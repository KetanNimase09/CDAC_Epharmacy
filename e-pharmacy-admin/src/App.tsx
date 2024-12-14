// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import './App.css';  // Global styles
import Vendors from './pages/Vendors';
import Customers from './pages/Customers';
import Transactions from './pages/Transactions';
import ManageAdmin from './pages/ManageAdmins';  // Import ManageAdmin page
import logo from './assets/EPharmacyLogo1.png';  // Import logo from assets

// Main page with general dashboard content
const Home = () => (
  <div>
    <h2>Welcome to the E-Pharmacy Admin Dashboard</h2>
    <Row>
      <Col sm={4} className="mb-4">
        <div className="dashboard-box">
          <h4>Vendors</h4>
          <p>Total Vendors: 150</p>
        </div>
      </Col>
      <Col sm={4} className="mb-4">
        <div className="dashboard-box">
          <h4>Customers</h4>
          <p>Total Customers: 1200</p>
        </div>
      </Col>
      <Col sm={4} className="mb-4">
        <div className="dashboard-box">
          <h4>Transactions</h4>
          <p>Total Transactions: 3500</p>
        </div>
      </Col>
    </Row>
  </div>
);

// Navbar component with Manage Admin link
const AppNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="/">
      <img
        src={logo}  // Using the imported logo
        alt="E-Pharmacy Logo"
        style={{ width: '150px', height: 'auto' }}  // Adjust the size as needed
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">Dashboard</Nav.Link>
        <Nav.Link href="/vendors">Vendors</Nav.Link>
        <Nav.Link href="/customers">Customers</Nav.Link>
        <Nav.Link href="/transactions">Transactions</Nav.Link>
        <Nav.Link href="/manageadmin">Manage Admin</Nav.Link> {/* New link */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

// Sidebar with Manage Admin link
const Sidebar = () => (
  <Col md={3} className="sidebar p-3">
    <h4 className="text-white">Dashboard</h4>
    <Nav className="flex-column">
      <Nav.Link href="/vendors" className="text-white">Vendors</Nav.Link>
      <Nav.Link href="/customers" className="text-white">Customers</Nav.Link>
      <Nav.Link href="/transactions" className="text-white">Transactions</Nav.Link>
      <Nav.Link href="/manageadmin" className="text-white">Manage Admin</Nav.Link> {/* New link */}
    </Nav>
  </Col>
);

const App = () => {
  return (
    <Router>
      <div>
        {/* Header */}
        <AppNavbar />

        {/* Main content */}
        <Container fluid>
          <Row>
            {/* Sidebar (optional, hide on small screens) */}
            <Sidebar />

            {/* Content Area */}
            <Col md={9} className="p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vendors" element={<Vendors />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/manageadmin" element={<ManageAdmin />} /> {/* New route */}
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
