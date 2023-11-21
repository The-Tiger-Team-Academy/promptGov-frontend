import { Container, Grid } from "@mui/material"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const PhngFab = () => {
    return (
        <Grid container >
            <Grid item xs={6}>
                <h1>Fab1</h1>
                <Container>
                    <Grid container >
                        <Grid item xs={3}>
                            <img
                                width='80%'
                                height='auto'
                                src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/315580826_1591121214679507_3883281171351872243_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCFLpXtMtDoB5ImSBZ95NyAgyWTF0aQCoCDJZMXRpAKlNupY2VqiRUgclYkNwyKSKsDCsFAqkb8DiP9L6wyjUj&_nc_ohc=aUUciBc-2BkAX-o3pDb&_nc_ht=scontent.fbkk5-4.fna&oh=00_AfB0YqaG3j1sviDDsUjFq9EqJmD8Pv3YeviLkdow0kf0Pg&oe=655969BD" />
                        </Grid>
                        <Grid item xs={3}>
                            <h2> Praeploy Mongkhonsaen </h2>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <Grid item xs={6}>
                <h1>Fab2</h1>
                <Container>
                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <img
                                width='80%'
                                height='auto'
                                src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/315580826_1591121214679507_3883281171351872243_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCFLpXtMtDoB5ImSBZ95NyAgyWTF0aQCoCDJZMXRpAKlNupY2VqiRUgclYkNwyKSKsDCsFAqkb8DiP9L6wyjUj&_nc_ohc=aUUciBc-2BkAX-o3pDb&_nc_ht=scontent.fbkk5-4.fna&oh=00_AfB0YqaG3j1sviDDsUjFq9EqJmD8Pv3YeviLkdow0kf0Pg&oe=655969BD" />
                        </Grid>
                        <Grid item xs={6}>
                            <img
                                width='80%'
                                height='auto'
                                src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/315580826_1591121214679507_3883281171351872243_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCFLpXtMtDoB5ImSBZ95NyAgyWTF0aQCoCDJZMXRpAKlNupY2VqiRUgclYkNwyKSKsDCsFAqkb8DiP9L6wyjUj&_nc_ohc=aUUciBc-2BkAX-o3pDb&_nc_ht=scontent.fbkk5-4.fna&oh=00_AfB0YqaG3j1sviDDsUjFq9EqJmD8Pv3YeviLkdow0kf0Pg&oe=655969BD" />
                        </Grid>
                        <Grid item xs={6}>
                            <img
                                width='80%'
                                height='auto'
                                src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/315580826_1591121214679507_3883281171351872243_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCFLpXtMtDoB5ImSBZ95NyAgyWTF0aQCoCDJZMXRpAKlNupY2VqiRUgclYkNwyKSKsDCsFAqkb8DiP9L6wyjUj&_nc_ohc=aUUciBc-2BkAX-o3pDb&_nc_ht=scontent.fbkk5-4.fna&oh=00_AfB0YqaG3j1sviDDsUjFq9EqJmD8Pv3YeviLkdow0kf0Pg&oe=655969BD" />
                        </Grid>
                        <Grid item xs={6}>
                            <img
                                width='80%'
                                height='auto'
                                src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/315580826_1591121214679507_3883281171351872243_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCFLpXtMtDoB5ImSBZ95NyAgyWTF0aQCoCDJZMXRpAKlNupY2VqiRUgclYkNwyKSKsDCsFAqkb8DiP9L6wyjUj&_nc_ohc=aUUciBc-2BkAX-o3pDb&_nc_ht=scontent.fbkk5-4.fna&oh=00_AfB0YqaG3j1sviDDsUjFq9EqJmD8Pv3YeviLkdow0kf0Pg&oe=655969BD" />
                        </Grid>
                    </Grid>
                </Container>
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
            
        </Grid>
    )
}

                <Container>
                    <Grid>

                    </Grid>
                </Container>
            </Grid>
        </Grid>
    )
}

export default PhngFab





