"use client";
import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import TextField from '@mui/material/TextField';
import useMessageRecord from '../hook/useMessageRecord';
import generateChat from '../hook/useGenerate';
import CircularProgress from '@mui/material/CircularProgress';

const CreatePages = () => {
  const { Nameuniversity, Orgra, Tel, Sal, Number, Date, Month, Year, Story, Person, P1, Lastly, Licent, Level, Position, setNameuniversity, setOrgra, setTel, setSal, setNumber, setDate, setMonth, setYear, setStory, setPerson, setP1, setP2, setP3, setLastly, setLicent, setLevel, setPosition, handleSend } = useMessageRecord();
  const { responsechat, generateDocument, chat, setChat } = generateChat();
  const [isLoading, setIsLoading] = useState(false);

  const geneRate = () => {
    generateDocument();
    setIsLoading(true);
  }

  useEffect(() => {
    if (responsechat) {
      setIsLoading(false);
    }
  }, [responsechat]);
  const gettwoSet = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setStory(e.target.value);
    setChat(e.target.value);
  };

  useEffect(() => {
    setP1(responsechat);
  }, [responsechat]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'white', height: '100vh', border: '1px solid black', marginTop: '70px' }}>
          <Box sx={{ bgcolor: 'white', height: '97vh', width: '70vh' }} >
            <Grid container >
              <Grid xs={4}>
                <Image src='/img/image 7.png' alt={''} width={60} height={70} />
              </Grid>
              <Grid xs={4}
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
                <p>บันทึกข้อความ</p>
                <TextField
                  label="สถาบัน"
                  id="outlined-size-small"
                  defaultValue="มหาวิทยาลัยเทคโนโลยีสุรนารี"
                  size="small"
                  value={Nameuniversity} onChange={(e) => setNameuniversity(e.target.value)}
                />
              </Grid>
              <Grid xs={4}
                container
                direction="column"
                justifyContent="center"
                alignItems="center">

              </Grid>
              <Grid xs={6}
                sx={{ marginTop: '10px' }}
                container
                direction="column"
                justifyContent="start"
                alignItems="start">
                <TextField
                  label="หน่วยงาน"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                  value={Orgra} onChange={(e) => setOrgra(e.target.value)}
                />
              </Grid>
              <Grid xs={3}
                sx={{ marginTop: '10px' }}
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
                <TextField
                  label="โทร"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                  value={Tel} onChange={(e) => setTel(e.target.value)}
                />
              </Grid>
              <Grid xs={3}
                sx={{ marginTop: '10px' }}
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
                <TextField
                  label="โทรสาร"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                  value={Sal} onChange={(e) => setSal(e.target.value)}
                />
              </Grid>
              <Grid xs={4}
                sx={{ marginTop: '10px' }}
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
                <TextField
                  label="ที่"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                  value={Number} onChange={(e) => setNumber(e.target.value)}
                />
              </Grid>
              <Grid xs={1}
                sx={{ marginTop: '10px' }}
                container
                direction="column"
                justifyContent="center"
                alignItems="center">

              </Grid>
              <Grid xs={7}
                sx={{ marginTop: '10px' }}
                container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid xs={4}
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center">
                  <TextField
                    label="วัน"
                    id="outlined-size-small"
                    defaultValue="12"
                    fullWidth
                    size='small'
                    value={Date} onChange={(e) => setDate(e.target.value)}
                  />
                </Grid>
                <Grid xs={4}
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center">
                  <TextField
                    label="เดือน"
                    id="outlined-size-small"
                    defaultValue="ธันวาคม"
                    fullWidth
                    size='small'
                    value={Month} onChange={(e) => setMonth(e.target.value)}
                  />
                </Grid>
                <Grid xs={4}
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center">
                  <TextField
                    label="ปี"
                    id="outlined-size-small"
                    defaultValue="2566"
                    fullWidth
                    size='small'
                    value={Year} onChange={(e) => setYear(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid xs={12}
                sx={{ marginTop: '10px' }}
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
                <TextField
                  label="เรื่อง"
                  id="outlined-size-small"
                  defaultValue=""
                  fullWidth
                  size='small'
                  value={chat}
                  onChange={gettwoSet} />
              </Grid>
              <Grid xs={12}
                sx={{ marginTop: '10px', backgroundColor: 'black', width: '100%', height: "1px" }}
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
              </Grid>
              <Grid xs={5}
                sx={{ marginTop: '10px' }}
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
                <TextField
                  label="เรียน"
                  id="outlined-size-small"
                  defaultValue=""
                  fullWidth
                  size='small'
                  value={Person} onChange={(e) => setPerson(e.target.value)}
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
                  id="outlined-size-small"
                  defaultValue=""
                  fullWidth
                  size='small'
                  multiline
                  rows={5}
                  value={P1} onChange={(e) => setP1(e.target.value)}
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
              <Grid xs={4}
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
              </Grid>
              <Grid xs={4}
                sx={{ marginTop: '10px' }}
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
                <TextField
                  label=""
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                  value={Lastly} onChange={(e) => setLastly(e.target.value)}
                />
              </Grid>
              <Grid xs={4}
                container
                direction="column"
                justifyContent="center"
                alignItems="center">

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
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    value={Licent} onChange={(e) => setLicent(e.target.value)}
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
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    value={Level} onChange={(e) => setLevel(e.target.value)}
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
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                  value={Position} onChange={(e) => setPosition(e.target.value)}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <button onClick={handleSend}>Dowload</button>
        <div>
          <button onClick={geneRate}>Generate Content</button>
          {isLoading && <CircularProgress />}
        </div>
      </Container>
    </React.Fragment >
  );
};

export default CreatePages;
