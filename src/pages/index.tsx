import { Container, Dialog, Typography } from "@mui/material"
import LoginPage from "./login"


const Home = () => {
    return (
        <Dialog open={true}>
            <LoginPage></LoginPage>
        </Dialog>
    )
}

export default Home