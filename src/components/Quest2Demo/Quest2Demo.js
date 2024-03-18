import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import DisplayCode from "./DisplayCode";
import DisplayCat from "./DisplayCat";
import DisplayCodeExplanation from "./DisplayCodeExplanation";

const Quest2Demo = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const decrementStep = () => {
    setCurrentStep((currentStep) => (currentStep -= 1));
  };

  const incrementStep = () => {
    setCurrentStep((currentStep) => (currentStep += 1));
  };

  return (
    <Box
      bgcolor="rgba(0, 0, 0, 0.85);"
      m={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      color="#4AF626"
      p={10}
      gap={3}
    >
      <Typography variant="h3" color="#4deeea" fontWeight="bold">
        OP_CAT Code Explained
      </Typography>
      <Box
        bgcolor="#FF10F0"
        p={1}
        display="flex"
        flexDirection="column"
        width="50%"
      >
        <Typography color="white" fontWeight="bold" textAlign="center">
          To understand OP_CAT, one must analyze the code. There are 8 lines of
          code that make up this magical command. Using the Next buttons in the
          section below, step through each line of code. As you continue past
          each line, you will reveal the layers of a Quantum Cat!
        </Typography>
      </Box>
      {/* This split box will display some kind of stepper on the left and an opcat on the right */}
      <Box display="flex" width="100%" justifyContent="space-between" gap={1}>
        <Box
          border="2px solid #4AF626"
          borderRadius="6px"
          color="white"
          display="flex"
          flexGrow={1}
          justifyContent="space-between"
          p={2}
        >
          <DisplayCode currentStep={currentStep} />
          <DisplayCodeExplanation
            currentStep={currentStep}
            onBackClick={decrementStep}
            onNextClick={incrementStep}
          />
        </Box>

        {/* This will display the cat image */}
        <DisplayCat currentStep={currentStep} />
      </Box>
    </Box>
  );
};

export default Quest2Demo;
