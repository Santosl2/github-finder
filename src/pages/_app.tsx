/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";

import type { AppProps } from "next/app";

import store from "@/store/GitHubUser/store";
import theme from "@/themes/DefaultTheme";
import { ChakraProvider } from "@chakra-ui/react";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>

        <ReactQueryDevtools />
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
