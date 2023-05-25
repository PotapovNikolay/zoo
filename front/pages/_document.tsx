import { Html, Head, Main, NextScript } from "next/document";
import { nunito } from "./_app";

export default function Document() {
  return (
      <Html lang="ru" className={`${nunito.className} text-white `}>
          <Head />
          <body >
              <Main />
              <NextScript />
          </body>
      </Html>
  );
}
