// src/pages/Dashboard.tsx
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const Dashboard = () => {
  // Mock data for dashboard stats
  const stats = [
    { title: 'Total Vendors', value: 120 },
    { title: 'Total Customers', value: 320 },
    { title: 'Total Transactions', value: 850 },
    { title: 'Stock Remaining', value: 1500 },
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{stat.title}</Typography>
                <Typography variant="h4">{stat.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
