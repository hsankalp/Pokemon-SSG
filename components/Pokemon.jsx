import React from "react";
import { Box, Image, Heading } from "@chakra-ui/react";

const Pokemon = ({ pokemon }) => {
  const {
    name,
    sprites: {
      other: {
        dream_world: { front_default },
      },
    },
  } = pokemon;

  return (
    <Box border="1px solid #000" p="1rem" my="1rem">
      <Heading as="h4" size="md">
        {name}
      </Heading>
      <Image boxSize="200px" src={front_default} alt={name} />
    </Box>
  );
};

export default Pokemon;
