"use client";
import React from "react";
import { CssBaseline, Box, Grid, Container, TextField } from "@mui/material";
import Image from "next/image";
import {  inside,  main,  marginTop,  pattern2,  sincerely, } from "@/styles/approval.style";

const CreatePages = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={main}>
          <Box sx={inside}>
            <Grid container>
              <Grid xs={4}>
                <Image src="/img/image 7.png" alt={""} width={60} height={70} />
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
                  defaultValue=""
                  size="small"
                />
              </Grid>
              <Grid xs={3} sx={marginTop} container>
                <TextField
                  label="โทร"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                />
              </Grid>
              <Grid xs={3} sx={marginTop} container>
                <TextField
                  label="โทรสาร"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                />
              </Grid>
              <Grid xs={4} sx={marginTop} container>
                <TextField
                  label="ที่"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                />
              </Grid>
              <Grid xs={1} sx={marginTop} container></Grid>
              <Grid xs={7} sx={marginTop} container>
                <Grid xs={4} container>
                  <TextField
                    label="วัน"
                    id="outlined-size-small"
                    defaultValue="12"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid xs={4} container>
                  <TextField
                    label="เดือน"
                    id="outlined-size-small"
                    defaultValue="ธันวาคม"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid xs={4} container>
                  <TextField
                    label="ปี"
                    id="outlined-size-small"
                    defaultValue="2566"
                    fullWidth
                    size="small"
                  />
                </Grid>
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
                  defaultValue=""
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
                    defaultValue=""
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid xs={12} sx={pattern2} container>
                <TextField
                  label="หน่วยงาน"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <button>Dowload</button>
        <div>
          <button>Generate Content</button>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default CreatePages;
