import React, { useState, useEffect } from "react";
import {
  Button,
  CircularProgress,
  Typography,
  Card,
  CardContent,
  CardActions,
  Grid,
  Box,
} from "@mui/material";
import Sidebar_Job_Page from "./Sidebar_Job_Page"; // Assuming Sidebar is in the same folder

const Job = () => {
  const [jobListings, setJobListings] = useState([]); // Initialize job listings state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [filters, setFilters] = useState({
    branch: "react", // Set default value to 'react'
  });

  const handleJobSearch = async () => {
    setLoading(true);
    setError(null);
    const url = "https://apijob-job-searching-api.p.rapidapi.com/v1/job/search";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-host": "apijob-job-searching-api.p.rapidapi.com",
        "x-rapidapi-key": "ff6107f7a2msh475f93d01e8caa1p164afbjsnb31f6ae3bf94",
      },
      body: JSON.stringify({ q: filters.branch }), // Include filters in the request body
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setJobListings(data.hits || []); // Assuming hits is the array of job listings
    } catch (err) {
      setError("Failed to fetch job listings.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (filters.branch) {
      handleJobSearch(); // Fetch jobs only if a valid branch is selected
    }
  }, [filters.branch]); // Dependency array: Only trigger when filters.branch changes

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => {
      if (prevFilters[name] !== value) {
        return {
          ...prevFilters,
          [name]: value,
        };
      }
      return prevFilters; // Do not update if the value is the same
    });
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: "#f3f4f6" }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", marginBottom: 5, marginTop: "5rem" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "700",
            color: "#18181b",
            marginBottom: "1rem",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Recommended Jobs
        </Typography>
        <Typography
          variant="h6"
          paragraph
          sx={{
            fontWeight: "400",
            color: "#6b7280",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Curated job opportunities tailored for your branch and interests.
        </Typography>
      </Box>

      <Box display="flex" sx={{ paddingTop: "2rem" }}>
        <Sidebar_Job_Page filters={filters} setFilters={setFilters} />
        <div style={{ padding: "20px", flex: 1 }}>
          {loading && (
            <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
              <CircularProgress />
            </Box>
          )}
          {error && <Typography color="error">Error: {error}</Typography>}
          {Array.isArray(jobListings) && jobListings.length > 0 ? (
            <Grid container spacing={4} justifyContent="center">
              {jobListings.map((job) => (
                <Grid item xs={12} sm={6} md={10} key={job.id}>
                  <Card
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                      padding: "20px",
                      borderRadius: "8px",
                      backgroundColor: "#ffffff",
                      transition: "transform 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <CardContent>
                      <Typography variant="h6" style={{ fontWeight: "600" }}>
                        {job.title || "Job Title Not Available"}
                      </Typography>
                      <Typography color="textSecondary">
                        <strong>Company:</strong> {job.website_name || "N/A"} |{" "}
                        <strong>Location:</strong> {job.country || "Remote"}
                      </Typography>
                      <Typography variant="body2" style={{ marginTop: "8px" }}>
                        <strong>Published Since:</strong>{" "}
                        {job.published_since
                          ? new Date(job.published_since).toLocaleDateString()
                          : "Date Not Available"}
                      </Typography>
                      <Typography variant="body2" paragraph style={{ marginTop: "8px" }}>
                        <strong>Description:</strong>{" "}
                        {job.description
                          ? job.description.slice(0, 100) + "..."
                          : "No description available."}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textTransform: "none",
                          fontWeight: "bold",
                          backgroundColor: "#3498db",
                          color: "#fff",
                          padding: "6px 16px",
                        }}
                      >
                        Apply Here
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
            !loading && <Typography>No job listings found.</Typography>
          )}
        </div>
      </Box>
    </Box>
  );
};

export default Job;
