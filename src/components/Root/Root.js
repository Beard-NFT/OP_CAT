import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../Header/Header";
import WhatIsOPCAT from "../WhatIsOPCAT/WhatIsOPCAT";
import "./Root.css";
import AtomicSwap from "../AtomicSwap/AtomicSwap";
import Footer from "../Footer/Footer";

const Root = () => {
  const [selectedComponent, setSelectedComponent] = useState("WHAT_IS_OPCAT");

  const handleSelection = (selection) => {
    setSelectedComponent(selection);
  };

  return (
    <>
      <Header
        currentSelection={selectedComponent}
        handleSelection={handleSelection}
      />
      <Box className="backgroundBox" pt={2}>
        {selectedComponent === "WHAT_IS_OPCAT" && <WhatIsOPCAT />}
        {selectedComponent === "ATOMIC_SWAP" && (
          <AtomicSwap
            onComplete={() => setSelectedComponent("WHAT_IS_OPCAT")}
          />
        )}
      </Box>
      <Footer />
    </>
  );
};

export default Root;
