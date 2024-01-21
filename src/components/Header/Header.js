import React from "react";
import { Box, Button } from "@mui/material";

/**
 * @param {string} currentSelection - Only used to highlight which button is selected
 * @param {function} handleSelection - Sets state for parent. Tells it which component to have open for main content.
 */
const Header = ({ currentSelection, handleSelection }) => {
  return (
    <>
      <Box bgcolor="#c24cf6" p={1} display="flex" gap={2}>
        <Button
          variant="contained"
          onClick={() => handleSelection("WHAT_IS_OPCAT")}
          sx={{
            backgroundColor:
              currentSelection === "WHAT_IS_OPCAT" ? "#222" : "#000",
            color: "#4AF626",
          }}
        >
          What is OP_CAT?
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            console.log("test");
            handleSelection("ATOMIC_SWAP");
          }}
          sx={{
            backgroundColor:
              currentSelection === "ATOMIC_SWAP" ? "#222" : "#000",
            color: "#4AF626",
          }}
        >
          Atomic Swap
        </Button>
      </Box>
    </>
  );
};

export default Header;
