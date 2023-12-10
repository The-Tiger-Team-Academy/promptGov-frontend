import Image from "next/image";
import { Container, Typography, Grid, Button } from "@mui/material";
import { container, btn} from "../../styles/paperflow.style"


const Paper = () => {


  return (
    <Container sx={container}>
      <main>
        <Typography variant="h2" align="center" color="#014B7C" gutterBottom>
          เลือกประเภทเอกสาร
        </Typography>

        <Grid container spacing={4} justifyContent="center" >

          <Grid item>
            <Button variant="outlined" sx={btn}>
              <Image src="/docimg/icon.svg" alt="logo1" width={100} height={100} />
              <Typography variant="body1">บันทึกข้อความ</Typography>
            </Button>
          </Grid>

          <Grid item>
            <Button variant="outlined" sx={btn}>
              <Image src="/docimg/icon.svg" alt="logo2" width={100} height={100} />
              <Typography variant="body1">ขอความอนุเคราะห์</Typography>
            </Button>
          </Grid>

          <Grid item>
            <Button variant="outlined" sx={btn}>
              <Image src="/docimg/icon.svg" alt="logo3" width={100} height={100} />
              <Typography variant="body1">ใบลา/ใบลากิจ</Typography>
            </Button>
          </Grid>

          <Grid item>
            <Button variant="outlined" sx={btn}>
              <Image src="/docimg/icon.svg" alt="logo4" width={100} height={100} />
              <Typography variant="body1">จิตอาสา</Typography>
            </Button>
          </Grid>
        </Grid>
      </main>
    </Container>
  );
};

export default Paper;
