
'use client'
import AppBar from '@/common/appBar'
import sidbarHooks from '@/common/sideBar/sidbar.hooks';
import SideBar from '@/common/sideBar';

export default function Home() {
  const { open, handleDrawerToggle } = sidbarHooks();

  
  return (
    <main>
            <AppBar open={open} handleDrawerToggle={handleDrawerToggle} />
            <SideBar open={open} handleDrawerToggle={handleDrawerToggle} />
    </main>
  )
}
