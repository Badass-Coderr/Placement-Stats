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
const features = [
  {
    title: "Job Opportunities",
    description:
      "Explore placement statistics, top recruiters, and open positions for students.",
      link: "/jobs",
  },
  
  {
    title: "Placement Insights",
    description:
      "Analyze placement trends, top-performing branches, and recruiters to make informed career decisions.",
      link: "/placement",
  },
  // {
  //   title: "Hackathon Challenges",
  //   description:
  //     "Participate in hackathons and showcase your skills in solving real-world problems.",
  // },
  {
    title: "Query & FAQ Section",
    description:
      "Get answers to your questions about the placement process and job applications.",
      link: "/ComingSoon",
  },
];
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
const otherFeatures = [
  {
    title: "Search Placement Data",
    description:
      "Search and filter placement data based on branch, recruiters, and packages to find relevant opportunities.",
      link: "/placement",
  },
  {
    title: "Hackathon Challenges",
    description:
      "Participate in hackathons and showcase your skills in solving real-world problems. Stay updated with upcoming events.",
      link: "/ComingSoon",
  },
  {
    title: "Ask Questions",
    description:
      "Post your questions about career guidance, placements, or hackathons and get expert advice.",
      link: "/ComingSoon",
  },
  {
    title: "Placement Insights",
    description:
      "Analyze placement trends, top-performing branches, and recruiters to make informed career decisions.",
      link: "/placement",
  },
  {
    title: "Resume Building Tips",
    description:
      "Learn how to create a professional resume and tailor it for top recruiters.",
      link: "/ComingSoon",
  },
];

// Testimonials data
const testimonials = [
  {
    quote: "SaaSify has revolutionized our workflow. It's intuitive, powerful, and a joy to use.",
    name: "Jane Doe",
    position: "CEO, TechCorp",
  },
  {
    quote: "The analytics features have given us invaluable insights into our business processes.",
    name: "John Smith",
    position: "CTO, InnovateCo",
  },
  {
    quote: "Customer support is top-notch. They're always there when we need them.",
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
          marginTop: "7rem",
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

      {/* Key Features Section */}
      <Box sx={{ marginTop: "10rem", textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "600",
            color: "#18181b",
            lineHeight: "0.8",
          }}
        >
          Key Features
        </Typography>
        <Grid
          container
          spacing={3}
          
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: "1.3rem", width: "70%", marginInline: "auto"}}
        >
         {features.map((feature, index) => (
            <Grid item xs={10} sm={4} key={index}>
              <Link to={feature.link} style={{ textDecoration: "none" }}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600", // Extra bold
                        color: "#18181b",
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ marginTop: "1rem" }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
     
    
     {/* Other Features Section */}
     <Box sx={{ marginTop: "10rem", textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "600",
            color: "#18181b",
            lineHeight: "0.8",
          }}
        >
          Other Features
        </Typography>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          style={{ marginTop: "1.3rem", width: "80%", marginInline: "auto" }}
        >
          {otherFeatures.map((feature, index) => (
            <Grid item xs={10} sm={3.5} key={index}>
              <Link to={feature.link} style={{ textDecoration: "none" }}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600", // Extra bold
                        color: "#18181b",
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ marginTop: "1rem" }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
 {/* Testimonials Section */}
      <Box sx={{ marginTop: 5, textAlign: "center" , marginTop: "12rem"}}>
        <Typography variant="h4" component="h2" gutterBottom  sx={ {fontWeight: "600",
            color: "#18181b",
            lineHeight: "0.8",}}>
          What Our Interviewer Says 
                 </Typography>
        <Grid container item xs={12} spacing={3} justifyContent="center" style={{ marginTop: "1.3rem", width: "80%", marginInline: "auto" }}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={3.5} key={index}>
              <Card sx={{ padding: 3 }}>
                <Typography
                  variant="body2"
                  sx={{ fontStyle: "italic", marginBottom: 4 }}
                >
                  {testimonial.quote}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar sx={{ marginRight: 2 }} />
                  <div>
                    <Typography variant="body1">{testimonial.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {testimonial.position}
                    </Typography>
                  </div>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
       {/* Additional Sections */}
       <Box sx={{ marginTop: "7rem", textAlign: "center" }}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "600",
            color: "#18181b",
            lineHeight: "0.8",
          }}
        >
          How It Works
        </Typography>
        <Typography variant="body1" paragraph>
          Our platform streamlines the placement process by offering students
          and alumni access to placement statistics, detailed company profiles,
          interview tips, and job application tools. Engage with a community of
          peers and mentors to prepare for success.
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;