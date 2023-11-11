
'use client'
import AppBar from '@/common/appBar'
import useSidbarHooks from '@/common/sideBar/sidbar.hooks';
import SideBar from '@/common/sideBar';

export default function Home() {
  const { open, handleDrawerToggle } = useSidbarHooks();

  
  return (
    <main>
            <AppBar open={open} handleDrawerToggle={handleDrawerToggle} />
            <SideBar open={open} handleDrawerToggle={handleDrawerToggle} />
    </main>
  )
}
