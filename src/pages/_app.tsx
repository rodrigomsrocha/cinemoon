import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { Layout } from "./components/Layout";
import { Sidebar } from "./components/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Sidebar />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
