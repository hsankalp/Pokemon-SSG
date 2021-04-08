import Head from "next/head";
import { Container } from "@chakra-ui/react";
import Catalog from "../components/Catalog";

export default function Home({ pokemons }) {
  return (
    <Container>
      <Head>
        <title>Pokemon App</title>
        <meta name="description" content="List of all the Pokemons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Catalog pokemons={pokemons} />
      </main>

      <footer></footer>
    </Container>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118"
  );
  const pokemons = await response.json();

  if (!pokemons) {
    return {
      notFound: true,
    };
  }

  return {
    props: { pokemons },
  };
}
