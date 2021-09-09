import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";

import { createClient, Provider } from "urql";

const client = createClient({
  url: "http://localhost:4000/graphql",
  //   fetchOptions:() => {
  //     const token = "100"
  //     return {
  //         headers: { authorization: token ? `barer ${token}` : ''}
  //     }
  //   }
  fetchOptions: {
    credentials: "include",
  },
});

console.log(client);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
