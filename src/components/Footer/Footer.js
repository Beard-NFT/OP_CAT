import React from "react";
import { Box, Divider, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      bgcolor="#c24cf6"
      p={1}
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      flexDirection="row"
    >
      {/* Team Members Box */}
      <Box display="flex" flexDirection="column">
        <Typography variant="subtitle1">
          <b>Team Members</b>
        </Typography>
        <Box display="flex" flexDirection="row" gap={1}>
          <Link href="#" color="inherit" underline="none">
            Oatplan
          </Link>{" "}
          |
          <Link
            href="https://twitter.com/0xB3ARD"
            color="inherit"
            underline="none"
          >
            Chimpy
          </Link>{" "}
          |
          <Link href="#" color="inherit" underline="none">
            357
          </Link>{" "}
          |
          <Link
            href="https://twitter.com/NFT_G0SS1P"
            color="inherit"
            underline="none"
          >
            efick
          </Link>{" "}
          |
          <Link href="#" color="inherit" underline="none">
            towfooh
          </Link>
        </Box>
      </Box>

      <Divider />

      {/* Other Links Box */}
      <Box>
        <Typography variant="subtitle1">
          <b>Other Links</b>
        </Typography>
        <Box>
          <Link
            href="https://twitter.com/QuantumCatsXYZ"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            underline="none"
          >
            QuantumCatsXYZ
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
