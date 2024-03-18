import React from "react";
import { Box, Divider, Link, Typography } from "@mui/material";
import xLogo from "../../img/x-logo.png";

const Footer = () => {
  const X_LOGO_SIZE = "15";

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
        <Typography variant="subtitle1" gutterBottom>
          <b>
            <em>Team Members</em>
          </b>
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          gap={1}
          alignItems="center"
          fontWeight="bold"
        >
          <Link
            href="https://twitter.com/levocor"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            underline="none"
          >
            <Box display="flex" alignItems="center" gap={1}>
              Levecor
              <img
                src={xLogo}
                height={X_LOGO_SIZE}
                width={X_LOGO_SIZE}
                alt="Twitter"
              />
            </Box>
          </Link>
          {/* <Link href="#" color="inherit" underline="none">
            Oatplan
          </Link>{" "} */}
          |
          <Link
            href="https://twitter.com/0xB3ARD"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            underline="none"
          >
            <Box display="flex" alignItems="center" gap={1}>
              Chimpy
              <img
                src={xLogo}
                height={X_LOGO_SIZE}
                width={X_LOGO_SIZE}
                alt="Twitter"
              />
            </Box>
          </Link>{" "}
          {/* |
          <Link href="#" color="inherit" underline="none">
            357
          </Link>{" "} */}
          |
          <Link
            href="https://twitter.com/NFT_G0SS1P"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            underline="none"
          >
            <Box display="flex" alignItems="center" gap={1}>
              ef1ck
              <img
                src={xLogo}
                height={X_LOGO_SIZE}
                width={X_LOGO_SIZE}
                alt="Twitter"
              />
            </Box>
          </Link>{" "}
          {/* |
          <Link href="#" color="inherit" underline="none">
            towfooh
          </Link> */}
        </Box>
      </Box>

      <Divider />

      {/* Other Links Box */}
      <Box>
        <Typography variant="subtitle1" gutterBottom>
          <b>
            <em>Other Links</em>
          </b>
        </Typography>

        <Box>
          <Link
            href="https://twitter.com/QuantumCatsXYZ"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            underline="none"
            fontWeight="bold"
          >
            <Box display="flex" alignItems="center" gap={1}>
              QuantumCatsXYZ
              <img
                src={xLogo}
                height={X_LOGO_SIZE}
                width={X_LOGO_SIZE}
                alt="Twitter"
              />
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
