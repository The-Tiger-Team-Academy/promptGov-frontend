import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { redirect } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from 'next/image'

interface DrawerComponentProps {
  open: boolean;
  handleDrawerToggle: () => void;
}

const SideBar = ({ open, handleDrawerToggle }: DrawerComponentProps) => {
  const { data: session } = useSession();
  if (!session) {
    redirect("/login");
  }

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Img, setImg] = useState("");
  const [Result, setResult] = useState("");

  useEffect(() => {
    if (session) {
      setName(session.user.name || "name");
      setEmail(session.user.email || "email");
      setImg(session.user.image || "image");
    }
  }, [session]);
  
  useEffect(() => {
    if (Name && Email && Img) {
      handlePostRequest();
    }
  }, [Name, Email, Img]);

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
          <ListItem button onClick={() => signOut()}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Logout" />}
          </ListItem>
        </List>
      </div>
      <a href="#">{session.user?.name || "name"}</a>
      <a href="#">{session.user?.email || "email"}</a>
      <img  src={session.user?.image || "image"} alt="User Profile" />
    </Drawer>
  );
};

export default SideBar;
