import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import React from "react";
import { RecoilRoot } from "recoil";
import { InfoBar } from "../components/InfoBar";
import { LoadingInfobar } from "../components/InfoBar/LoadingInfobar";
import { Layout } from "../components/Layout";
import { Sidebar } from "../components/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Layout>
          <Sidebar />
          <Component {...pageProps} />
          <React.Suspense fallback={<LoadingInfobar />}>
            <InfoBar />
          </React.Suspense>
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
