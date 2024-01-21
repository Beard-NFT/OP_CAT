import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

/**
 * @desc - Atomic Swap Demo
 */
const AtomicSwap = ({ onComplete }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleComplete = () => {
    onComplete();
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep !== 0) setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = [
    "Creating the Contract",
    "Bob Accepts the Contract",
    "Completing the Swap",
  ];

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={10}
      color="#4AF626"
    >
      <Typography variant="h2" color="#4deeea">
        <b>Atomic Swap Demo</b>
      </Typography>

      <Box
        component={Paper}
        style={{
          maxWidth: 800,
          padding: 16,
          marginTop: 16,
          color: "#4AF626",
          backgroundColor: "#000",
        }}
      >
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel
                StepIconProps={{
                  sx: {
                    color: "#4AF626", // Normal color
                    "&.Mui-completed": {
                      color: "#4AF626", // Completed color
                    },
                    "&.Mui-active": {
                      color: "#FF10F0", // Active color
                    },
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Box to contain each step */}
        <Box>
          {activeStep === 0 && (
            <>
              <Typography variant="h5" mt={3} mb={2} color="#FF10F0">
                Step 1: Creating the Contract
              </Typography>
              <Typography paragraph>
                Alice creates a contract on her blockchain of choice that says,
                "I will pay 100 units of my cryptocurrency if Bob proves he has
                paid me 1 unit of his cryptocurrency." She uses OP_CAT to
                concatenate the secret key with her transaction, making it a
                hash.
              </Typography>
            </>
          )}
          {activeStep === 1 && (
            <>
              <Typography variant="h5" mt={3} mb={2} color="#FF10F0">
                Step 2: Bob Accepts the Contract
              </Typography>
              <Typography paragraph>
                Bob reviews the contract and accepts it. He pays 1 unit of his
                cryptocurrency to the contract address. Bob's transaction can
                also use OP_CAT for similar purposes as Alice's.
              </Typography>
            </>
          )}
          {activeStep === 2 && (
            <>
              <Typography variant="h5" mt={3} mb={2} color="#FF10F0">
                Step 3: Completing the Swap
              </Typography>
              <Typography paragraph>
                Alice sees that Bob has held up his end of the deal. She submits
                a transaction to Bob's contract with the secret key, which
                releases the funds to her. The secret key, concatenated in her
                original contract, is now revealed to Bob, allowing him to claim
                his funds from Alice's contract.
              </Typography>
            </>
          )}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              onClick={handleBack}
              sx={{
                mr: 1,
                backgroundColor: activeStep === 0 ? "#555" : "#4AF626", // Disabled color
                "&:hover": {
                  backgroundColor: activeStep === 0 ? "#555" : "#3e8e41", // Hover color
                  "@media (hover: none)": {
                    backgroundColor: activeStep === 0 ? "#555" : "#4AF626", // Handle hover on devices that don't support it
                  },
                },
                color: "#fff", // Text color
              }}
              variant="contained"
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              onClick={
                activeStep === steps.length - 1 ? handleComplete : handleNext
              }
              variant="contained"
              sx={{
                backgroundColor: "#4AF626",
                "&:hover": {
                  backgroundColor: "#3e8e41", // Hover color
                },
                color: "#fff", // Text color
              }}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AtomicSwap;
