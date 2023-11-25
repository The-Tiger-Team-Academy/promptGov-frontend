import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from '@mui/icons-material/Login';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { redirect } from "next/navigation";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from 'next/image'
import { NextRouter, useRouter } from "next/router";
import signOut from "@/module/payment/services/signOut";

interface DrawerComponentProps {
  open: boolean;
  handleDrawerToggle: () => void;
}

const NavigatToPages = (router: NextRouter, path: string) => {
  switch (path) {
    case 'home':
      router.push('/')
      break;
    case 'payment':
      router.push('/payment')
      break;
    case 'createDocuments':
      router.push('/createDocuments')
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
    alert("Logout success")
  }
  // const { data: session } = useSession();

  // TODO: Please router.push('/login')
  // if (!session) {
  //   redirect("/login");
  // }

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Img, setImg] = useState("");
  const [Result, setResult] = useState("");

  // const userName = session?.user?.name || "name";
  // const userEmail = session?.user?.email || "email";
  // const userImage = session?.user?.image || "image";

  // useEffect(() => {
  //   if (session) {
  //     setName(userName);
  //     setEmail(userEmail);
  //     setImg(userImage);
  //   }
  // }, [session]);

  // useEffect(() => {
  //   if (Name && Email && Img) {
  //     handlePostRequest();
  //   }
  // }, [Name, Email, Img]);

  const handlePostRequest = async () => {
    const url = "http://localhost:8000/votes/";
    const data = { name: Name, email: Email, img: Img };

    try {
      const result = await axios.post(url, data);
      setResult(result.data);
    } catch (error) {
      console.error("There was an error making the POST request:", error);
    }
  };

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
          {/* Login */}
          <ListItem button onClick={() => NavigatToPages(router, "login")}>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            {open && <ListItemText primary="login" />}
          </ListItem>
          {/* Logout */}
          <ListItem button onClick={signOutuser}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Logout" />}
          </ListItem>
        </List>
      </div>
      {/* <a href="#">{session?.user?.name || "name"}</a>
      <a href="#">{session?.user?.email || "email"}</a>
      <img src={session?.user?.image || "image"} alt="User Profile" /> */}
    </Drawer>
  );
};

export default SideBar;
