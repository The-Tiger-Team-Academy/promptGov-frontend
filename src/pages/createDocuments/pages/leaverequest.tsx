import React from "react";
import { CssBaseline, Box, Grid, Container, TextField, Stack, Button } from "@mui/material";
import { inside, main, marginTop, pattern, pattern2, sincerely } from "../../../styles/approval.style";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Leaverequest = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={main}>
          <Box sx={inside}>
            <Grid container>
              <Grid xs={12} container sx={pattern}>
                <TextField
                  label="ใบลาป่วย/ใบลากิจ"
                  id="outlined1"
                  defaultValue=""
                  size="small"
                />
              </Grid>

              <Grid xs={6}></Grid>
              <Grid xs={6} sx={marginTop} container>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label={'วัน/เดือน/ปี'}
                    views={['year', 'month', 'day']}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid xs={6} sx={marginTop} container>
                <TextField
                  label="เรียน"
                  id="outlined3"
                  defaultValue="เรียน"
                  size="small"
                />
              </Grid>

              <Grid xs={6}></Grid>
              <Grid xs={6} sx={marginTop} container>
                <TextField
                  label="เรื่อง"
                  id="outlined4"
                  defaultValue="เรื่อง"
                  size="small"
                />
              </Grid>

              <Grid xs={12} sx={marginTop} container>
                <TextField
                  label="เนื้อหา"
                  id="outlined5"
                  defaultValue=""
                  fullWidth
                  size="small"
                  multiline
                  rows={5}
                />
              </Grid>

              <Grid xs={6} sx={marginTop} container>
                <TextField
                  label="จึงเรียนมาเพื่อโปรดทราบ"
                  id="outlined6"
                  defaultValue="จึงเรียนมาเพื่อโปรดทราบ"
                  size="small"
                />
              </Grid>

              <Grid xs={12} container sx={sincerely}>
                <TextField
                  label="ขอแสดงความนับถือ"
                  id="outlined7"
                  defaultValue="ขอแสดงความนับถือ"
                  size="small"
                />
              </Grid>

              <Grid xs={12} container sx={sincerely}>
                <Box>
                  <TextField
                    label="ชื่อ-นามสกุล"
                    id="outlined8"
                    defaultValue=""
                    size="small"
                  />
                </Box>
              </Grid>

              <Grid xs={12} container sx={pattern2}>
                <Box>
                  <TextField margin="dense"
                    label="ตำแหน่ง"
                    id="outlined9"
                    defaultValue="ตำแหน่ง"
                    size="small"
                  />
                </Box>
              </Grid>

              <Grid xs={12} sx={pattern2} container>
                <TextField
                  label="หน่วยงาน"
                  id="outlined1.1"
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

export default Leaverequest;
