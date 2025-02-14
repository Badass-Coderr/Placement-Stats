import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';

// Key Features data
const features = [
  {
    title: "Lightning Fast",
    description: "Experience unparalleled speed and efficiency in your daily tasks.",
  },
  {
    title: "Secure & Reliable",
    description: "Your data is protected with state-of-the-art security measures.",
  },
  {
    title: "Insightful Analytics",
    description: "Gain valuable insights with our comprehensive analytics tools.",
  },
];

// Pricing data
const pricingPlans = [
  {
    plan: "Basic",
    price: "$9/month",
    description: "Perfect for individuals and small teams",
    features: ["Up to 5 users", "Basic features", "Email support"],
  },
  {
    plan: "Pro",
    price: "$29/month",
    description: "Ideal for growing businesses",
    features: ["Up to 20 users", "Advanced features", "Priority support"],
  },
  {
    plan: "Enterprise",
    price: "Custom/month",
    description: "For large-scale organizations",
    features: ["Unlimited users", "Custom features", "24/7 dedicated support"],
  },
];

const LandingPage = () => {
  return (
    <Box sx={{ padding: 3 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', marginBottom: 5 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Simplify Your Workflow
        </Typography>
        <Typography variant="h6" paragraph>
          Boost productivity and streamline your business processes with our intuitive SaaS platform.
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
          Get Started
        </Button>
        <Button variant="outlined" color="primary">
          Learn More
        </Button>
      </Box>

      {/* Key Features Section */}
      <Typography variant="h5" component="h2" gutterBottom>
        Key Features
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{feature.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pricing Section */}
      <Typography variant="h5" component="h2" gutterBottom sx={{ marginTop: 5 }}>
        Flexible Pricing
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {pricingPlans.map((plan, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">{plan.plan}</Typography>
                <Typography variant="h5">{plan.price}</Typography>
                <Typography variant="body2">{plan.description}</Typography>
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Button variant="contained" color="primary" fullWidth>
                  Choose Plan
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
