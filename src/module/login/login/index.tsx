"use client";

import { Container, Typography } from "@mui/material";
import { Box, Grid, Paper, Button, useMediaQuery } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useTheme } from '@mui/system';
import 'animate.css';
import loginHook from './hook/login.hook';
import {
  boxContainerStyles,
  gridItemStyles,
  innerBoxStyles,
  logoBoxStyles,
  typographyStyles,
  buttonStyles
} from './login.style'

export default function LoginPage() {
  const { login } = loginHook();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const imageStyles = {
    width: isSmallScreen ? '80vw' : '392px',
    height: isSmallScreen ? 'auto' : '367px',
    flexShrink: 0,
  };

  return (
    <Box sx={boxContainerStyles(isSmallScreen)}>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={gridItemStyles(isSmallScreen, imageStyles)} />
            <Box sx={innerBoxStyles}>
              <Paper elevation={0}  >
                <Grid container direction="column" alignItems="center" spacing={2} >
                  <Grid item >
                    <Box
                      className="animate__animated animate__fadeInRight"
                      sx={logoBoxStyles} />
                  </Grid>
                  <Grid item>
                    <Typography variant='inherit' sx={typographyStyles}>เว็บที่ช่วยให้คุณสร้างเอกสารราชการได้ง่ายๆ เพียงไม่กี่คลิก
                      ประหยัดเวลาและเอกสารของคุณจะดูเป็นมืออาชีพมากขึ้น!✨</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      startIcon={<GoogleIcon />}
                      onClick={login}
                      fullWidth
                      sx={buttonStyles}
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
