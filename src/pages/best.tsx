import { Container, Grid, Typography, Card } from "@mui/material"


const Best = () => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <h1>col 1</h1>
                <Container>
                    <Grid container>
                        <Grid item xs={3}>
                            <img src="https://picsum.photos/200/200" alt="random" style={{ borderRadius: '100px', overflow: 'hidden' }} />
                        </Grid>
                        <Grid item xs={3}>
                            <Container>
                                สิทธินนท์ สิงห์คำ
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
                <Container>
                    <Typography variant="h3"> Experiences </Typography>
                    <Typography > Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ipsum rerum, officiis perferendis sint fugit adipisci harum, dignissimos voluptates magni voluptas commodi temporibus! Fugit qui dolor et alias ipsum deserunt! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi consequatur modi consequuntur non, officia recusandae aut. Architecto eum fuga vero quod, natus sed ex inventore optio, est, minima tempora aliquid. </Typography>
                </Container>
                <Container>
                    <Typography variant="h3"> Activity </Typography>
                    <Typography > Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ipsum rerum, officiis perferendis sint fugit adipisci harum, dignissimos voluptates magni voluptas commodi temporibus! Fugit qui dolor et alias ipsum deserunt! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi consequatur modi consequuntur non, officia recusandae aut. Architecto eum fuga vero quod, natus sed ex inventore optio, est, minima tempora aliquid. </Typography>
                </Container>
            </Grid>

            <Grid item xs={6}>
                <h1>col 2</h1>
                <Container>
                    <Grid container>
                        <Grid item xs={6}>
                            <img src="https://picsum.photos/300/200" alt="random" />
                        </Grid>
                        <Grid item xs={6}>
                            <img src="https://picsum.photos/300/200" alt="random" />
                        </Grid>
                        <Grid item xs={6}>
                            <img src="https://picsum.photos/300/200" alt="random" />
                        </Grid>
                        <Grid item xs={6}>
                            <img src="https://picsum.photos/300/200" alt="random" />
                        </Grid>
                    </Grid>
                </Container>
                <Grid container>
                    <Grid item xs={12}><h1>Award</h1></Grid>
                    <Grid item xs={3}>
                        <img src="https://picsum.photos/200/100" alt="random" />
                    </Grid>
                    <Grid item xs={9}>
                        <Container>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem quas ipsam earum sequi dolore corrupti obcaecati possimus asperiores repellat, odio, eum fugiat iure. Molestias sapiente excepturi repudiandae explicabo recusandae non.
                        </Container>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Best