import React, { useState, useEffect } from 'react';
import { Box, Typography, Divider, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

function Sidebar({ onFilter }) {
  const [filters, setFilters] = useState({ branch: '', year: '', company: '', course: '' });

  // Handle filter change for year, course, branch, and company
  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    // Update the filters state
    const updatedFilters = { ...filters, [name]: value };

    // If course is selected as MCA, reset branch to MCA
    if (name === 'course' && value === 'MCA') {
      updatedFilters.branch = 'CSE';
    }

    setFilters(updatedFilters);
    onFilter(updatedFilters); // Trigger onFilter with updated filters
  };

  return (
    <Box
      sx={{
        width: '260px',
        position: 'sticky',
        top: 0,
        color: 'black',
        backgroundColor: '#f4f6f8',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        boxShadow: 2,
        
      }}
    >
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: '#3f51b5',marginTop:'2rem' }}>
        Apply Filters
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Year</InputLabel>
        <Select
          name="year"
          onChange={handleFilterChange}
          value={filters.year}
          label="Year"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="2022">2022</MenuItem>
          <MenuItem value="2023">2023</MenuItem>
          <MenuItem value="2024">2024</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Course</InputLabel>
        <Select
          name="course"
          onChange={handleFilterChange}
          value={filters.course}
          label="Course"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="MCA">MCA</MenuItem>
          <MenuItem value="MTech">M-Tech</MenuItem>
          <MenuItem value="BTech">B-Tech</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Branch</InputLabel>
        <Select
          name="branch"
          onChange={handleFilterChange}
          value={filters.branch}
          label="Branch"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="CSE">CSE</MenuItem>
          <MenuItem value="EEE">EEE</MenuItem>
          <MenuItem value="MCA">MCA</MenuItem>
          <MenuItem value="MECHANICAL">MECHANICAL</MenuItem>
          <MenuItem value="CIVIL">CIVIL</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Company</InputLabel>
        <Select
          name="company"
          onChange={handleFilterChange}
          value={filters.company}
          label="Company"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Amdocs">Amdocs</MenuItem>
          <MenuItem value="Fluence Energy">Fluence Energy</MenuItem>
          <MenuItem value="Tata Motors">Tata Motors</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={() => onFilter(filters)} // Trigger filter action
      >
        Apply Filters
      </Button>
    </Box>
  );
}

export default Sidebar;
