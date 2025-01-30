// src/components/Sidebar.tsx
import { List, ListItem, ListItemText, Drawer } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/vendors">
          <ListItemText primary="Vendors" />
        </ListItem>
        <ListItem button component={Link} to="/customers">
          <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button component={Link} to="/transactions">
          <ListItemText primary="Transactions" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
