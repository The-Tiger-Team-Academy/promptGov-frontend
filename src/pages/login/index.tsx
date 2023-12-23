"use client";
import React from "react";
import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box, Grid, Paper, Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import 'animate.css';
import loginHook from '../../module/login/hook/login.hook';
import LoginStylePage from "../../module/login/login.style";
import useLoginStyles from "../../module/login/login.constants";




export default function LoginPage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const style = LoginStylePage
  const { login,img } = loginHook();
  const imageStylePage = useLoginStyles();
  const { boxContainer, gridItem, imageStyles} = imageStylePage;

  return (
    <Box sx={boxContainer(isSmallScreen)}>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={gridItem(isSmallScreen, imageStyles)} />
            <Box sx={style.innerBoxStyles}>
              <Paper elevation={0} sx={style.loginFormStyles}  >
                <Grid container direction="column" alignItems="center" spacing={2} >
                  <Grid item >
                    <Box
                      className="animate__animated animate__fadeInRight"
                      sx={style.logoBoxStyles} />
                  </Grid>
                  <Grid item>
                    <Typography variant='inherit' sx={style.typographyStyles}>เว็บที่ช่วยให้คุณสร้างเอกสารราชการได้ง่ายๆ เพียงไม่กี่คลิก
                      ประหยัดเวลาและเอกสารของคุณจะดูเป็นมืออาชีพมากขึ้น!✨</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      startIcon={<GoogleIcon />}
                      onClick={login}
                      fullWidth
                      sx={style.buttonStyles}

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