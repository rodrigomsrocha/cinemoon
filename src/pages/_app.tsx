import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import React from "react";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import { InfoBar } from "./components/InfoBar";
import { Layout } from "./components/Layout";
import { Sidebar } from "./components/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Layout>
          <Sidebar />
          <Component {...pageProps} />
          <React.Suspense fallback={<h1>loading...</h1>}>
            <InfoBar />
          </React.Suspense>
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
