import React from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Divider, Button } from '@mui/material';

const Sidebar_Job_Page = ({ filters, setFilters }) => {
  // Handle filter change for category selection
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <Box
      sx={{
        width: '260px',
        position: 'sticky',
        top: 0,
        color: 'black',
        backgroundColor: '#f4f6f8', // Match the background color of Sidebar
        padding: '24px', // Match padding
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        boxShadow: 2, // Match box shadow
      }}
    >
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: '#3f51b5' }}>
        Job Category Filters
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Category</InputLabel>
        <Select
          name="branch"
          value={filters.branch}
          onChange={handleFilterChange}
          label="Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="react">React Developer</MenuItem>
          <MenuItem value="Software developer">Software Developer</MenuItem>
          <MenuItem value="Data Analyst">Data Analyst</MenuItem>
          <MenuItem value="frontend">Frontend Developer</MenuItem>
          <MenuItem value="database design">Database Design</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={() => setFilters({ ...filters, branch: 'react' })} // Set to default "React Developer"
      >
        Reset to React Developer
      </Button>
    </Box>
  );
};

export default Sidebar_Job_Page;
