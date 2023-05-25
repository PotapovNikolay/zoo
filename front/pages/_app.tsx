import { Layout } from "@components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Nunito } from "@next/font/google";


export const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  variable: "--font-nunito",
});

export default function App({ Component, pageProps }: AppProps) {


  return (
    <Layout>
      <>
        
        <Component {...pageProps} />
      </>
    </Layout>
  );
}
