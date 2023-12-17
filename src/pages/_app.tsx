
// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import RootLayout from '@/app/root';
import useSidbarHooks from '@/common/sideBar/sidbar.hooks';
import AppBar from '@/common/appBar';
import SideBar from '@/common/sideBar';
import { SessionProvider } from 'next-auth/react';
import AppBarComponent from '@/common/appBar';


function MyApp({ Component, pageProps }: AppProps) {
  const { open, handleDrawerToggle } = useSidbarHooks();
  // const Appbar = AppBarComponent
  return (
 <RootLayout>
      <SessionProvider>
        {/* <Appbar /> */}
        <AppBar open={open} handleDrawerToggle={handleDrawerToggle} />
        {/* <SideBar open={open} handleDrawerToggle={handleDrawerToggle} /> */}
        <Component {...pageProps} />
      </SessionProvider>
    </RootLayout>
  );
}


export default MyApp;
