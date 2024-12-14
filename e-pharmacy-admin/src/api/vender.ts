import axios from 'axios';

const API_URL = 'https://your-backend-api-url.com'; // Replace with your API URL

// Fetch all vendors
export const getVendors = async () => {
  try {
    const response = await axios.get(`${API_URL}/vendors`);
    return response.data; // Return the vendor data
  } catch (error) {
    console.error("Error fetching vendors:", error);
    throw error;
  }
};

// Add more API functions for adding, updating, or deleting vendors as needed
