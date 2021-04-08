import React from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Search = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
      <Input
        type="text"
        placeholder="Search pokemons"
        onChange={handleChange}
      />
    </InputGroup>
  );
};

export default Search;
