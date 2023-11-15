import { Container, Grid, Typography, Card } from "@mui/material"

const Tao = () => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <h1>col 1</h1>
                <Container>
                    <Grid container>
                        <Grid item xs={3}>
                            <img src="https://picsum.photos/200/300" alt="random" />
                        </Grid>
                        <Grid item xs={3}>
                            <Container>
                                ชื่อ นามสกุล
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
            
        </Grid>
    )
}

export default Tao