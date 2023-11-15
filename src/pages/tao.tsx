import { Container, Grid, Typography, Card, Avatar } from "@mui/material"



const Tao = () => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <Container>
                    <Grid container>
                        <Grid item xs={3}>
                            <Avatar sx={{ width: 150, height: 150 }} alt="Remy Sharp" src="https://picsum.photos/200/200" />
                        </Grid>
                        <Grid item xs={4}>
                            <Container>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ratione esse quo tempora nulla magni officiis, assumenda maiores sequi hic placeat odit? Accusantium explicabo quia sit excepturi. Rerum, aut velit!
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
                <Container>
                    <Grid container>
                        <Grid item xs={3}>
                            <img src="https://picsum.photos/100/100" alt="random" />
                        </Grid>
                        <Grid item xs={3}>
                            <img src="https://picsum.photos/100/100" alt="random" />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={3}>
                            <img src="https://picsum.photos/100/100" alt="random" />
                        </Grid>
                        <Grid item xs={3}>
                            <img src="https://picsum.photos/100/100" alt="random" />
                        </Grid>
                    </Grid>

                </Container>
                <Container>
                    <Typography variant="h3"> Award  </Typography>
                    <Card>
                    <Grid container>
                        <Grid item xs={3}>
                            <img src="https://picsum.photos/150/150" alt="random" />
                        </Grid>
                        <Grid item xs={6}>
                            <Container>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat velit odio sapiente minima, necessitatibus adipisci fugit! Ullam, non sed. Ipsum recusandae natus, laudantium repudiandae ipsa aut provident quae officiis. Harum!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus reiciendis sed eum blanditiis perspiciatis debitis fugiat porro similique architecto corrupti at voluptatem inventore voluptatum incidunt officia sunt perferendis, veniam aperiam.
                            </Container>
                        </Grid>
                    </Grid>
                    </Card>
                </Container>
            </Grid>
        </Grid>
    )
}

export default Tao