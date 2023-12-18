
// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import RootLayout from '@/app/root';
import AppBar from '@/common/appBar';
import { SessionProvider } from 'next-auth/react';
import AppBarComponent from '@/common/appBar';
import { useRouter } from 'next/router';
import useSidbarHooks from '@/common/sideBar/sidbar.hooks'



function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter(); 
  const open = true;
  return (
 <RootLayout>
      <SessionProvider>
        <AppBarComponent open={open} router={router} /> 
        <Component {...pageProps} />
      </SessionProvider>
    </RootLayout>
  );
}


export default MyApp;
