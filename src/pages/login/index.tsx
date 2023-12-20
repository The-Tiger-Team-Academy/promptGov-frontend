"use client";

import { Container, Typography } from "@mui/material";
import { Box, Grid, Paper, Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import 'animate.css';
import loginHook from '@/module/login/hook/login.hook';
import LoginStylePage from "@/module/login/login.style";
import useLoginStyles from "@/module/login/login.style";



export default function LoginPage() {
  const style = LoginStylePage
  const { login } = loginHook();
  const imageStylePage = useLoginStyles();
  const { boxContainer, gridItem, imageStyles, isSmallScreen } = imageStylePage;


  return (
    <Box sx={boxContainer(isSmallScreen)}>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={gridItem(isSmallScreen, imageStyles)} />
            <Box>
              <Paper elevation={0}>
                <Grid container direction="column" alignItems="center" spacing={2} >
                  <Grid item >
                    <Box
                      className="animate__animated animate__fadeInRight"
                      />
                  </Grid>
                  <Grid item>
                    <Typography variant='inherit'>เว็บที่ช่วยให้คุณสร้างเอกสารราชการได้ง่ายๆ เพียงไม่กี่คลิก
                      ประหยัดเวลาและเอกสารของคุณจะดูเป็นมืออาชีพมากขึ้น!✨</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
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
