import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

interface DrawerComponentProps {
    open: boolean;
    handleDrawerToggle: () => void;
}

const SideBar = ({ open, handleDrawerToggle }: DrawerComponentProps) => {
    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={open}
        >
            <div>
                <IconButton onClick={handleDrawerToggle}>
                    {/* Icon to toggle the drawer */}
                </IconButton>
                <List>
                    {/* Home */}
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        {open && <ListItemText primary="Home" />}
                    </ListItem>
                    {/* Create Document */}
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleOutlineIcon />
                        </ListItemIcon>
                        {open && <ListItemText primary="Create Document" />}
                    </ListItem>
                    {/* Settings */}
                    <ListItem button>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        {open && <ListItemText primary="Settings" />}
                    </ListItem>
                    {/* Logout */}
                    <ListItem button>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        {open && <ListItemText primary="Logout" />}
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );
}

export default SideBar;
