import { Box, Button, Container, Grid, Paper, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material"
import Image from 'next/image'
import PaymentHook from "../../module/payment/hooks/payments.hook";

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        // ... You can customize the theme as per your design
    },
});



const PaymentPage = () => {
    const { handlePrizeClick } = PaymentHook();
    return (
        <div>this is payment page
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
                                {/* Your document content here */}
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
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
                        <Container maxWidth="lg">
                            <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                                หากคุณอยากขายสินค้า ดำเนินงานต่อ
                            </Typography>
                            {/* Social media icons */}
                        </Container>
                    </Box>
                </ThemeProvider>
            </Container>

        </div>
    )

}

export default PaymentPage