import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { Outlet, Link } from "react-router-dom";
// Key Features data
const heroContent = {
  heading: "NIT Warangal Placement Insights",
  subHeading: "Explore top recruiters, interview tips, and career opportunities.",
  ctaPrimary: {
    text: "Explore Opportunities",
    link: "/placement",
  },
  ctaSecondary: {
    text: "Learn More",
    link: "/faq",
  },
};

// Pricing data
const pricingPlans = [
  {
    plan: "CSE (Computer Science Engineering)",
    recruiters: ["Google", "Microsoft", "Amazon", "Adobe"],
    description: "Explore top recruiters and apply for job openings in CSE.",
    features: [
      "High placement percentage",
      "Top recruiter details",
      "Average package: $20,000 per year",
    ],
  },
  {
    plan: "ECE (Electronics & Communication Engineering)",
    recruiters: ["Qualcomm", "Texas Instruments", "Intel", "Samsung"],
    description: "Get details about recruiters for ECE and apply for job roles.",
    features: [
      "Strong industry demand",
      "Core and software roles",
      "Average package: $18,000 per year",
    ],
  },
  {
    plan: "ME (Mechanical Engineering)",
    recruiters: ["Tata Motors", "GE", "Bosch", "L&T"],
    description: "Explore opportunities in the mechanical engineering field.",
    features: [
      "Opportunities in core sectors",
      "Average package: $15,000 per year",
      "On-site job roles",
    ],
  },
];


// Testimonials data
const testimonials = [
  {
    quote: `"SaaSify has revolutionized our workflow. It's intuitive, powerful, and a joy to use."`,
    name: "Jane Doe",
    position: "CEO, TechCorp",
  },
  {
    quote: `"The analytics features have given us invaluable insights into our business processes."`,
    name: "John Smith",
    position: "CTO, InnovateCo",
  },
  {
    quote: `"Customer support is top-notch. They're always there when we need them."`,
    name: "Emily Brown",
    position: "Operations Manager, StartupX",
  },
];

const LandingPage = () => {
  return (
    <Box sx={{ padding: 3, backgroundColor: "#f3f4f6" }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          marginBottom: 5,
          marginTop: "3rem",
          fontWeight: "800",
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "700", // Extra bold
            color: "#18181b",
            lineHeight: "1.2",
          }}
        >
          {heroContent.heading}
        </Typography>
        <Typography variant="h6" paragraph>
          {heroContent.subHeading}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginRight: 2,
            backgroundColor: "#18181b",
            marginTop: "1.5rem",
          }}
        >
          <Link
            to={heroContent.ctaPrimary.link}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            {heroContent.ctaPrimary.text}
          </Link>
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            marginTop: "1.5rem",
          }}
        >
          <Link
            to={heroContent.ctaSecondary.link}
            style={{
              textDecoration: "none",
              color: "#18181b",
            }}
          >
            {heroContent.ctaSecondary.text}
          </Link>
        </Button>
      </Box>

    
      <Typography
  variant="h5"
  component="h2"
  gutterBottom
  sx={{
    marginTop: "7rem",
    textAlign: "center",
    fontWeight: "600",
    color: "#18181b",
    lineHeight: "0.8",
  }}
>
  Placement Opportunities by Branch
</Typography>
<Grid
  container
  spacing={3}
  justifyContent="center"
  style={{ marginTop: "1.3rem" }}
>
  {pricingPlans.map((plan, index) => (
    <Grid item xs={12} sm={3.5} key={index}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "600" }}>
            {plan.plan}
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
            {plan.description}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginTop: "1rem",
              fontWeight: "500",
              color: "#3f51b5",
            }}
          >
            Top Recruiters:
          </Typography>
          <ul>
            {plan.recruiters.map((recruiter, idx) => (
              <li key={idx}>{recruiter}</li>
            ))}
          </ul>
          <Typography
            variant="body1"
            sx={{
              marginTop: "1rem",
              fontWeight: "500",
              color: "#3f51b5",
            }}
          >
            Features:
          </Typography>
          <ul>
            {plan.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          <Button variant="contained" color="primary" fullWidth>
            Explore Jobs
          </Button>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>
    </Box>
  );
};

export default LandingPage;
