import { Container, Typography, Grid, Button } from "@mui/material";
import { btn, container } from "@/styles/paperflow.style";
import { IMAGE_PAPER } from "./paper.constans";

const Paper = () => {
  const { path, width, height } = IMAGE_PAPER.LOGO;

  return (
    <Container sx={container}>
      <main>
        <Typography variant="h2" align="center" color="#014B7C" gutterBottom>
          เลือกประเภทเอกสาร
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Button variant="outlined" sx={btn}>
              <img src={path} alt="Logo1" width={width} height={height} />
              <Typography variant="body1">บันทึกข้อความ</Typography>
            </Button>
          </Grid>

          <Grid item>
            <Button variant="outlined" sx={btn}>
              <img src={path} alt="Logo2" width={width} height={height} />
              <Typography variant="body1">ขอความอนุเคราะห์</Typography>
            </Button>
          </Grid>

          <Grid item>
            <Button variant="outlined" sx={btn}>
              <img src={path} alt="Logo3" width={width} height={height} />
              <Typography variant="body1">ใบลา/ใบลากิจ</Typography>
            </Button>
          </Grid>

          <Grid item>
            <Button variant="outlined" sx={btn}>
              <img src={path} alt="Logo4" width={width} height={height} />
              <Typography variant="body1">จิตอาสา</Typography>
            </Button>
          </Grid>
        </Grid>
      </main>
    </Container>
  );
};

export default Paper;
