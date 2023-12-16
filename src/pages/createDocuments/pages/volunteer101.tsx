import { inside, main, margin, marginTop, pattern } from "@/styles/approval.style";
import { Box, CssBaseline, Container, Grid, TextField, Typography, } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, } from "@mui/material";
import React from "react";

const Volunteer = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={main}>
          <Box sx={inside}>
            <Grid container>
              <Grid xs={12} container sx={pattern}>
                <p>แบบฟอร์ม</p>
              </Grid>

              <Grid xs={6}>
                <Typography variant="body2" gutterBottom>
                  รายงานการดำเนินกิจกรรมจิตอาสา
                </Typography>
              </Grid>
              <Grid xs={3}>
                <TextField
                  label="ชื่อคณะ"
                  id="outlined1"
                  defaultValue=""
                  size="small"
                />
              </Grid>
              <Grid xs={3}>
                <TextField
                  label="ปีการศึกษา"
                  id="outlined1"
                  defaultValue="ปีการศึกษา"
                  size="small"
                />
              </Grid>

              <Grid xs={6} sx={marginTop}>
                <TextField
                  label="ชื่อ-นามสกุล"
                  id="outlined8"
                  defaultValue=""
                  size="small"
                />
              </Grid>
              <Grid xs={6} sx={marginTop}>
                <TextField
                  label="เลขทะเบียน"
                  id="outlined8"
                  defaultValue="เลขทะเบียน"
                  size="small"
                />
              </Grid>

              <Typography variant="body2" gutterBottom sx={margin}>
                ข้าพเจ้าได้ดำเนินกิจกรรมจิตอาสา โดยแสดงรายละเอียดดังต่อไปนี้
              </Typography>

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, minHeight: 400 }}>
                  <TableHead>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
                    >
                      <TableCell>ลำดับที่</TableCell>
                      <TableCell align="right">ชื่อกิจกรรม / โครงการ</TableCell>
                      <TableCell align="right">รายละเอียด</TableCell>
                      <TableCell align="right">
                        เจ้าของโครงการ / กิจกรรม
                      </TableCell>
                      <TableCell align="right">หมายเหตุ</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
                    >
                      <TableCell component="th" scope="row">
                        {/* Data for สำนักงาน */}
                      </TableCell>
                      <TableCell align="right">
                        {/* Data for จุดที่ตั้งหน้าจอ / โครงการ */}
                      </TableCell>
                      <TableCell align="right">
                        {/* Data for รายละเอียด */}
                      </TableCell>
                      <TableCell align="right">
                        {/* Data for เจ้าหน้าที่โครงการ / คำชี้แจง */}
                      </TableCell>
                      <TableCell align="right">
                        {/* Data for หมายเหตุ */}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <Grid xs={2}>
                <Typography variant="caption" gutterBottom>
                  หมายเหตุ
                </Typography>
              </Grid>

              <Grid xs={10}>
                <Typography variant="caption" gutterBottom>
                  1. ต้องดำเนินจิตอาสารวมไม่น้อยกว่า 60 ชั่วโมง ต่อตลอดหลักสูตร
                </Typography>
              </Grid>

              <Grid xs={2}></Grid>
              <Grid xs={10}>
                <Typography variant="caption" gutterBottom>
                  2. ให้แสดงหลักฐาน เอกสาร
                  รูปภาพหรือสิ่งอื่นใดที่แสดงถึงการดำเนินกิจกรรมจิตอาสานั้นมาด้วย
                </Typography>
              </Grid>

              <Grid xs={2}></Grid>
              <Grid xs={10}>
                <Typography variant="caption" gutterBottom>
                  3. กรณีบริจาคโลหิต 1 ครั้ง นับได้ 3 ชั่วโมง
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Volunteer;
