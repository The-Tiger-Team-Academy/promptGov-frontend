import LoginPage from "../module/login/login"
import Dialog from '@mui/material/Dialog';
import React from "react";

const Home = () => {
    return (
        <Dialog open={true} fullScreen>
            <LoginPage></LoginPage>
        </Dialog>
    )
}

export default Home