import { Box, Button, Typography, darken } from "@mui/material";
import React from "react";

const DisplayCodeExplanation = ({ currentStep, onBackClick, onNextClick }) => {
  const DESCRIPTIONS = [
    `Checks if there are at least two items on the stack. The command requires two items to concatenate (join together).`,
    `If there aren't two items on the stack, this line returns an error, indicating that the operation is invalid because it needs two items to work.`,
    `Gets the second-to-last item from the stack and stores it in vch1. In stack operations, the top of the stack is considered the last item, so -2 refers to the item just below the top.`,
    `Retrieves the last item from the stack and stores it in vch2. This is the item at the top of the stack.`,
    `Checks if the total size of the two items to be concatenated exceeds the maximum allowed size. This is a safety check to prevent overly large data operations that could burden the system.`,
    `If the combined size of the two items is too large, it returns an error, indicating that the operation cannot proceed due to size limitations.`,
    `Concatenates vch2 to the end of vch1. It takes the entire content of vch2 and appends it to vch1, effectively joining them together.`,
    `Removes the last item (vch2) from the stack since its content has already been added to vch1. This leaves the stack with the newly concatenated item at the top.`,
    `Thank you for learning about the OP_CAT code! Explore the rest of the website to continue your OP_CAT journey. Also, please follow the Quantum Cats X page here:`,
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      width="48%"
      pt={1}
    >
      <Typography variant="h6" textAlign="center">
        Explanation
      </Typography>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap={2}
      >
        <Typography
          textAlign="center"
          variant={currentStep === 8 ? "h6" : "subtitle1"}
          maxWidth="80%"
          color={currentStep === 8 && "#FF10F0"}
        >
          {DESCRIPTIONS[currentStep]}
        </Typography>
        {currentStep === 8 && (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF10F0",
              "&:hover": {
                backgroundColor: darken("#FF10F0", 0.3),
              },
            }}
            onClick={() =>
              window.open("https://twitter.com/QuantumCatsXYZ", "_blank")
            }
          >
            Visit X Page
          </Button>
        )}
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Button
          variant="contained"
          onClick={onBackClick}
          disabled={currentStep === 0}
          sx={{
            backgroundColor: "#FF10F0",
            "&:hover": {
              backgroundColor: darken("#FF10F0", 0.3),
            },
          }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={onNextClick}
          disabled={currentStep > 7}
          sx={{
            backgroundColor: "#4AF626",
            "&:hover": {
              backgroundColor: darken("#4AF626", 0.3),
            },
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default DisplayCodeExplanation;
