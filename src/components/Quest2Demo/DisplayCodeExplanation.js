import { Box, Button, Typography, darken } from "@mui/material";
import React from "react";

const DisplayCodeExplanation = ({ currentStep, onBackClick, onNextClick }) => {
  const DESCRIPTIONS = [
    `The word “STACK” comes from the word “STAKKR” of Germanic origin, meaning "haystack". So just as you can’t make a haystack out of one straw, the 1st line of code checks if there are more than one item on the stack. If the size is less than two, the return in line 2 will take place.`,
    `The 2nd line of code clarifies this by returning an error and stopping the execution of the code.`,
    `If the error does not show up, the code will proceed, and then the 3rd line of the code will execute a “grab”, taking the item just below the top. It is represented by the “-2” in parentheses, with -1 being the top item. VCH1 is a name of the place where the item can be stored, like grabbing an apple and holding it in one hand, or storing a file on your computer!`,
    `Working similarly to the 3rd line, the 4th line takes the TOP item “(-1)” and stores it in VCH2. Imagine your right hand, or another folder on your computer.`,
    `The 5th line of the code ensures that the two items do not exceed a certain size. Imagine holding 1 apple in each hand. You know the size of your hand, and you understand that holding too many apples of a certain size would be impossible. The line checks to make sure the combined items' size doesn’t burden the system. If the size is not under the limit, an error is returned.`,
    `Just like line 2, line 6 returns an error message, letting you know that the size was exceeded and will not continue executing the code. You have dropped the apples from your hands. Oh no!`,
    `Line 7 will be executed to concatenate (a fancy word for linking or joining something together) VCH2 to VCH1. In other words, line 7 takes the entire content of VCH2 and appends it to VCH1, effectively joining them together. With the force of 1000 giants, you take an apple in each hand and CRUSH them together, combining them into a juicy apple ball.`,
    `Line 8 REMOVES VCH2 because the content was put in VCH1. Having combined your apples into one hand, you can drop your other hand and let it rest.`,

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
