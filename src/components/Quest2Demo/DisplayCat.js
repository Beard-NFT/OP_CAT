import { Box } from "@mui/material";
import React from "react";
import layer1 from "../../quantum_cat_layers/layer1.png";
import layer2 from "../../quantum_cat_layers/layer2.png";
import layer3 from "../../quantum_cat_layers/layer3.png";
import layer4 from "../../quantum_cat_layers/layer4.png";
import layer5 from "../../quantum_cat_layers/layer5.png";
import layer6 from "../../quantum_cat_layers/layer6.png";
import layer7 from "../../quantum_cat_layers/layer7.png";
import layer8 from "../../quantum_cat_layers/layer8.png";

const DisplayCat = ({ currentStep }) => {
  const DIMENSION = "300px";

  const images = [
    layer1,
    layer2,
    layer3,
    layer4,
    layer5,
    layer6,
    layer7,
    layer8,
  ];

  const displayedImages = images.slice(0, currentStep);

  return (
    <Box>
      <Box
        bgcolor="#222"
        width={DIMENSION}
        height={DIMENSION}
        position="relative"
      >
        {displayedImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Layer ${index + 1}`}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default DisplayCat;
