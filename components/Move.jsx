import React from "react";
import { Badge, Box } from "@chakra-ui/react";

const Move = ({ move }) => {
  const {
    move: { name },
  } = move;
  return (
    <Box key={name}>
      <Badge colorScheme="green">{name}</Badge>
    </Box>
  );
};

export default Move;
