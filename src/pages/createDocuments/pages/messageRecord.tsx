"use client";
import React, { useEffect, useState, useRef } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import useGenerate from "@/module/createDocument/hook/useGenerate.hook";
import useMessageRecord from "@/module/createDocument/hook/useMessageRecord.hook";
import MessageRecordDownloadHook from "@/module/createDocument/hook/downloadmessageRecord.hook";
import IconButton from "@mui/material/IconButton";
import AssistantIcon from "@mui/icons-material/Assistant";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import useScrollDialog from "@/module/template/hook/record.hook";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const CreatePages = () => {
  const hook = useMessageRecord();
  const { responsechat, generateDocument, chat, setChat } = useGenerate();
  const { handleSenddownload } = MessageRecordDownloadHook();
  const [isLoading, setIsLoading] = useState(false);
  const { open, scroll, handleOpen, handleClose, descriptionElementRef } =
    useScrollDialog();

  const geneRate = () => {
    generateDocument();
    setIsLoading(true);
    setShowLoadingCat(!showLoadingCat);
  };

  useEffect(() => {
    if (responsechat) {
      setIsLoading(false);
      setShowLoadingCat(false);
      hook.setP1(responsechat);
    }
  }, [responsechat]);

  const gettwoSet = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    hook.setStory(e.target.value as string);
    setChat(e.target.value);
  };

  const [showLoadingCat, setShowLoadingCat] = useState(false);
  const LoadingCat = () => {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
      // Play audio when the component mounts
      if (audioRef.current) {
        audioRef.current.play();
      }

      // Return a cleanup function to stop and reset audio when the component unmounts
      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      };
    }, []);

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          position: "absolute",
          backgroundColor: "white",
        }}
      >
        <img
          src="https://cdn.dribbble.com/users/566817/screenshots/2280275/media/39ebef761528920581bb98a35709676c.gif"
          alt="Loading cat animation"
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            backgroundColor: "white",
          }}
        />
        <audio ref={audioRef} src="/mp3/taratata-6264.mp3" loop />
      </div>
    );
  };

  return (
    <React.Fragment>
      <CssBaseline />
      {showLoadingCat && <LoadingCat />}
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "white",
            border: "1px solid black",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          <Box sx={{ bgcolor: "white", height: "700px" }}>
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
                  value={hook.Number}
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
                    value={hook.Date}
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
                  InputProps={{
                    endAdornment: (
                      <Tooltip title="Generate content">
                        <IconButton aria-label="delete" onClick={geneRate}>
                          {isLoading ? (
                            <CircularProgress size={20} color="primary" />
                          ) : (
                            <AssistantIcon color="primary" />
                          )}
                        </IconButton>
                      </Tooltip>
                    ),
                  }}
                />
              </Grid>
              <Grid
                xs={3}
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
                justifyContent="center"
                alignItems="center"
              >
                <p style={{ fontSize: "12px", fontWeight: "bold" }}>
                  จึงเรียนมาเพื่อโปรดพิจารณาให้ความอนุเคราะห์
                </p>
              </Grid>
              <Grid
                xs={3}
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
                  sx={{ bgcolor: "white", width: "150px", marginRight: "70px" }}
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
                  sx={{ bgcolor: "white", width: "197px", marginRight: "32px" }}
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
                sx={{ marginTop: "0px", marginRight: "40px" }}
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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: "5px",
            justifyContent: "end",
            marginTop: "5px",
            flexDirection: "row",
          }}
        >
          <Tooltip title="Example template" onClick={() => handleOpen("body")}>
            <Button variant="text" color="inherit">
              <Image
                src="/img/google-docs.png"
                alt="Doc"
                height={30}
                width={30}
              ></Image>
            </Button>
          </Tooltip>
          <Tooltip title="Download DOCX" onClick={hook.previewpdfPage}>
            <Button variant="outlined">
              <Image
                src="/img/doc.png"
                alt="Doc"
                height={30}
                width={30}
              ></Image>
            </Button>
          </Tooltip>
          {/* <Tooltip title="Download PDF">
            <Button variant="outlined" color="error">
              <Image
                src="/img/pdf.png"
                alt="Doc"
                height={30}
                width={30}
              ></Image>
            </Button>
          </Tooltip> */}
        </Box>
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          ตัวอย่าง บันทึกเอกสาร
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Image
              src="/img/บันทึกข้อคาม template.jpg"
              height={750}
              width={500}
              alt=""
            ></Image>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSenddownload}>Download</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default CreatePages;
