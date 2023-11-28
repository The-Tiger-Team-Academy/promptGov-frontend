"use client";
import { Roboto } from "next/font/google";
// import styles from "./login.module.css";
import Image from "next/image";
import Button from "@mui/material/Button";
import { Container, Typography } from "@mui/material";
import { LocaleRouteNormalizer } from "next/dist/server/future/normalizers/locale-route-normalizer";
import signInWithGoogle from "@/module/payment/services/signInWithGoogle";
import { NextRouter, useRouter } from "next/router";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';




const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const defaultTheme = createTheme();

export default function LoginPage() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [img, setImage] = useState<string>('');

  const router = useRouter();

  const postData = async () => {
    try {
      const response = await axios.post('https://fastapigoogle.thetigerteamacademy.net/votes', {
        name,
        email,
        img
      });
      console.log(response.data);
      router.push('./createDocuments/paperflow');
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const login = async () => {
    try {
      const result = await signInWithGoogle();
      if (result && result.user) {
        console.log(result.user.email);
        router.push('./payment')
        alert("Login success")
      } else {
        console.log("No user data available");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };



  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh', backgroundColor: '#fefefe' }}>
        <CssBaseline />
        <Grid
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://i.postimg.cc/8cBYYj79/runs-on-paper.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '85%',
            backgroundPosition: '-50% 100%',
          }}
        />
        <Grid
          xs={12}
          sm={8}
          md={5}
          sx={{
            backgroundImage: 'url(https://i.postimg.cc/50dT7rBk/Vector.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '60%',
            backgroundPosition: '125% -20%',
          }} />
      </Grid>
    </ThemeProvider>
  );
}
