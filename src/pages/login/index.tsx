"use client";
// import styles from "./login.module.css";
import {  Container, Typography } from "@mui/material";
import { LocaleRouteNormalizer } from "next/dist/server/future/normalizers/locale-route-normalizer";
import signInWithGoogle from "@/module/payment/services/signInWithGoogle";
import { NextRouter, useRouter } from "next/router";
import { makeStyles } from '@mui/styles'
import axios from "axios";
import { Box, Grid, Paper,  Button,  useMediaQuery } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useTheme } from '@mui/system';
import { useEffect, useState } from "react";
import 'animate.css';



//TODO : should be move to a separate file
const useStyles = () => ({
  root: {
    minHeight: '100vh',
    position: 'relative',
  },
  lowerLeftImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '40%',
    zIndex: -1,
  },
  topRightImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '40%',
    zIndex: -1,
  },
  loginForm: {
    padding: '20px'
  },
  googleButton: {
    backgroundColor: '#4285F4',
    borderRadius: 25,
    width: '16rem',
    height: '3rem',
    color: 'white',
    '&:hover': {
      backgroundColor: '#c1351a',
    },
  },
  kanitFont: {
    fontFamily: 'Kanit, sans-serif',
  },
});

export default function LoginPage() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [img, setImage] = useState<string>('');
  const classes = useStyles();
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const imageStyles = {
    width: isSmallScreen ? '80vw' : '392px',
    height: isSmallScreen ? 'auto' : '367px',
    flexShrink: 0,
  };



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

  useEffect(() => {
    if (name && email && img) {
      postData();
    }
  }, [name, email, img]);


  //TODO : should be move syles to a separate file
  return (
    <Box
      sx={{
        backgroundImage: 'url(https://i.postimg.cc/rsvTfqNR/runs-on-paper-a.png)',
        backgroundPosition: 'bottom left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: isSmallScreen ? 'cover' : 'auto',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',


      }}
    >
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                backgroundImage: 'url(https://i.postimg.cc/mkTCtGHM/Vector.png)',
                backgroundPosition: 'top right',
                backgroundSize: isSmallScreen ? 'cover' : 'auto',
                ...imageStyles,
                backgroundRepeat: 'no-repeat',
                position: 'absolute',
                top: 0,
                right: 0,
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                backgroundColor: '#fff',
                padding: 0,
                borderRadius: 8,
                boxShadow: 0,
                zIndex: 2,
                mt: isSmallScreen ? 2 : 0,
                marginBottom: '15rem'
              }}
            >

              <Paper elevation={0} className={classes.loginForm} >  
                <Grid container direction="column" alignItems="center" spacing={2} >
                  <Grid item >
                    <Box
                      className="animate__animated animate__fadeInRight"
                      sx={{
                        backgroundImage: 'url(https://i.postimg.cc/k41vFCpP/Logo-Prompt-Gov.png)',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative',
                        width: '23rem',
                        height: '5rem',
                        zIndex: 1,
                        backgroundSize: '85%',

                      }} />

                  </Grid>
                  <Grid item>
                    <Typography variant='inherit' className={classes.kanitFont} sx={{ textAlign: 'center', marginTop: '-0.5rem' }}>เว็บที่ช่วยให้คุณสร้างเอกสารราชการได้ง่ายๆ เพียงไม่กี่คลิก
                      ประหยัดเวลาและเอกสารของคุณจะดูเป็นมืออาชีพมากขึ้น!✨</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      style={classes.googleButton}
                      startIcon={<GoogleIcon />}
                      onClick={login}
                      fullWidth
                      sx={{ marginTop: '0.5rem' }}
                    >
                      Login with Google
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>



  );
}
