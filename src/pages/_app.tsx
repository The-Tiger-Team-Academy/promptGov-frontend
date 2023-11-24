// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import RootLayout from '@/app/root';
import useSidbarHooks from '@/common/sideBar/sidbar.hooks';
import AppBar from '@/common/appBar';
import SideBar from '@/common/sideBar';


function MyApp({ Component, pageProps }: AppProps) {
  const { open, handleDrawerToggle } = useSidbarHooks();
  return (
    <RootLayout>
      <AppBar open={open} handleDrawerToggle={handleDrawerToggle} />
      <SideBar open={open} handleDrawerToggle={handleDrawerToggle} />
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
