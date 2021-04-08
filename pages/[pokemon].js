import React from "react";
import Pokemon from "../components/Pokemon";
import { Container } from "@chakra-ui/react";
import Head from "next/head";
import { getPokemonByName, getPokemonList } from "../api/pokemonApi";

const PokemonPage = ({ pokemon }) => {
  return (
    <>
      <Head>
        <title>Pokemon App</title>
        <meta name="description" content={`Description of ${pokemon.name}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <Pokemon pokemon={pokemon} />
        </Container>
      </main>

      <footer></footer>
    </>
  );
};

export async function getStaticPaths() {
  const pokemons = await getPokemonList(0, 1118);

  const paths = pokemons.results.map((pokemon) => ({
    params: { pokemon: pokemon.name },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const pokemon = await getPokemonByName(params.pokemon);

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
