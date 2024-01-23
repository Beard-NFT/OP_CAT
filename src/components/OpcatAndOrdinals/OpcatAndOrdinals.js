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

const OpcatAndOrdinals = ({ onComplete }) => {
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
    "An Overview of Ordinals",
    "Theoretical Usage",
    "Challenges & Considerations",
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
                {steps[0]}
              </Typography>
              <Typography paragraph>
                If you are unfamiliar with Ordinals, the simplest definition is
                that they are the "NFTs of Bitcoin". The most magical aspect of
                Ordinals is that all NFTs are "on-chain" - as long as the
                Bitcoin blockchain is alive, so are Ordinals. While this is
                magical in many ways, we do lose out on some of the benefits of
                blockchains like Ethereum: mainly, we lose out on Smart Contract
                and Metadata. <br /> <br />
                <em>
                  But what if OP_CAT provided an opportunity to bring metadata
                  to bitcoin?
                </em>
              </Typography>
            </>
          )}
          {activeStep === 1 && (
            <>
              <Typography variant="h5" mt={3} mb={2} color="#FF10F0">
                {steps[1]}
              </Typography>
              <Typography paragraph>
                Imagine that we have a typical set of layers for an NFT project
                (i.e. Hat, Hair, Glasses, Background, etc). <br /> In a Bitcoin
                transaction, OP_CAT could be used to concatenate these metadata
                string together to accompany the Ordinal:
              </Typography>

              <Typography
                paragraph
                bgcolor="#FF10F0"
                color="black"
                p={1}
                borderRadius="6px"
              >
                <code>
                  (Ordinal Number)(Metadata for Hat) OP_CAT <br />
                  (Resulting String)(Metadata for Hair ) OP_CAT <br />
                  (Resulting String)(Metadata for Glasses) OP_CAT ... <br />{" "}
                  <br />
                  (Final Metadata String) OP_CHECKSIG
                  <br />
                </code>
              </Typography>
              <Typography paragraph>
                The final metadata string represents all attributes concatenated
                together and is associated with the ordinal number of a satoshi.
              </Typography>
            </>
          )}
          {activeStep === 2 && (
            <>
              <Typography variant="h5" mt={3} mb={2} color="#FF10F0">
                {steps[2]}
              </Typography>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li style={{ marginBottom: "10px" }}>
                  <b>Data Size:</b> Bitcoin transactions are limited in size,
                  and including extensive metadata directly in the transaction
                  could quickly become impractical due to space constraints.
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <b>Cost:</b> The more data included in a transaction, the
                  larger its size, and thus, the higher the fee to include it in
                  the blockchain.
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <b>Flexibility:</b> Bitcoin's scripting language is not as
                  flexible as Ethereum's, which supports Turing-complete smart
                  contracts that can encode complex logic and data structures.
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <b>Upgrades:</b> Implementing such functionality would require
                  changes to the Bitcoin protocol, which is difficult to achieve
                  due to the need for network-wide consensus.
                </li>
              </ul>
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

export default OpcatAndOrdinals;
