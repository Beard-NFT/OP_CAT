import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../Header/Header";
import WhatIsOPCAT from "../WhatIsOPCAT/WhatIsOPCAT";
import "./Root.css";
import AtomicSwap from "../AtomicSwap/AtomicSwap";

const Root = () => {
  const [selectedComponent, setSelectedComponent] = useState("WHAT_IS_OPCAT");

  const handleSelection = (selection) => {
    setSelectedComponent(selection);
  };

  return (
    <Box className="backgroundBox">
      <Header
        currentSelection={selectedComponent}
        handleSelection={handleSelection}
      />
      {selectedComponent === "WHAT_IS_OPCAT" && <WhatIsOPCAT />}
      {selectedComponent === "ATOMIC_SWAP" && (
        <AtomicSwap onComplete={() => setSelectedComponent("WHAT_IS_OPCAT")} />
      )}
    </Box>
  );
};

export default Root;
