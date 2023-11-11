'use client'
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'; // Importing Menu icon
import sidbarHooks from "./sidbar.hooks";

interface DrawerComponentProps {
    open: boolean;
    handleDrawerClose: () => void;
}

const DrawerComponent = ({ open, handleDrawerClose }: DrawerComponentProps) => {
    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={open}
        >
            {/* Your drawer content */}
            <IconButton onClick={handleDrawerClose}>
                <MenuIcon /> {/* Icon for closing the drawer */}
            </IconButton>
            drawer
        </Drawer>
    );
}

const Sidbar = () => {
    const { open, handleDrawerOpen, handleDrawerClose } = sidbarHooks();
    return (
        <div>
            <IconButton onClick={handleDrawerOpen}>
                <MenuIcon /> {/* Icon for opening the drawer */}
            </IconButton>
            <DrawerComponent open={open} handleDrawerClose={handleDrawerClose} />
        </div>
    );
}

export default Sidbar;
