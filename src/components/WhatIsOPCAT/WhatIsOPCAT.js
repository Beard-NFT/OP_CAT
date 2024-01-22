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
          maxHeight: "64vh",
          padding: 16,
          marginTop: 16,
          color: "#4AF626",
          backgroundColor: "black",
          overflowY: "scroll",
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
          How to Use OP_CAT
        </Typography>
        <Typography paragraph>
          Imagine you're crafting a Bitcoin transaction and you want to combine
          two pieces of data within a script. In the early days of Bitcoin, you
          could have used OP_CAT for this purpose.
        </Typography>
        <Box bgcolor="orange">
          <Typography paragraph>
            Suppose you have two strings: the first string is the hex
            representation of "Hello" (48656C6C6F) and the second string is
            "World" (576F726C64). To concatenate these strings within a Bitcoin
            script, you would use OP_CAT like this:
          </Typography>
        </Box>
        <Typography paragraph>
          <code>
            OP_PUSHDATA 48656C6C6F // Pushes the hex representation of "Hello"
            onto the stack <br />
            OP_PUSHDATA 576F726C64 // Pushes the hex representation of "World"
            onto the stack <br />
            OP_CAT // Concatenates the two topmost items on the stack <br />
          </code>
        </Typography>
        <Typography paragraph>
          After executing OP_CAT, the stack would have a single item: the
          concatenated string (48656C6C6F576F726C64), which represents
          "HelloWorld".
        </Typography>
        <Typography paragraph>
          This opcode was particularly useful in scripts that needed to combine
          various data elements dynamically. However, due to potential security
          concerns, OP_CAT was disabled. It serves as an interesting part of
          Bitcoin's history, showcasing the evolution of its scripting
          capabilities.
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
