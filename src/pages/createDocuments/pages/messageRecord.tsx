import React from "react";
import { CssBaseline, Box, Grid, Container, TextField, Stack, Button, } from "@mui/material";
import { inside, main, marginTop, pattern2, sincerely, } from "@/styles/approval.style";
import { IMAGE_APPROVAL } from "./constans";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CreatePages = () => {
  const { path, width, height } = IMAGE_APPROVAL.MESSAGE;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={main}>
          <Box sx={inside}>
            <Grid container>
              <Grid xs={4}>
                <img src={path} alt="message" width={width} height={height} />
              </Grid>
              <Grid xs={4} container>
                <p>บันทึกข้อความ</p>
                <TextField
                  label="สถาบัน"
                  id="outlined-size-small"
                  defaultValue="มหาวิทยาลัยเทคโนโลยีสุรนารี"
                  size="small"
                />
              </Grid>
              <Grid xs={4} container></Grid>
              <Grid xs={6} sx={marginTop} container>
                <TextField
                  label="หน่วยงาน"
                  id="outlined-size-small"
                  defaultValue="หน่วยงาน"
                  size="small"
                />
              </Grid>
              <Grid xs={3} sx={marginTop} container>
                <TextField
                  label="โทร"
                  id="outlined-size-small"
                  defaultValue="โทร"
                  size="small"
                />
              </Grid>
              <Grid xs={3} sx={marginTop} container>
                <TextField
                  label="โทรสาร"
                  id="outlined-size-small"
                  defaultValue="โทรสาร"
                  size="small"
                />
              </Grid>
              <Grid xs={4} sx={marginTop} container>
                <TextField
                  label="ที่"
                  id="outlined-size-small"
                  defaultValue="ที่"
                  size="small"
                />
              </Grid>
              <Grid xs={1} sx={marginTop} container></Grid>
              <Grid xs={7} sx={marginTop} container>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label={"วัน/เดือน/ปี"}
                    views={["year", "month", "day"]}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid xs={12} sx={marginTop} container>
                <TextField
                  label="เรื่อง"
                  id="outlined-size-small"
                  defaultValue="เรื่อง"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid
                xs={12}
                sx={{
                  marginTop: "10px",
                  backgroundColor: "black",
                  width: "100%",
                  height: "1px",
                }}
                container
              ></Grid>
              <Grid xs={5} sx={marginTop} container>
                <TextField
                  label="เรียน"
                  id="outlined-size-small"
                  defaultValue="เรียน"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid xs={12} sx={marginTop} container>
                <TextField
                  label="เนื้อหา"
                  id="outlined-size-small"
                  defaultValue=""
                  fullWidth
                  size="small"
                  multiline
                  rows={5}
                />
              </Grid>

              <Grid xs={4} container></Grid>
              <Grid xs={4} sx={marginTop} container>
                <TextField
                  label="จึงเรียนมาเพื่อโปรดทราบ"
                  id="outlined-size-small"
                  defaultValue="จึงเรียนมาเพื่อโปรดทราบ"
                  size="small"
                />
              </Grid>
              <Grid xs={4} container></Grid>
              <Grid xs={12} sx={sincerely} container>
                <Box>
                  <TextField
                    label="ชื่อ-นามสกุล"
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid xs={12} sx={pattern2} container>
                <Box>
                  <TextField
                    label="ตำแหน่ง"
                    id="outlined-size-small"
                    defaultValue="ตำแหน่ง"
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid xs={12} sx={pattern2} container>
                <TextField
                  label="หน่วยงาน"
                  id="outlined-size-small"
                  defaultValue="หน่วยงาน"
                  size="small"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="success">
            Dowload
          </Button>
          <Button variant="contained">Generate Content</Button>
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default CreatePages;
