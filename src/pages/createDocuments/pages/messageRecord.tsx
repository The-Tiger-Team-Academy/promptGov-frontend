"use client";
import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import useGenerate from "@/module/createDocument/hook/useGenerate.hook";
import useMessageRecord from "@/module/createDocument/hook/useMessageRecord.hook";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import { Tooltip } from "@mui/material";

const CreatePages = () => {
  const hook = useMessageRecord();
  const { responsechat, generateDocument, chat, setChat } = useGenerate();
  const [isLoading, setIsLoading] = useState(false);

  const geneRate = () => {
    generateDocument();
    setIsLoading(true);
  };

  useEffect(() => {
    if (responsechat) {
      setIsLoading(false);
      hook.setP1(responsechat);
    }
  }, [responsechat]);

  const gettwoSet = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    // TODO: เดี๋ยวมาแก้
    hook.setStory(e.target.value as string);
    setChat(e.target.value);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "white",
          gap: "5px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "white",
            height: "100vh",
            border: "1px solid black",
            marginTop: "70px",
            padding: "10px",
          }}
        >
          <Box sx={{ bgcolor: "white", height: "97vh", width: "70vh" }}>
            <Grid container>
              <Grid xs={4}>
                <Image src="/img/image 7.png" alt={""} width={60} height={70} />
              </Grid>
              <Grid
                xs={4}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <p>บันทึกข้อความ</p>
                <TextField
                  label="สถาบัน"
                  id="outlined-size-small"
                  defaultValue="มหาวิทยาลัยเทคโนโลยีสุรนารี"
                  size="small"
                  value={hook.Nameuniversity}
                  onChange={(e) => hook.setNameuniversity(e.target.value)}
                />
              </Grid>
              <Grid
                xs={4}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              ></Grid>
              <Grid
                xs={6}
                sx={{ marginTop: "10px" }}
                container
                direction="column"
                justifyContent="start"
                alignItems="start"
              >
                <TextField
                  label="หน่วยงาน"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                  value={hook.Orgra}
                  onChange={(e) => hook.setOrgra(e.target.value)}
                />
              </Grid>
              <Grid
                xs={3}
                sx={{ marginTop: "10px" }}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <TextField
                  label="โทร"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                  value={hook.Tel}
                  onChange={(e) => hook.setTel(e.target.value)}
                />
              </Grid>
              <Grid
                xs={3}
                sx={{ marginTop: "10px" }}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <TextField
                  label="โทรสาร"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                  value={hook.Sal}
                  onChange={(e) => hook.setSal(e.target.value)}
                />
              </Grid>
              <Grid
                xs={4}
                sx={{ marginTop: "10px" }}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <TextField
                  label="ที่"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                  value={Number}
                  onChange={(e) => hook.setNumber(e.target.value)}
                />
              </Grid>
              <Grid
                xs={1}
                sx={{ marginTop: "10px" }}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              ></Grid>
              <Grid
                xs={7}
                sx={{ marginTop: "10px" }}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid
                  xs={4}
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <TextField
                    label="วัน"
                    id="outlined-size-small"
                    defaultValue="12"
                    fullWidth
                    size="small"
                    value={Date}
                    onChange={(e) => hook.setDate(e.target.value)}
                  />
                </Grid>
                <Grid
                  xs={4}
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <TextField
                    label="เดือน"
                    id="outlined-size-small"
                    defaultValue="ธันวาคม"
                    fullWidth
                    size="small"
                    value={hook.Month}
                    onChange={(e) => hook.setMonth(e.target.value)}
                  />
                </Grid>
                <Grid
                  xs={4}
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <TextField
                    label="ปี"
                    id="outlined-size-small"
                    defaultValue="2566"
                    fullWidth
                    size="small"
                    value={hook.Year}
                    onChange={(e) => hook.setYear(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid
                xs={12}
                sx={{ marginTop: "10px" }}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <TextField
                  label="เรื่อง"
                  id="outlined-size-small"
                  defaultValue=""
                  fullWidth
                  size="small"
                  value={chat}
                  onChange={gettwoSet}
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
                direction="column"
                justifyContent="center"
                alignItems="center"
              ></Grid>
              <Grid
                xs={5}
                sx={{ marginTop: "10px" }}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <TextField
                  label="เรียน"
                  id="outlined-size-small"
                  defaultValue=""
                  fullWidth
                  size="small"
                  value={hook.Person}
                  onChange={(e) => hook.setPerson(e.target.value)}
                />
              </Grid>
              <Grid
                xs={12}
                sx={{ marginTop: "10px" }}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <TextField
                  label="เนื้อหา"
                  id="outlined-size-small"
                  defaultValue=""
                  fullWidth
                  size="small"
                  multiline
                  rows={5}
                  value={hook.P1}
                  onChange={(e) => hook.setP1(e.target.value)}
                />
              </Grid>
              {/* เก็บไว้เดี๋ยวมาทำเพิ่ม อีก2 paragraph*/}
              {/* <Grid xs={12}
                sx={{ marginTop: '10px' }}
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
                <TextField
                  label="ย่อหน้าที่2"
                  id="outlined-size-small"
                  defaultValue=""
                  fullWidth
                  size='small'
                  multiline
                  rows={1.5}
                  value={P2} onChange={(e) => setP2(e.target.value)}
                />
              </Grid>
              <Grid xs={12}
                sx={{ marginTop: '10px' }}
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
                <TextField
                  label="ย่อหน้าที่3"
                  id="outlined-size-small"
                  defaultValue=""
                  fullWidth
                  size='small'
                  multiline
                  rows={1.5}
                  value={P3} onChange={(e) => setP3(e.target.value)}
                />
              </Grid> */}
              <Grid
                xs={4}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              ></Grid>
              <Grid
                xs={4}
                sx={{ marginTop: "10px" }}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <TextField
                  label=""
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                  value={hook.Lastly}
                  onChange={(e) => hook.setLastly(e.target.value)}
                />
              </Grid>
              <Grid
                xs={4}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              ></Grid>
              <Grid
                xs={12}
                sx={{ marginTop: "10px", marginRight: "5px" }}
                container
                direction="column"
                justifyContent="center"
                alignItems="end"
              >
                <Box
                  sx={{ bgcolor: "white", width: "15vh", marginRight: "70px" }}
                >
                  <TextField
                    label="ชื่อ-นามสกุล"
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    value={hook.Licent}
                    onChange={(e) => hook.setLicent(e.target.value)}
                  />
                </Box>
              </Grid>
              <Grid
                xs={12}
                sx={{ marginTop: "0px", marginRight: "20px" }}
                container
                direction="column"
                justifyContent="center"
                alignItems="end"
              >
                <Box
                  sx={{ bgcolor: "white", width: "20vh", marginRight: "32px" }}
                >
                  <TextField
                    label="ตำแหน่ง"
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    value={hook.Level}
                    onChange={(e) => hook.setLevel(e.target.value)}
                  />
                </Box>
              </Grid>
              <Grid
                xs={12}
                sx={{ marginTop: "0px", marginRight: "20px" }}
                container
                direction="column"
                justifyContent="center"
                alignItems="end"
              >
                <TextField
                  label="หน่วยงาน"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                  value={hook.Position}
                  onChange={(e) => hook.setPosition(e.target.value)}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box>
          <Stack direction="column" spacing={1}>
            <Tooltip title="Download template">
              <Button variant="outlined" onClick={hook.handleSend}>
                <SimCardDownloadIcon />
              </Button>
            </Tooltip>
            <Tooltip title="Generate content">
              <Button variant="contained" onClick={geneRate}>
                {isLoading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  <BubbleChartIcon />
                )}
              </Button>
            </Tooltip>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default CreatePages;
