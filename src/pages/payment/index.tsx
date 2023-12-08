import { Box, Button, Container, Grid, Paper, ThemeProvider, Typography, createTheme } from "@mui/material"
import Image from 'next/image'
import PaymentHook from "../../module/payment/hooks/payments.hook";
import SuccessModel from "./components/successModal";
import CancelModal from "./components/cancelModal";
import HandleSuccessModal from "@/module/payment/hooks/handleSuccessModal";
import HandleCancelModal from "@/module/payment/hooks/handleCancelModal";


// TODO : should be move to a separate file
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
    },
});


// TODO : should be move to a separate file
const PaymentPage = () => {
    const { handlePrizeClick } = PaymentHook();
    const susscesMoadal = HandleSuccessModal(); 
    const cancelModal = HandleCancelModal();
    return (
        <div>this is payment page
            <SuccessModel open={susscesMoadal.open} handleClose={susscesMoadal.handleClose}></SuccessModel>
            <CancelModal open={cancelModal.open} handleClose={cancelModal.handleClose}></CancelModal>
            <Container>
                <button
                    onClick={() =>
                        handlePrizeClick("price_1OEtulAom1IgIvKKthyQ8DJV")
                    }
                >
                    จ่ายเงิน
                </button>
                <ThemeProvider theme={theme}>
                    <Container maxWidth="sm">
                        <Box my={4} display="flex" flexDirection="column" alignItems="center">
                            <Typography variant="h4" component="h1" gutterBottom>
                                ตัวอย่างเอกสาร
                            </Typography>
                            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}> 
                                <Typography>
                                    <Image
                                        src="/img/test.webp"
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                                </Typography>
                            </Paper>
                            <Grid container spacing={2} style={{ marginTop: '20px' }}>
                                <Grid item xs={12}>
                                    {/* Buttons or other controls */}
                                    <Button variant="contained" color="primary" onClick={() =>
                                        handlePrizeClick("price_1OEtulAom1IgIvKKthyQ8DJV")
                                    }>ดาวน์โหลด</Button>
                                    <Button variant="contained" color="secondary">แก้ไข</Button>
                                    <Button variant="contained" color="secondary" onClick={() => susscesMoadal.handleOpen()}> Check success</Button>
                                    <Button variant="contained" color="secondary" onClick={() => cancelModal.handleOpen()}> Check cancel</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
                        <Container maxWidth="lg">
                            <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                                หากคุณอยากขายสินค้า ดำเนินงานต่อ
                            </Typography>
                        </Container>
                    </Box>
                </ThemeProvider>
            </Container>

        </div>
    )

}

export default PaymentPage