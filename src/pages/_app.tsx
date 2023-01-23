import { globalStyles } from "@/styles/global";
import { Container, Header } from "@/styles/pages/app";
import type { AppProps } from "next/app";
import imgLogo from "../assets/logo.svg";

import Image from "next/image";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={imgLogo} alt="Logo" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
