import { Grid, Container } from "@mui/material"
import * as React from 'react';
import Typography from '@mui/material/Typography';


const Bright = () => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <h1>Bright</h1>

                <img src="https://picsum.photos/200/200" alt="random" />

            </Grid>
            <Grid item xs={6}>
                <h1>Bright2</h1>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid xs={6}>
                        <img src="https://picsum.photos/200/200" alt="random" />
                    </Grid>
                    <Grid xs={6}>
                        <img src="https://picsum.photos/200/200" alt="random" />
                    </Grid>
                    <Grid xs={6}>
                        <img src="https://picsum.photos/200/200" alt="random" />
                    </Grid>
                    <Grid xs={6}>
                        <img src="https://picsum.photos/200/200" alt="random" />
                    </Grid>


                    <Container>
                       
                            <Grid xs={6}>
                                <Grid item xs={6}>

                                    <img src="https://picsum.photos/200/200" alt="random" />
                                </Grid>
                                <Grid item xs={6}>

                                    <Typography gutterBottom variant="h5" component="div">
                                        Bright
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </Grid>

                            </Grid>
                       
                    </Container>


                </Grid>


            </Grid>
        </Grid>)


}

export default Bright