import { Link } from "react-router-dom";
import { useState } from "react";
import Fag from "./Faq"; // Import your Fag component (modal)
import { Button, Box, Container, Typography } from '@mui/material';

function Header() {
  const [modalOpen, setModalOpen] = useState(false); // State to handle modal open/close

  const handleFaqClick = (e) => {
    e.preventDefault(); // Prevent navigation when clicking the "FAQ" link
    setModalOpen(true);  // Open the modal
  };

  return (
    <>
      <header style={{ backgroundColor: 'white', padding: '10px 16px', width: '100%', zIndex: 1000, height: '4rem' }}>
        <Container maxWidth="x2">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', textDecoration:'none'}}>
              <Typography variant="h6" sx={{
                fontWeight: "600",
                color: "#18181b",
                lineHeight: "0.8",
              }}>
               <Link   to="/" style={{textDecoration:'none',color:'black'}}> Career Insights</Link>
              </Typography>
            </div>

            {/* Navigation Links */}
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              <Button
                component={Link}
                to="/"
                style={{
                  color: 'black',
                  marginRight: '20px',
                  fontWeight: '300',
                  textTransform: 'none', // Prevent uppercase
                  transition: 'text-decoration 0.3s', // Smooth transition for underline
                }}
                sx={{
                  '&:hover': {
                    textDecoration: 'underline', // Underline on hover
                  }
                }}
              >
                Home
              </Button><Button
                component={Link}
                to="/pl"
                style={{
                  color: 'black',
                  marginRight: '20px',
                  fontWeight: '400',
                  textTransform: 'none', // Prevent uppercase
                  transition: 'text-decoration 0.3s', // Smooth transition for underline
                }}
                sx={{
                  '&:hover': {
                    textDecoration: 'underline', // Underline on hover
                  }
                }}
              >
                Placement
              </Button>
              <Button
                component={Link}
                to="/jobs"
                style={{
                  color: 'black',
                  marginRight: '20px',
                  fontWeight: '400',
                  textTransform: 'none', // Prevent uppercase
                  transition: 'text-decoration 0.3s', // Smooth transition for underline
                }}
                sx={{
                  '&:hover': {
                    textDecoration: 'underline', // Underline on hover
                  }
                }}
              >
                JOBS
              </Button>
              
              <Button
                onClick={handleFaqClick}
                style={{
                  color: 'black',
                  marginRight: '20px',
                  fontWeight: '400',
                  textTransform: 'none', // Prevent uppercase
                  transition: 'text-decoration 0.3s', // Smooth transition for underline
                }}
                sx={{
                  '&:hover': {
                    textDecoration: 'underline', // Underline on hover
                  }
                }}
              >
                FAQ
              </Button>
              
              
            </Box>

            {/* Log in and Sign up buttons */}
           
          </div>
        </Container>
      </header>

      {/* Open the modal directly when 'FAQ' is clicked */}
      <Fag open={modalOpen} setOpen={setModalOpen} /> {/* Pass modal state to the Fag component */}
    </>
  );
}

export default Header;
