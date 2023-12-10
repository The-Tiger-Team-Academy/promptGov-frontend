import React, { useEffect, useState } from 'react';
import { CssBaseline, Box, Grid, Container, TextField, CircularProgress } from "@mui/material";
import { main } from '../../../styles/approval.style';



const Leaverequest = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" >
        <Box sx={main}>
          <Grid container>
            <Grid xs={4}
              container
              direction="column"
              justifyContent="center"
              alignItems="center">
              <TextField
                label="ใบลาป่วย/ใบลากิจ"
                id="outlined1"
                defaultValue=""
                size="small"
              />
            </Grid>

            <Grid xs={6}
              sx={{ marginTop: '10px' }}
              container
              direction="column"
              justifyContent="start"
              alignItems="start">
              <TextField
                label="วันที่"
                id="outlined2"
                defaultValue=""
                size="small"
              />
            </Grid>

            <Grid xs={6}
              sx={{ marginTop: '10px' }}
              container
              direction="column"
              justifyContent="center"
              alignItems="center">
              <TextField
                label="เรียน"
                id="outlined3"
                defaultValue="เรียน"
                fullWidth
                size='small'
              />
            </Grid>
            <Grid xs={6} ></Grid>
            <Grid xs={6}
              sx={{ marginTop: '10px' }}
              container
              direction="column"
              justifyContent="center"
              alignItems="center">
              <TextField
                label="เรื่อง"
                id="outlined4"
                defaultValue="เรื่อง"
                size='small'
              />
            </Grid>

            <Grid xs={12}
              sx={{ marginTop: '10px' }}
              container
              direction="column"
              justifyContent="center"
              alignItems="center">
              <TextField
                label="เนื้อหา"
                id="outlined5"
                defaultValue=""
                fullWidth
                size='small'
                multiline
                rows={5}
              />
            </Grid>

            <Grid xs={6}
              sx={{ marginTop: '10px' }}
              container
              direction="column"
              justifyContent="center"
              alignItems="center">
              <TextField
                label="จึงเรียนมาเพื่อโปรดทราบ"
                id="outlined6"
                defaultValue="จึงเรียนมาเพื่อโปรดทราบ"
                size="small"
              />
            </Grid>

            <Grid xs={4}
              sx={{ marginTop: '10px' }}
              container
              direction="column"
              justifyContent="center"
              alignItems="center">
              <TextField
                label="ขอแสดงความนับถือ"
                id="outlined7"
                defaultValue=""
                size="small"
              />
            </Grid>

            <Grid xs={12}
              sx={{ marginTop: '10px', marginRight: '5px' }}
              container
              direction="column"
              justifyContent="center"
              alignItems="end">
              <Box sx={{ bgcolor: 'white', width: '15vh', marginRight: '70px' }} >
                <TextField
                  label="ชื่อ-นามสกุล"
                  id="outlined8"
                  defaultValue=""
                  size="small"
                />
              </Box>
            </Grid>

            <Grid xs={12}
              sx={{ marginTop: '0px', marginRight: '20px' }}
              container
              direction="column"
              justifyContent="center"
              alignItems="end">
              <Box sx={{ bgcolor: 'white', width: '20vh', marginRight: '32px' }} >
                <TextField
                  label="ตำแหน่ง"
                  id="outlined9"
                  defaultValue=""
                  size="small"
                />
              </Box>
            </Grid>

            <Grid xs={12}
              sx={{ marginTop: '0px', marginRight: '20px' }}
              container
              direction="column"
              justifyContent="center"
              alignItems="end">
              <TextField
                label="หน่วยงาน"
                id="outlined1.1"
                defaultValue=""
                size="small"
              />
            </Grid>

            <button>Dowload</button>
            <div>
              <button>Generate Content</button>
            </div>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Leaverequest;