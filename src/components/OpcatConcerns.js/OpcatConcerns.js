import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const OpcatConcerns = () => {
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
        <b>Concerns with OP_CAT</b>
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
          Security Concerns
        </Typography>
        <Typography paragraph>
          The historical removal of OP_CAT in early Bitcoin versions due to
          potential memory usage issues raises valid security concerns. Careful
          mitigation strategies must be in place to prevent new vulnerabilities
          and potential denial-of-service attacks.
        </Typography>

        <Typography variant="h5" gutterBottom color="#FF10F0">
          Script Size Inflation
        </Typography>
        <Typography paragraph>
          Uncontrolled use of OP_CAT could lead to larger scripts, consuming
          more resources and potentially impacting transaction fees. Measures to
          prevent abuse and optimise script execution are essential.
        </Typography>

        <Typography variant="h5" gutterBottom color="#FF10F0">
          Community Resistance
        </Typography>
        <Typography paragraph>
          Implementing major changes like OP_CAT requires consensus within the
          Bitcoin community. Resistance may arise from those advocating for
          simpler, minimalist approaches and those concerned about potential
          risks.
        </Typography>

        <Typography variant="h5" gutterBottom color="#FF10F0">
          Alternative Softforks
        </Typography>
        <Typography paragraph>
          Prioritising other softforks addressing core issues like scalability
          or privacy might be favored over introducing new functionalities like
          OP_CAT.
        </Typography>

        <Typography variant="h5" gutterBottom color="#FF10F0">
          Conclusion
        </Typography>
        <Typography paragraph>
          It's important to note that when discussing the potential
          reintroduction of OP_CAT, it's crucial to revisit its original
          deactivation in 2010. Satoshi Nakamoto made this decision, emphasising
          a precautionary approach that prioritised network security and
          stability over expansive scripting capabilities. The deactivation of
          OP_CAT was driven primarily by concerns about script-based
          vulnerabilities that could be exploited for Denial-of-Service (DoS)
          attacks. This decision underscores the early understanding of
          Bitcoin's scripting power and its potential security implications at
          that time.
        </Typography>
      </Paper>
    </Box>
  );
};

export default OpcatConcerns;
