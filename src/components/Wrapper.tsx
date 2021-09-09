import { Box } from "@chakra-ui/layout";
import React from "react";

interface WrapperProps {
  size?: "small" | "regular";
}

const Wrapper: React.FC<WrapperProps> = ({ children, size = "regular" }) => {
  return (
    <Box
      mt={8}
      maxW={size === "regular" ? "800px" : "400px"}
      w="100%"
      mx="auto"
    >
      {children}
    </Box>
  );
};

export default Wrapper;
