// pages/_app.tsx
import React from "react";
import { AppProps } from "next/app";
import RootLayout from "../app/root";
import AppBar from "../common/appBar";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const open = true;
  return (
 <RootLayout>
      <SessionProvider>
        <AppBar open={open} router={router} />
        <Component {...pageProps} />
      </SessionProvider>
    </RootLayout>
  );
}


export default MyApp;