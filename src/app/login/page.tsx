"use client";
import Image from "next/image";
import { Roboto } from "next/font/google";
import Button from "@mui/material/Button";
import styles from "./login.module.css";
import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";
// import Grid from "@mui/material/Grid";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
// import styles from '@/common/appBar/appbar.style';
// import './login.module.css';

export default function LoginPage() {
  const { data: session } = useSession();
  if (session) {
    redirect("/");
  }

  return (
    <Grid container spacing={0} sx={{ flexGrow: 1 }}>
      <Grid
        item
        xs={4}
        display="flex"
        justifyContent="end"
        alignItems="end"
        md={12}
        mdOffset={0}
      >
        <Grid item xs={12}>
          <Image
            src="/img/Vector.png"
            alt=""
            objectFit="cover"
            width={200}
            height={200}
          />
        </Grid>
      </Grid>
      <Grid
        item
        xs={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
        md={12}
        mdOffset={0}
      >
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
      <Grid
        display="flex"
        justifyContent="start"
        alignItems="end"
        md={12}
        mdOffset={0}
        className={styles.backgroundImage}
      >
          {/* <Image
            src="/img/runs_on_paper.jpg"
            alt="Description of Image"
            width={500}
            height={300} 
          /> */}
      </Grid>
    </Grid>
  );
}

// const LoginPage = () => {
//     return (
//         <div>this is login page</div>
//     )

// }

// export default LoginPage
