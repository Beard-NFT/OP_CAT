import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../Header/Header";
import WhatIsOPCAT from "../WhatIsOPCAT/WhatIsOPCAT";
import "./Root.css";
import AtomicSwap from "../AtomicSwap/AtomicSwap";
import Footer from "../Footer/Footer";
import OpcatAndOrdinals from "../OpcatAndOrdinals/OpcatAndOrdinals";
import OpcatConcerns from "../OpcatConcerns.js/OpcatConcerns";
import Quest2Demo from "../Quest2Demo/Quest2Demo";

const Root = () => {
  const [selectedComponent, setSelectedComponent] = useState("QUEST_2_DEMO");

  const handleSelection = (selection) => {
    setSelectedComponent(selection);
  };

  return (
    <Box bgcolor="black">
      <Header
        currentSelection={selectedComponent}
        handleSelection={handleSelection}
      />
      <Box className="backgroundBox" pt={2}>
        {selectedComponent === "WHAT_IS_OPCAT" && <WhatIsOPCAT />}
        {selectedComponent === "QUEST_2_DEMO" && <Quest2Demo />}
        {selectedComponent === "ATOMIC_SWAP" && (
          <AtomicSwap
            onComplete={() => setSelectedComponent("WHAT_IS_OPCAT")}
          />
        )}
        {selectedComponent === "OPCAT_AND_ORDINALS" && (
          <OpcatAndOrdinals
            onComplete={() => setSelectedComponent("WHAT_IS_OPCAT")}
          />
        )}
        {selectedComponent === "OPCAT_CONCERNS" && <OpcatConcerns />}
      </Box>
      <Footer />
    </Box>
  );
};

export default Root;
