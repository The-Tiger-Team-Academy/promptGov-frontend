"use client";
import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import useGenerate from '@/module/createDocument/hook/useGenerate.hook';
import useMessageRecord from '@/module/createDocument/hook/useMessageRecord.hook';
import { Select, MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



const CreatePages = () => {
  const hook = useMessageRecord();
  const { responsechat, generateDocument, chat, setChat } = useGenerate();
  const [isLoading, setIsLoading] = useState(false);

  const geneRate = () => {
    generateDocument();
    setIsLoading(true);
  }

  useEffect(() => {
    if (responsechat) {
      setIsLoading(false);
      hook.setP1(responsechat);
    }
  }, [responsechat]);

  const gettwoSet = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    // TODO: เดี๋ยวมาแก้
    // hook.setStory(e.target.value as string);
    // setChat(e.target.value);
  };

  const [หน่วยงาน, setAge] = React.useState('');
  const [หน่วยงาน2, setAge2] = useState('');

  const handleChange = (value: string, setState: { (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (arg0: any): void; }) => {
    setState(value); 
  }

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
                  value={hook.Nameuniversity} onChange={(e) => hook.setNameuniversity(e.target.value)}
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

                <FormControl 
                size='small' 
                style={{width: '200px'}}>
                  <InputLabel id="demo-simple-select-label">หน่วยงาน</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={หน่วยงาน}
                    label="หน่วยงาน"
                    onChange={e => handleChange(e.target.value, setAge)}
                  >
                    <MenuItem value="ศูนย์กิจการนานาชาติ">ศูนย์กิจการนานาชาติ</MenuItem>
                    <MenuItem value="ศูนย์คอมพิวเตอร์">ศูนย์คอมพิวเตอร์</MenuItem>
                    <MenuItem value="ศูนย์เครื่องมือวิทยาศาสตร์และเทคโนโลยี">ศูนย์เครื่องมือวิทยาศาสตร์และเทคโนโลยี</MenuItem>
                    <MenuItem value="ศูนย์บริการการศึกษา">ศูนย์บริการการศึกษา</MenuItem>
                    <MenuItem value="ศูนย์บรรณสารและสื่อการศึกษา">ศูนย์บรรณสารและสื่อการศึกษา</MenuItem>
                    <MenuItem value="ศูนย์นวัตกรรมและเทคโนโลยีการศึกษา">ศูนย์นวัตกรรมและเทคโนโลยีการศึกษา</MenuItem>
                    <MenuItem value="ศูนย์สหกิจศึกษาและพัฒนาอาชีพ">ศูนย์สหกิจศึกษาและพัฒนาอาชีพ</MenuItem>
                  </Select>
                </FormControl>
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
                  value={hook.Tel} onChange={(e) => hook.setTel(e.target.value)}
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
                  value={hook.Sal} onChange={(e) => hook.setSal(e.target.value)}
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
                  value={Number} onChange={(e) => hook.setNumber(e.target.value)}
                />
              </Grid>
              <Grid xs={8}
                sx={{ marginTop: '10px' }}
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
                         
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                <DatePicker label="วัน/เดือน/ปี" />
                </DemoContainer>
              </LocalizationProvider>
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
                  value={hook.Person} onChange={(e) => hook.setPerson(e.target.value)}
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
                  value={hook.P1} onChange={(e) => hook.setP1(e.target.value)}
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
                  value={hook.Lastly} onChange={(e) => hook.setLastly(e.target.value)}
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
                    value={hook.Licent} onChange={(e) => hook.setLicent(e.target.value)}
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
                    value={hook.Level} onChange={(e) => hook.setLevel(e.target.value)}
                  />
                </Box>
              </Grid>
              <Grid xs={12}
                sx={{ marginTop: '0px', marginRight: '20px',paddingTop: '5px' }}
                container
                direction="column"
                justifyContent="center"
                alignItems="end">
                <FormControl 
                size='small' 
                style={{width: '200px'}}>
                  <InputLabel id="demo-simple-select-label">หน่วยงาน</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={หน่วยงาน2}
                    label="หน่วยงาน"
                    onChange={e => handleChange(e.target.value, setAge2)}
                  >
                    <MenuItem value="ศูนย์กิจการนานาชาติ">ศูนย์กิจการนานาชาติ</MenuItem>
                    <MenuItem value="ศูนย์คอมพิวเตอร์">ศูนย์คอมพิวเตอร์</MenuItem>
                    <MenuItem value="ศูนย์เครื่องมือวิทยาศาสตร์และเทคโนโลยี">ศูนย์เครื่องมือวิทยาศาสตร์และเทคโนโลยี</MenuItem>
                    <MenuItem value="ศูนย์บริการการศึกษา">ศูนย์บริการการศึกษา</MenuItem>
                    <MenuItem value="ศูนย์บรรณสารและสื่อการศึกษา">ศูนย์บรรณสารและสื่อการศึกษา</MenuItem>
                    <MenuItem value="ศูนย์นวัตกรรมและเทคโนโลยีการศึกษา">ศูนย์นวัตกรรมและเทคโนโลยีการศึกษา</MenuItem>
                    <MenuItem value="ศูนย์สหกิจศึกษาและพัฒนาอาชีพ">ศูนย์สหกิจศึกษาและพัฒนาอาชีพ</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <button onClick={hook.handleSend}>Dowload</button>
        <div>
          <button onClick={geneRate}>Generate Content</button>
          {isLoading && <CircularProgress />}
        </div>
      </Container>
    </React.Fragment >
  );
};

export default CreatePages;
