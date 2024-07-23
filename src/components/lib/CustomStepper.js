import { Box, Chip } from "@mui/material";
import SectionWrapper from "components/layout/SectionWrapper";
import React from "react";

const steps = ["Cart", "Details", "Payment", "Review"];

const CustomStepper = ({ activeStep }) => {
  return (
    <SectionWrapper>
      <Box
        sx={{
          maxWidth: "1500px",
          margin: "36px auto", // 14px top and bottom, auto left and right
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {steps.map((label, index) => (
          <React.Fragment key={label}>
            <Chip
              label={`${index + 1}. ${label}`}
              sx={{
                bgcolor:
                  index <= activeStep
                    ? "rgb(210, 63, 87)"
                    : "rgba(210, 63, 87, 0.2)",
                color: index <= activeStep ? "white" : "rgb(210, 63, 87)",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
            {index < steps.length - 1 && (
              <Box
                sx={{
                  width: 40,
                  height: 1,
                  bgcolor:
                    index < activeStep
                      ? "rgb(210, 63, 87)"
                      : "rgba(210, 63, 87, 0.2)",
                  mx: 1,
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Box>
    </SectionWrapper>
  );
};

export default CustomStepper;
