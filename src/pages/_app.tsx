
// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import RootLayout from '@/app/root';
import useSidbarHooks from '@/common/sideBar/sidbar.hooks';
import AppBar from '@/common/appBar';
import SideBar from '@/common/sideBar';
import Login from '@/pages/login'
import { SessionProvider } from 'next-auth/react';


function MyApp({ Component, pageProps }: AppProps) {
  const { open, handleDrawerToggle } = useSidbarHooks();
  return (
    <RootLayout>
      <SessionProvider>
        <AppBar open={open} handleDrawerToggle={handleDrawerToggle} />
        <SideBar open={open} handleDrawerToggle={handleDrawerToggle} />
        <Component {...pageProps} />
      </SessionProvider>
    </RootLayout>
  );
}

export default MyApp;
