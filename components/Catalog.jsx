import React, { useState, useEffect } from "react";
import { Box, Heading, Link, SimpleGrid } from "@chakra-ui/react";
import Search from "./Search";

const Catalog = ({ pokemons }) => {
  const [pokemonList, setPokemonList] = useState(pokemons.results);
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
                border="1px solid #000"
                p="1rem"
                minHeight="100px"
                display="grid"
                placeItems="center"
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
    </Box>
  );
};

export default Catalog;
