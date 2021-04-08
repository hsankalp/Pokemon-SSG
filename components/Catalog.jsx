import React, { useState, useEffect } from "react";
import { Box, Heading, Link, SimpleGrid, Button } from "@chakra-ui/react";
import Search from "./Search";
import { getPokemonList } from "../api/pokemonApi";

const Catalog = ({ pokemons, limit }) => {
  const [pokemonList, setPokemonList] = useState(pokemons.results);
  const [next, setNext] = useState(pokemons.next);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const updated = pokemons.results.filter((pokemon) =>
      pokemon.name.includes(searchText)
    );
    setPokemonList(updated);
  }, [searchText]);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const handleClick = async () => {
    const data = await getPokemonList(pokemonList.length, limit);
    setPokemonList([...pokemonList, ...data.results]);
    setNext(data.next);
  };

  return (
    <Box m="1rem">
      <Heading as="h3" size="lg">
        Pokemons
      </Heading>
      <Box mt="1rem">
        <Search onSearch={handleSearch} />
      </Box>
      <SimpleGrid columns={[2, null, 3]} spacing="1rem" my="1rem">
        {pokemonList.map(({ name }) => {
          return (
            <Link href={name} key={name} _hover={{ textDecoration: "none" }}>
              <Box
                backgroundColor="green.100"
                p="1rem"
                minHeight="75px"
                display="grid"
                placeItems="center"
                borderRadius="5px"
              >
                <Heading
                  as="h4"
                  size="sm"
                  textTransform="capitalize"
                  textAlign="center"
                  wordBreak="break-all"
                >
                  {name}
                </Heading>
              </Box>
            </Link>
          );
        })}
      </SimpleGrid>
      {next && (
        <Box textAlign="center" my="1rem">
          <Button
            colorScheme="teal"
            variant="outline"
            size="md"
            height="40px"
            width="200px"
            border="2px"
            onClick={handleClick}
          >
            Load More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Catalog;
