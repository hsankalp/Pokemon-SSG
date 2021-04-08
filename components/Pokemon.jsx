import React from "react";
import { Box, Image, Heading, Text } from "@chakra-ui/react";

const Pokemon = ({ pokemon }) => {
  const {
    name,
    height,
    weight,
    stats,
    types,
    sprites: {
      front_default: fallbackImg,
      other: {
        dream_world: { front_default: mainImg },
      },
    },
  } = pokemon;

  return (
    <Box m="1rem" display="flex" flexDir="column" alignItems="center">
      <Image boxSize="200px" src={mainImg ?? fallbackImg} alt={name} m="2rem" />
      <Box alignSelf="start" display="grid" gridAutoFlow="row" gridGap="0.5rem">
        <Heading as="h4" size="lg" textTransform="capitalize">
          {name}
        </Heading>
        <Text fontSize="lg">
          Height: <strong>{(height * 0.328084).toFixed(2)} ft</strong>
        </Text>
        <Text fontSize="lg">
          Weight: <strong>{(weight * 0.220462).toFixed(2)} lbs</strong>
        </Text>
        <Heading as="h5" size="md">
          Stats:
        </Heading>
        {stats.map((stat) => {
          const {
            base_stat,
            stat: { name },
          } = stat;
          return (
            <Text fontSize="lg" textTransform="capitalize" key={name}>
              {name}: <strong>{base_stat}</strong>
            </Text>
          );
        })}
        <Text fontSize="lg">
          Types:{" "}
          <strong>
            {types
              .map((item) => {
                const { name } = item.type;
                return name.charAt(0).toUpperCase() + name.slice(1);
              })
              .join(", ")}
          </strong>
        </Text>
      </Box>
    </Box>
  );
};

export default Pokemon;
