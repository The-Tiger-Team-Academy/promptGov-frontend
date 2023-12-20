import { Container, Typography, Grid, Button } from "@mui/material";
import { btn, container } from "@/styles/paperflow.style";
import paperFlow from "@/module/createDocument/paper.constans";

const Paper = () => {

  return (
    <Container sx={container}>
      <main>
        <Typography variant="h2" align="center" color="#014B7C" gutterBottom>
          เลือกประเภทเอกสาร
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Button variant="outlined" sx={btn}>
              <img src={paperFlow.paper} alt="Logo1" width={paperFlow.paperWidth} height={paperFlow.paperheight} />
              <Typography variant="body1">บันทึกข้อความ</Typography>
            </Button>
          </Grid>

          <Grid item>
            <Button variant="outlined" sx={btn}>
              <img src={paperFlow.paper} alt="Logo2" width={paperFlow.paperWidth} height={paperFlow.paperheight} />
              <Typography variant="body1">ขอความอนุเคราะห์</Typography>
            </Button>
          </Grid>

          <Grid item>
            <Button variant="outlined" sx={btn}>
              <img src={paperFlow.paper} alt="Logo3" width={paperFlow.paperWidth} height={paperFlow.paperheight} />
              <Typography variant="body1">ใบลา/ใบลากิจ</Typography>
            </Button>
          </Grid>

          <Grid item>
            <Button variant="outlined" sx={btn}>
              <img src={paperFlow.paper} alt="Logo4" width={paperFlow.paperWidth} height={paperFlow.paperheight} />
              <Typography variant="body1">จิตอาสา</Typography>
            </Button>
          </Grid>
        </Grid>
      </main>
    </Container>
  );
};

export default Paper;
