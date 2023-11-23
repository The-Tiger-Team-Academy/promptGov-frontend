"use client";
import Image from "next/image";
import { Roboto } from "next/font/google";
import Button from "@mui/material/Button";
import styles from "./login.module.css";
import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import Grid from "@mui/material/Grid";
// import styles from '@/common/appBar/appbar.style';
// import './login.module.css';

// const roboto = Roboto({
//   weight: ["400", "700"],
//   subsets: ["latin"],
// });

export default function LoginPage() {
  const { data: session } = useSession();
  if (session) {
    redirect("/");
  }

  return (
    <Grid container spacing={0}>
      <Grid item xs={4} style={{border:'1px solid black'}}>
        <Grid item xs={12}>
          <Image
            src="/img/runs_on_paper.jpg"
            alt="Description of Image"
            width={500} // กำหนดความกว้าง
            height={300} // กำหนดความสูง
          />
        </Grid>

        <Grid item xs={12}>
          <Image
            src="/img/Vector.png"
            alt=""
            objectFit="cover"
            width={62}
            height={63}
          />
        </Grid>
      </Grid>
      <Grid item xs={4} style={{border:'1px solid black'}}>
        <Grid item xs={12}>
          <Image src="/img/Vector_logo.png" alt="" width={62} height={63} />
        </Grid>

        <Grid item xs={12}>
          <div className={styles.main_text}>Welcome!</div>
          <div className={styles.text_content}>
            Lorem ipsum dolor sit amet consectetur.
          </div>
          <Button
            variant="contained"
            className={styles.buttonLogin}
            onClick={() => signIn("google")}
          >
            Sign in with Google
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={4} style={{border:'1px solid black'}}></Grid>
    </Grid>
  );
}

// const LoginPage = () => {
//     return (
//         <div>this is login page</div>
//     )

// }

// export default LoginPage
