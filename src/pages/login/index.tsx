"use client";
// import styles from "./login.module.css";
import { Box, Button, CardContent, Container, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import signInWithGoogle from "@/module/auth/services/signInWithGoogle";
import { useRouter } from "next/router";
import axios from "axios";
import GoogleIcon from '@mui/icons-material/Google';
import { useTheme } from '@mui/system';
import React, { useState, useEffect } from "react";

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
    // transform: isSmallScreen ? 'rotate(0)' : 'rotate(20.666deg)',
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
      if (result) {
        // const user: IUser = result.user;
        setName(result.user.displayName || ''); // Use conditional operator to handle null value
        setEmail(result.user.email || ''); // Use conditional operator to handle null value
        setImage(result.user.photoURL || ''); // Use conditional operator to handle null value
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
                padding: 4,
                borderRadius: 8,
                boxShadow: 4,
                zIndex: 2,
                mt: isSmallScreen ? 2 : 0,
              }}
            >

              <Paper elevation={0} style={classes.loginForm}>
                <Grid container direction="column" alignItems="center" spacing={2}>
                  <Grid item>
                    <Typography variant="h4" style={classes.kanitFont}>LOGO</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h3" style={classes.kanitFont} sx={{ color: '#344563' }}>PromptGov</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant='inherit' style={classes.kanitFont} sx={{ textAlign: 'center' }}>เว็บที่ช่วยให้คุณสร้างเอกสารราชการได้ง่ายๆ เพียงไม่กี่คลิก
                      ประหยัดเวลาและเอกสารของคุณจะดูเป็นมืออาชีพมากขึ้น!</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      style={classes.googleButton}
                      startIcon={<GoogleIcon />}
                      onClick={login}
                      fullWidth
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
