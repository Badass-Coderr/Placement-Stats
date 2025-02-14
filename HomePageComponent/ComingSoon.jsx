import React, { useState, useEffect } from "react";
import { Box, Button, Container, Typography, Grid } from "@mui/material";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({});
  
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-31T23:59:59"); // Set your target date here
    const now = new Date();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setTimeLeft({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  useEffect(() => {
    const timer = setInterval(() => calculateTimeLeft(), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #4f6d7a, #30475e)",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
               Coming Soon!
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 300, mb: 4 }}>
            "We are working hard to bring you these features. Stay tuned, they're coming soon!"


            </Typography>
            
            {/* Countdown Timer */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                mb: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#222",
                  borderRadius: 2,
                  padding: "10px 20px",
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  {timeLeft.days}
                </Typography>
                <Typography variant="body2">Days</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#222",
                  borderRadius: 2,
                  padding: "10px 20px",
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  {timeLeft.hours}
                </Typography>
                <Typography variant="body2">Hours</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#222",
                  borderRadius: 2,
                  padding: "10px 20px",
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  {timeLeft.minutes}
                </Typography>
                <Typography variant="body2">Minutes</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#222",
                  borderRadius: 2,
                  padding: "10px 20px",
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  {timeLeft.seconds}
                </Typography>
                <Typography variant="body2">Seconds</Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f7b731",
                color: "#333",
                padding: "10px 30px",
                fontWeight: "600",
                textTransform: "none",
                '&:hover': {
                  backgroundColor: "#f79c42",
                },
              }}
            >
              Notify Me When We Launch
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ComingSoon;
