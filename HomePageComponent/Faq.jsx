import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';  // For better separation of sections

function Fag({ open, setOpen }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70vw',  // Adjusted for better fit on most screens
    bgcolor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    maxHeight: '80vh',  // Ensure the modal doesn't stretch beyond the screen
    overflowY: 'auto',  // Allows scrolling if content overflows
  };

  const [selectedQuestion, setSelectedQuestion] = React.useState(null);

  const faqData = [
    { question: "Q1. How We Can Apply For Job", answer: "Ans: All the available jobs are available in Job Section. You can apply for job from job tab in the website." },
    { question: "Q2. What is React?", answer: "Ans: React is a JavaScript library for building user interfaces." },
    { question: "Q3. What is Material UI?", answer: "Ans: Material UI is a React component library that implements Google's Material Design." },
    // Add more questions and answers here as needed
  ];

  const handleQuestionClick = (answer) => {
    setSelectedQuestion(answer);
  };

  const handleClose = () => {
    setSelectedQuestion(null);
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ fontWeight: 700, mb: 3, textAlign: 'center' }}>
          Frequently Asked Questions
        </Typography>

        <Divider sx={{ mb: 2 }} /> {/* Divider for better separation */}

        {/* Questions List */}
        <Box sx={{ mb: 3 }}>
          {faqData.map((faq, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => handleQuestionClick(faq.answer)}
                sx={{
                  textAlign: 'left',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  '&:hover': { 
                    backgroundColor: '#e0f7fa',
                    boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                {faq.question}
              </Button>
            </Box>
          ))}
        </Box>

        {/* Answer Section */}
        {selectedQuestion && (
          <Box sx={{ mt: 2, backgroundColor: '#f1f1f1', borderRadius: '8px', padding: '16px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <Typography id="modal-modal-description" sx={{ fontSize: '1.1rem', fontWeight: 500, color: '#333' }}>
              <strong>Answer:</strong>
            </Typography>
            <Typography sx={{ fontSize: '1rem', color: '#555', mt: 1 }}>
              {selectedQuestion}
            </Typography>
          </Box>
        )}

        {/* Close Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{
              backgroundColor: '#00796b',
              color: '#fff',
              padding: '8px 24px',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#004d40',
              },
            }}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default Fag;
