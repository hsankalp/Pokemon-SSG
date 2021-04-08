import React from "react";
import Pokemon from "../components/Pokemon";
import { Container } from "@chakra-ui/react";
import Head from "next/head";

const PokemonPage = ({ pokemon }) => {
  return (
    <Container>
      <Head>
        <title>Pokemon App</title>
        <meta name="description" content={`Description of %${pokemon.name}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Pokemon pokemon={pokemon} />
      </main>

      <footer></footer>
    </Container>
  );
};

export async function getStaticPaths() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const pokemons = await response.json();

  const paths = pokemons.results.map((pokemon) => ({
    params: { pokemon: pokemon.name },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemon}/`
  );
  const pokemon = await response.json();

  if (!pokemon) {
    return {
      notFound: true,
    };
  }

  return {
    props: { pokemon },
  };
}

export default PokemonPage;
