import React, { useState, useEffect } from "react";
import { Box, Heading, Link } from "@chakra-ui/react";
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
    <div>
      <Heading as="h3" size="lg">
        Pokemons
      </Heading>
      <Search onSearch={handleSearch} />
      {pokemonList.map(({ name }) => {
        return (
          <Link href={name} key={name}>
            <Box border="1px solid #000" p="1rem" my="1rem">
              {name}
            </Box>
          </Link>
        );
      })}
    </div>
  );
};

export default Catalog;
