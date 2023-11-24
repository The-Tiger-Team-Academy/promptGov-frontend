"use client";


import Image from 'next/image'
import { Roboto } from 'next/font/google'
import Button from '@mui/material/Button';
import styles from './login.module.css'
import { redirect } from "next/navigation";
import { useSession, signIn } from "next-auth/react";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})


export default function LoginPage() {
  const { data: session } = useSession();
  if (session) {
    redirect("@");
  }

  return (

    <div className={styles.body} >
      <div style={{ zIndex: -1, position: 'fixed', width: '55rem', height: '39rem', marginLeft: '-1rem', marginTop: '6.4rem' }}>
        <Image
          src='/img/runs_on_paper.jpg'
          alt=''
          objectFit='cover'
          layout='fill'
        />
      </div>

      <div style={{ zIndex: -1, position: 'fixed', width: '28rem', height: '25rem', marginLeft: '92rem', marginTop: '-22rem' }}>
        <Image
          src='/img/Vector.png'
          alt=''
          layout='fill'
          objectFit=''
        />
      </div>

      <div className={styles.container_text}>
        <main className={roboto.className}></main>
        <Image
          src='/img/Vector_logo.png'
          alt=''
          width={62}
          height={63}
        />
        <div className={styles.main_text}>Welcome!</div>
        <div className={styles.text_content}>เว็บที่ช่วยให้คุณสร้างเอกสารราชการได้ง่ายๆ เพียงไม่กี่คลิก 
        ประหยัดเวลาและเอกสารของคุณจะดูเป็นมืออาชีพมากขึ้น!</div>
        <Button variant="contained" className={styles.buttonLogin}  onClick={() => signIn("google")}>Sign in with Google</Button>
      </div>
    </div>
  )
}


