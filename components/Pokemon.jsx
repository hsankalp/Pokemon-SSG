import React, { useState } from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  Progress,
  Badge,
  SimpleGrid,
  Divider,
  Button,
} from "@chakra-ui/react";
import Move from "./Move";

const Pokemon = ({ pokemon }) => {
  const {
    name,
    height,
    weight,
    stats,
    types,
    moves,
    sprites: {
      front_default: fallbackImg,
      other: {
        dream_world: { front_default: mainImg },
      },
    },
  } = pokemon;

  const [showAllMoves, setShowAllMoves] = useState(false);

  const handleClick = () => {
    setShowAllMoves(!showAllMoves);
  };

  const movesToDisplay = showAllMoves ? moves.length : 24;

  return (
    <Box
      display="grid"
      gridAutoFlow="row"
      gridGap="1rem"
      width="100%"
      my="1rem"
    >
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        backgroundColor="red.100"
        borderRadius="5px"
        p="1rem"
      >
        <Image
          boxSize="200px"
          src={mainImg ?? fallbackImg}
          alt={name}
          m="2rem"
        />
        <Box display="grid" gridAutoFlow="column" gridGap="1rem" pb="1rem">
          {types
            .map((item) => {
              const { name } = item.type;
              return name.charAt(0).toUpperCase() + name.slice(1);
            })
            .map((type) => (
              <Badge colorScheme="green" fontSize="1rem" key={type}>
                {type}
              </Badge>
            ))}
        </Box>
      </Box>
      <Heading as="h1" size="lg" textTransform="capitalize">
        {name}
      </Heading>
      <Text fontSize="lg">
        Height: <strong>{(height * 0.328084).toFixed(2)} ft</strong>
      </Text>
      <Text fontSize="lg">
        Weight: <strong>{(weight * 0.220462).toFixed(2)} lbs</strong>
      </Text>
      <Divider mt="0.8rem" />
      {stats.map((stat) => {
        const {
          base_stat,
          stat: { name },
        } = stat;
        return (
          <Box key={name}>
            <Text
              fontSize="lg"
              textTransform="capitalize"
              fontWeight="bold"
              key={name}
            >
              {name}
            </Text>
            <Progress colorScheme="green" size="lg" value={base_stat} />
          </Box>
        );
      })}
      <Divider mt="0.8rem" />
      <Heading as="h2" size="md">
        Moves:
      </Heading>
      <SimpleGrid columns={[3, null, 4]} spacing="1rem">
        {moves.slice(0, movesToDisplay).map((move) => (
          <Move move={move} />
        ))}
      </SimpleGrid>
      <Box textAlign="center">
        <Button colorScheme="teal" variant="ghost" onClick={handleClick}>
          {showAllMoves ? "Show less" : "Show more"}
        </Button>
      </Box>
    </Box>
  );
};

export default Pokemon;
