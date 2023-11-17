import { Container, Grid, Typography, Card, Avatar } from "@mui/material"

const Breeze = () => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <Container>
                    <Grid container>
                        <Grid item xs={3}>
                        <Avatar sx={{ width: 150, height: 150 }} alt="Remy Sharp" src="https://picsum.photos/200/200" />
                        </Grid>
                        <Grid item xs={9}>
                            <Container>
                                <p>Nittcha Mongkolsaen</p>
                                <p>อายุ: 17</p>
                                <p>วัน/เดือน/ปีเกิด: 24 กันยายน 2549</p>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <Grid item xs={6}>
                <Container>
                    <Grid container>
                        <Grid item xs={6}>
                            <img src="https://picsum.photos/100/100" alt="random" />
                        </Grid>
                        <Grid item xs={6}>
                            <img src="https://picsum.photos/100/100" alt="random" />
                        </Grid>
                        <Grid item xs={6}>
                            <img src="https://picsum.photos/100/100" alt="random" />
                        </Grid>
                        <Grid item xs={6}>
                            <img src="https://picsum.photos/100/100" alt="random" />
                        </Grid>
                    </Grid>

                    <Typography variant="h3"> Award </Typography>
                    <Card sx={{ minWidth: 275 }}>
                        <Grid item xs={6}>
                            <Container>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <img src="https://picsum.photos/200/200" alt="random" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Container>
                                            <p>Nittcha Mongkolsaen</p>
                                        </Container>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                    </Card>
                </Container>
            </Grid>
        </Grid>
    )
}

export default Breeze