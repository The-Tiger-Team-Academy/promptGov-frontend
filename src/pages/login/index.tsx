import Image from 'next/image'
import { Roboto } from 'next/font/google'
import Button from '@mui/material/Button';
import styles from './login.module.css'

// import styles from '@/common/appBar/appbar.style';
// import './login.module.css';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})


export default function LoginPage() {


  return (
    <div className={styles.body}>
      <div style={{ zIndex: -1, position: 'fixed', width: '60vw', height: '60vh', right: '50%', top: '62%' }}>
        <Image
          src='/img/runs_on_paper.jpg'
          alt=''
          objectFit='cover'
          layout='fill'
        />
      </div>

      <div style={{ zIndex: -1, position: 'fixed', width: '35vw', height: '53vh', bottom: '70%', left: '128%' }}>
        <Image
          src='/img/Vector.png'
          alt=''
          layout='fill'
          objectFit='cover'
        />
      </div>

      <div style={{ zIndex: -1, position: 'fixed', width: '15vw', height: '53vh', top: '-40%', left: '7%' }}>
        <Image
          src='/img/Vector_logo.png'
          alt=''
          width={62}
          height={63}
        />
      </div>

      <div>
        <main className={roboto.className}></main>
        <div className={styles.main_text}>Welcome!</div>
        <div className={styles.text_content}>Lorem ipsum dolor sit amet consectetur.</div>
        <Button variant="contained" className={styles.buttonLogin}>Sign in with Google</Button>
      </div>

    </div>
  )
}


// const LoginPage = () => {
//     return (
//         <div>this is login page</div>
//     )

// }

// export default LoginPage