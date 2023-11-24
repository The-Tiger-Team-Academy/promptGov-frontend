import React from 'react';
import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import appBarConstants from './appBar.constants';
import styles from './appbar.style';


interface DrawerComponentProps {
    open: boolean;
    handleDrawerToggle: () => void;
}

const AppBarComponent = ({ open, handleDrawerToggle }: DrawerComponentProps) => {

    const appBarStyle = styles(open);

    return (
        <AppBar position="fixed" style={appBarStyle.appBarStyle}>
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerToggle} // This should toggle the open state
                >
                    <MenuIcon />
                </IconButton>
                Prompt Gov
            </Toolbar>
        </AppBar>
    );
};

export default AppBarComponent;
