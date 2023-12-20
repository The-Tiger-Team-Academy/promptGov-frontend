import React from 'react';
import { CssBaseline, Box, Grid, Container, TextField, Button, Stack } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { inside, main, pattern, marginTop } from '../../../styles/approval.style';
import approvalConst from '../../../module/createDocument/constans';

const Approvalrequest = () => {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={main} >
          <Box sx={inside}>
            <Grid container >
              <Grid  sx={pattern} container >
                <TextField
                  label="ที่"
                  id="outlined1"
                  defaultValue="ที่"
                  size="small"
                />
              </Grid>

              <Grid  sx={pattern} container>
              <img src={approvalConst.emblemLogo} alt="Logo" width={approvalConst.sutLogoWidth} height={approvalConst.sutLogohight} />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label={'วัน/เดือน/ปี'}
                    views={['year', 'month', 'day']}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid  container>
                <TextField
                  id="outlined3"
                  label="ที่อยู่"
                  multiline
                  rows={3}
                  defaultValue=""
                />
              </Grid>

              <Grid  container sx={marginTop} >
                <TextField
                  label="เรียน"
                  id="outlined4"
                  defaultValue="เรียน"
                  size='small'
                />
              </Grid>

              <Grid  ></Grid>
              <Grid  sx={marginTop} container>
                <TextField
                  label="เรื่อง"
                  id="outlined5"
                  defaultValue="เรื่อง"
                  size='small'
                />
              </Grid>

              <Grid  sx={marginTop} container>
                <TextField
                  label="ย่อหน้าที่1"
                  id="outlined6"
                  fullWidth
                  size='small'
                  multiline
                  rows={4}
                />
              </Grid>

              <Grid sx={marginTop} container>
                <TextField
                  label="สรุป"
                  id="outlined8"
                  defaultValue=""
                  fullWidth
                  size='small'
                  multiline
                  rows={2}
                />
              </Grid>

              <Grid ></Grid>
              <Grid  sx={marginTop} container>
                <TextField margin="normal"
                  label="จึงเรียนมาเพื่อโปรดทราบ"
                  id="outlined9"
                  defaultValue="จึงเรียนมาเพื่อโปรดทราบ"
                  size="small"
                  fullWidth
                />
              </Grid>

              <Grid >
                <TextField
                  label="หน่วยงาน"
                  id="outlined1.2"
                  defaultValue="หน่วยงาน"
                  size="small"
                />
              </Grid>
              <Grid ></Grid>

              <Grid >
                <TextField
                  label="โทร"
                  id="outlined-size-small"
                  defaultValue="โทร"
                  size="small"
                />
              </Grid>
              <Grid ></Grid>
              <Grid  container
              >
                <TextField
                  label="ขอแสดงความนับถือ"
                  id="outlined1.1"
                  defaultValue="ขอแสดงความนับถือ"
                  size="small"
                />
              </Grid>

              <Grid >
                <TextField
                  label="โทรสาร"
                  id="outlined1.3"
                  defaultValue="โทรสาร"
                  size="small"

                />
              </Grid>
              <Grid ></Grid>

              <Grid >
                <TextField
                  label="ประสานงาน"
                  id="outlined1.4"
                  defaultValue="ประสานงาน"
                  size="small"
                />
              </Grid>
              <Grid ></Grid>
              <Grid  container>
                <TextField
                  label="ชื่อ-นามสกุล"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                />
              </Grid>

              <Grid >
                <TextField
                  label="โทรศัพท์มือถือ"
                  id="outlined1.5"
                  defaultValue="โทรศัพท์มือถือ"
                  size="small"
                />
              </Grid>
              <Grid ></Grid>
              <Grid  container>
                <TextField
                  label="ตำแหน่ง"
                  id="outlined1.7"
                  defaultValue="ตำแหน่ง"
                  size="small"
                />
              </Grid>

              <Grid ></Grid>
              <Grid  container>
                <TextField
                  label="หน่วยงาน"
                  id="outlined1.7"
                  defaultValue="หน่วยงาน"
                  size="small"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="success">Dowload</Button>
          <Button variant='contained'>Generate Content</Button>
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default Approvalrequest;