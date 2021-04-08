import Head from "next/head";
import { Container } from "@chakra-ui/react";
import Catalog from "../components/Catalog";
import { getPokemonList } from "../api/pokemonApi";

export default function Home({ pokemons, limit }) {
  return (
    <>
      <Head>
        <title>Pokemon App</title>
        <meta name="description" content="List of all the Pokemons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <Catalog pokemons={pokemons} limit={limit} />
        </Container>
      </main>

      <footer></footer>
    </>
  );
}

export async function getStaticProps() {
  const limit = 24;
  const pokemons = await getPokemonList(0, limit);

  if (!pokemons) {
    return {
      notFound: true,
    };
  }

  return {
    props: { pokemons, limit },
  };
}
