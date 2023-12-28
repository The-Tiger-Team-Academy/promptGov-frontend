import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
  } from "@mui/material";
  import HomeIcon from "@mui/icons-material/Home";
  import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
  import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
  import SettingsIcon from "@mui/icons-material/Settings";
  import LogoutIcon from "@mui/icons-material/Logout";
  import React from "react";
  import { NextRouter, useRouter } from "next/router";
  import signOut from "@/module/auth/services/signOut";
  
  interface DrawerComponentProps {
    open: boolean;
    handleDrawerToggle: () => void;
  }
  
  // TODO: This function should be moved to a separate file
  const NavigatToPages = (router: NextRouter, path: string) => {
    switch (path) {
      case 'home':
        router.push('/')
        break;
      case 'payment':
        router.push('/payment')
        break;
      case 'createDocuments':
        router.push('/createDocuments/paperflow')
        break;
      case 'settings':
        router.push('/settings')
        break;
      case 'login':
        router.push('/login')
        break;
      case 'logout':
        router.push('/logout')
        break;
      default:
        break;
    }
  }
  
  const SideBar = ({ open, handleDrawerToggle }: DrawerComponentProps) => {
    const router = useRouter()
  
    const signOutuser = () => {
      signOut();
      router.push('/')
      alert("Do you want to logout")
    }
  
    return (
      <Drawer variant="persistent" anchor="left" open={open}>
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
            <ListItem button onClick={() => NavigatToPages(router, "payment")}>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Payment" />}
            </ListItem>
            {/* Create Document */}
            <ListItem button onClick={() => NavigatToPages(router, "createDocuments")}>
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
            <ListItem button onClick={signOutuser}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Logout" />}
            </ListItem>
          </List>
        </div>
      </Drawer>
    );
  };
  
  export default SideBar;