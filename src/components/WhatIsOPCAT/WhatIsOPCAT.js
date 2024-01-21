import React from "react";
import { Box, Typography, Paper } from "@mui/material";

/**
 * @desc- Explains to the user what OP_CAT is
 */
const WhatIsOPCAT = () => {
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
        <b>What Is OP_CAT?</b>
      </Typography>

      <Paper
        style={{
          maxWidth: 800,
          padding: 16,
          marginTop: 16,
          color: "#4AF626",
          backgroundColor: "black",
        }}
      >
        <Typography variant="h5" gutterBottom color="#FF10F0">
          Overview
        </Typography>
        <Typography paragraph>
          OP_CAT is an opcode in Bitcoin's scripting language that was
          originally used to concatenate two strings. It was disabled due to
          concerns about potential security vulnerabilities and the complexity
          it introduced.
        </Typography>

        <Typography variant="h5" gutterBottom color="#FF10F0">
          Historical Context
        </Typography>
        <Typography paragraph>
          In the early days of Bitcoin, OP_CAT was part of the script, allowing
          users to combine data in innovative ways. However, as Bitcoin evolved,
          the need for a more secure and stable environment led to its
          deprecation.
        </Typography>

        <Typography variant="h5" gutterBottom color="#FF10F0">
          Potential Use Cases
        </Typography>
        <Typography paragraph>
          Despite its deactivation, OP_CAT had potential use cases such as
          complex multi-signature transactions, data encoding techniques, and
          advanced contract logic.
        </Typography>

        <Typography variant="h5" gutterBottom color="#FF10F0">
          Reinstatement Discussions
        </Typography>
        <Typography paragraph>
          There have been discussions in the Bitcoin community about possibly
          reinstating OP_CAT, given its utility in expanding Bitcoin's scripting
          capabilities. However, any changes would require thorough evaluation
          to ensure network security.
        </Typography>
      </Paper>
    </Box>
  );
};

export default WhatIsOPCAT;
