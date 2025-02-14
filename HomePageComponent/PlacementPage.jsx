import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PlacementPage = () => {
  const [placementData, setPlacementData] = useState([]);
  const navigate = useNavigate();

  const heroContent = {
    heading: "NIT Warangal Placement Stats",
    subHeading: "Explore top recruiters, interview tips, and career opportunities.",
  };

  // Fetch placement data only if not already fetched
  useEffect(() => {
    const fetchPlacementData = async () => {
      try {
        const response = await fetch("http://localhost:8080/placements");
        const data = await response.json();

        // Only update state if data has changed to avoid unnecessary renders
        if (JSON.stringify(data) !== JSON.stringify(placementData)) {
          setPlacementData(data);
        }
      } catch (err) {
        console.error("Error fetching placement data:", err);
      }
    };

    // Only fetch data if it hasn't been loaded yet
    if (placementData.length === 0) {
      fetchPlacementData();
    }
  }, [placementData]); // Dependency array ensures fetch happens only once unless data changes

  // Group data by branch
  const groupedByBranch = Array.isArray(placementData)
    ? placementData.reduce((acc, placement) => {
        const { branch, company, year } = placement;

        if (!acc[branch]) {
          acc[branch] = {
            students: [],
            companies: {},
            years: new Set(),
          };
        }

        acc[branch].students.push(placement);
        acc[branch].companies[company] = (acc[branch].companies[company] || 0) + 1;
        acc[branch].years.add(year);

        return acc;
      }, {})
    : {};

  // Handle navigation to the dashboard
  const handleBranchClick = (students) => {
    navigate("/placement", { state: { students } });
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: "#f3f4f6" }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", marginBottom: 5, marginTop: "10rem" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "700",
            color: "#18181b",
            marginBottom: "1rem",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          {heroContent.heading}
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
          {heroContent.subHeading}
        </Typography> <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "600",
            color: "#18181b",
            lineHeight: "0.8",
            marginTop:'7rem'
          }}
        >
          Result of Branch
        </Typography>
      </Box>

      {/* Placement Data Section */}
      <Grid container spacing={4} justifyContent="center" style={{ marginTop: "3rem" }}>
        {Object.keys(groupedByBranch).map((branch) => {
          const branchData = groupedByBranch[branch];
          const mostRecruitingCompany = Object.entries(branchData.companies).reduce(
            (max, [company, count]) => (count > max.count ? { company, count } : max),
            { company: "", count: 0 }
          );
          const totalPlacedStudents = branchData.students.length;
          const years = Array.from(branchData.years).join(", ");

          return (
            <Grid item xs={10} sm={4} md={3} key={branch} style={{ margin: "0 10px" }}>
              <Card
                variant="outlined"
                sx={{
                  fontWeight: "600",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                  padding: "20px",
                  borderRadius: "8px",
                  backgroundColor: "#ffffff",
                  cursor: "pointer",
                  position: "relative",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    borderColor: "#3498db",
                    boxShadow: 4, // Add a shadow on hover for depth
                  },
                  height: "85%",
                }}
                onClick={() => handleBranchClick(branchData.students)}
              >

                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                      color: "#18181b",
                      marginBottom: "1rem",
                      fontSize: "1.2rem", // Slightly larger font for branch name
                    }}
                  >
                    {branch}
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: "0.5rem", marginTop:'0px',color: "#374151" }}>
                    <strong>Most Recruiting Company:</strong> {mostRecruitingCompany.company} ({mostRecruitingCompany.count} students)
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: "0.5rem", color: "#374151" }}>
                    <strong>Total Placed Students:</strong> {totalPlacedStudents}
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: "0.5rem", color: "#374151" }}>
                    <strong>Placement Years:</strong> {years}
                  </Typography>
                  {/* Small transition line */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "50px",
                      backgroundColor: "#3498db",
                      transform: "scaleX(0)",
                      transition: "transform 0.3s ease-in-out",
                      transformOrigin: "bottom right",
                      "&:hover": {
                        transform: "scaleX(1)",
                        transformOrigin: "bottom left",
                      },
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default PlacementPage;
