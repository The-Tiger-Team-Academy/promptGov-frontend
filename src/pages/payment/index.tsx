import React from "react";
import { Box, Button, Container, Grid, Paper, ThemeProvider, Typography, createTheme } from "@mui/material"
import Image from 'next/image'
import PaymentHook from "../../module/payment/hooks/payments.hook";
import SuccessModel from "./components/successModal";
import CancelModal from "./components/cancelModal";
import HandleSuccessModal from "@/module/payment/hooks/handleSuccessModal";
import HandleCancelModal from "@/module/payment/hooks/handleCancelModal";
import EditIcon from '@mui/icons-material/Edit';
import styles from '@/pages/payment/payment.style'



// TODO : should be move to a separate file
const theme = createTheme({
    palette: {
        primary: {
            main: '#014D81',
        },
    },
});

interface PaymentComponentProps {
    open: boolean;

}

// TODO : should be move to a separate file
const PaymentPage = ({ open }: PaymentComponentProps) => {
    const payment = styles(open)
    const { handlePrizeClick } = PaymentHook();
    const susscesMoadal = HandleSuccessModal();
    const cancelModal = HandleCancelModal();
    return (
        <div style={{ backgroundColor: '#FAFAFA' }}>
            <ThemeProvider theme={theme} >
                <Container >
                    <Box sx={payment.BoxHeadtext}>
                        <Typography gutterBottom sx={payment.TextOrderlist}>
                            รายการสั่งซื้อ
                        </Typography>
                        <Box sx={payment.BoxHeadButton}>
                            <Button variant="outlined">ยกเลิก</Button>
                            <Button variant="contained" startIcon={<EditIcon />}>แก้ไข</Button>
                        </Box>
                    </Box>
                    <Box my={1} sx={payment.BoxCenter}>
                        <Grid container justifyContent="space-between" alignItems="center" sx={payment.Gridcontainer}>
                            <Grid item xs={12} sm={6} md={8}>

                            </Grid>
                            <Grid item xs={12} sm={6} md={4} sx={payment.Griditem}>
                            </Grid>
                        </Grid>
                        <Container maxWidth="sm" sx={payment.ImageContainer}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                <Button onClick={() => handlePrizeClick('price_1OSXziAom1IgIvKKJz0U4vbQ')} component="button" variant="contained" sx={payment.ButtonPay}>
                                    PAY ฿30
                                </Button>
                            </Box>
                            {/* <Box sx={payment.ImageBox}>
                                <Box sx={payment.ImageBorder}>
                                    <Image
                                        src="/img/test.webp"
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                        layout="intrinsic"
                                    />
                                </Box>
                            </Box> */}
                            {/* <Typography align="center">เอกสารขอความอนุเคราะห์ขอยืมฟูกนอน</Typography>
                            <Typography align="center">กิจกรรม The Tiger Team Academy Camp 2023</Typography> */}
                        </Container>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    )

}

export default PaymentPage