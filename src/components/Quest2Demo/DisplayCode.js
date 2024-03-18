import { Box, Typography } from "@mui/material";
import React from "react";

const DisplayCode = ({ currentStep }) => {
  const CODE_LINES = [
    "if (stack.size() < 2)",
    `return set_error(serror, SCRIPT_ERR_INVALID_STACK_OPERATION);`,
    "valtype& vch1 = stacktop(-2);",
    "valtype& vch2 = stacktop(-1);",
    "if (vch1.size() + vch2.size() > MAX_SCRIPT_ELEMENT_SIZE)",
    "return set_error(serror, SCRIPT_ERR_INVALID_STACK_OPERATION);",
    "vch1.insert(vch1.end(), vch2.begin(), vch2.end());",
    "stack.pop_back();",
  ];

  const getColor = (i) => {
    console.log(i, currentStep);
    if (i === currentStep) return "white";
    if (i > currentStep) return "gray";
    return "#4AF626";
  };

  return (
    <Box width="48%" pt={1}>
      <Typography variant="h6" textAlign="center">
        OP_CAT Code
      </Typography>
      <Box display="flex" flexDirection="column">
        {CODE_LINES.map((line, index) => (
          <Typography
            color={getColor(index)}
            key={line}
            paddingLeft={index === 1 || index === 5 ? "30px" : "10px"}
          >
            {line}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default DisplayCode;
