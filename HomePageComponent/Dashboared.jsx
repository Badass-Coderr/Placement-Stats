import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, TextField, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useLocation } from 'react-router-dom';

Chart.register(...registerables); // Register Chart.js components

function Dashboard({ filteredData }) {
  const chartRef = useRef(null);
  const location = useLocation();
  const [searchKeyword, setSearchKeyword] = useState(''); // Single search field
  const [students, setStudents] = useState([]);

  // Function to fetch students based on the universal search keyword
  const fetchStudents = async (keyword) => {
    const response = await fetch(`http://localhost:8080/students/search?keyword=${keyword}`);
    const data = await response.json();
    setStudents(data);
  };

  // Function to handle search input
  const handleSearch = () => {
    if (searchKeyword.trim() === '') {
      alert('Please enter a keyword to search.');
      return; // Do not proceed with the search
    }
    fetchStudents(searchKeyword); // Fetch students with the entered keyword
  };

  // Combine students from filteredData and search results
  const displayedStudents = filteredData.length > 0 ? filteredData : students;

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Student Data Dashboard
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          fullWidth
          sx={{ maxWidth: '300px' }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ ml: 2 }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      {/* Table container with Material UI */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="student data table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Roll Number</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Branch</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Year</TableCell> {/* Added Year column */}
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedStudents.length > 0 ? displayedStudents.map((student, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.Roll_no}</TableCell>
                <TableCell>{student.company}</TableCell>
                <TableCell>{student.branch}</TableCell>
                <TableCell>{student.course}</TableCell>
                <TableCell>{student.year}</TableCell> {/* Added year value */}
              </TableRow>
            )) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center">No data found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Dashboard;
