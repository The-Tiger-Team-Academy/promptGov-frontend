'use client'
import React from 'react';
import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import useSidbarHooks from '../sideBar/sidbar.hooks'; // Make sure to use the hook properly

const drawerWidth = 220; // Full width of the sidebar
const minimizedWidth = 0; // Width of the minimized sidebar

interface DrawerComponentProps {
    open: boolean;
    handleDrawerToggle: () => void;
}

const AppBarComponent = ({ open, handleDrawerToggle }: DrawerComponentProps) => {


    // Styles for the AppBar that depend on the sidebar state
    const appBarStyle = {
        marginLeft: open ? drawerWidth : minimizedWidth, // Adjust based on the sidebar state
        width: open ? `calc(100% - ${drawerWidth}px)` : `calc(100% - ${minimizedWidth}px)`,
        transition: 'margin 0.3s ease, width 0.3s ease',
    };

    return (
        <AppBar position="fixed" style={appBarStyle}>
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerToggle} // This should toggle the open state
                >
                    <MenuIcon />
                </IconButton>
                appBar
            </Toolbar>
        </AppBar>
    );
};

export default AppBarComponent;
