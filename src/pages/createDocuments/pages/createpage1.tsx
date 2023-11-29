import React, { useState } from 'react';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import TextField from '@mui/material/TextField';


const CreatePages: React.FC = () => {
  const [Nameuniversity, setNameuniversity] = useState('');
  const [Orgra, setOrgra] = useState('');
  const [Tel, setTel] = useState('');
  const [Sal, setSal] = useState('');
  const [Number, setNumber] = useState('');
  const [Date, setDate] = useState('');
  const [Month, setMonth] = useState('');
  const [Year, setYear] = useState('');
  const [Story, setStory] = useState('');
  const [Person, setPerson] = useState('');
  const [P1, setP1] = useState('');
  const [P2, setP2] = useState('');
  const [P3, setP3] = useState('');
  const [Lastly, setLastly] = useState('จึงเรียนมาเพื่อทราบ');
  const [Licent, setLicent] = useState('');
  const [Level, setLevel] = useState('');
  const [Position, setPosition] = useState('');

  const handleSend = async () => {
    try {
      const response = await axios.post(`https://apifirstpage.thetigerteamacademy.net/generate_document`, {
        NAMEUNIVERSITY: Nameuniversity,
        ORGRA: Orgra,
        TEL: Tel,
        SAL: Sal,
        NUMBER: Number,
        DATE: Date,
        MONTH: Month,
        YEAR: Year,
        STORY: Story,
        PERSON: Person,
        P1: P1,
        P2: P2,
        P3: P3,
        LASTLY: Lastly,
        LICENT: Licent,
        LEVEL: Level,
        POSITION: Position
      }, {
        responseType: 'blob'
      });

      if (response.status === 200) {
        const fileUrl = URL.createObjectURL(response.data);
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', 'generated.docx');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        console.error('Failed to generate document');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

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
                  value={Story} onChange={(e) => setStory(e.target.value)}
                />
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
                  label="ย่อหน้าที่1"
                  id="outlined-size-small"
                  defaultValue=""
                  fullWidth
                  size='small'
                  multiline
                  rows={1.5}
                  value={P1} onChange={(e) => setP1(e.target.value)}
                />
              </Grid>
              <Grid xs={12}
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
              </Grid>
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
              {/* <Grid xs={12}
                sx={{ marginTop: '10px', marginRight: '20px' }}
                container
                direction="column"
                justifyContent="center"
                alignItems="end">
                <TextField
                  label=""
                  id="outlined-size-small"
                  defaultValue="ขอแสดงความนับถือ"
                  size="small"
                />
              </Grid> */}
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
      </Container>
    </React.Fragment >
    // <div>
    //   <textarea placeholder='ชื่อมหาลัย' value={Nameuniversity} onChange={(e) => setNameuniversity(e.target.value)} />
    //   <textarea placeholder='หน่วยงาน' value={Orgra} onChange={(e) => setOrgra(e.target.value)} />
    //   <textarea placeholder='โทรศัพท์' value={Tel} onChange={(e) => setTel(e.target.value)} />
    //   <textarea placeholder='โทรสาร' value={Sal} onChange={(e) => setSal(e.target.value)} />
    //   <textarea placeholder='ที่' value={Number} onChange={(e) => setNumber(e.target.value)} />
    //   <textarea placeholder='วันที่' value={Date} onChange={(e) => setDate(e.target.value)} />
    //   <textarea placeholder='เดือน' value={Month} onChange={(e) => setMonth(e.target.value)} />
    //   <textarea placeholder='ปี' value={Year} onChange={(e) => setYear(e.target.value)} />
    //   <textarea placeholder='เรื่อง' value={Story} onChange={(e) => setStory(e.target.value)} />
    //   <textarea placeholder='เรียน' value={Person} onChange={(e) => setPerson(e.target.value)} />
    //   <textarea placeholder='ย่อหน้าแรก' value={P1} onChange={(e) => setP1(e.target.value)} />
    //   <textarea placeholder='ย่อหน้าสอง' value={P2} onChange={(e) => setP2(e.target.value)} />
    //   <textarea placeholder='ย่อหน้าอื่นๆ' value={P3} onChange={(e) => setP3(e.target.value)} />
    //   <textarea placeholder='คำลงท้าย' value={Lastly} onChange={(e) => setLastly(e.target.value)} />
    //   <textarea placeholder='ลายเซ็นชื่อ' value={Licent} onChange={(e) => setLicent(e.target.value)} />
    //   <textarea placeholder='ตำแหน่ง' value={Level} onChange={(e) => setLevel(e.target.value)} />
    //   <textarea placeholder='สังกัด' value={Position} onChange={(e) => setPosition(e.target.value)} />
    //   <textarea placeholder='ลายเซ็นชื่อคนที่2' value={Licent2} onChange={(e) => setLicent2(e.target.value)} />
    //   <textarea placeholder='ตำแหน่งคนที่2' value={Level2} onChange={(e) => setLevel2(e.target.value)} />
    //   <textarea placeholder='สังกัดคนที่2' value={Position2} onChange={(e) => setPosition2(e.target.value)} />
    //   <button onClick={handleSend}>ส่ง</button>
    // </div>
  );
};

export default CreatePages;