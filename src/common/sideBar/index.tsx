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

interface DrawerComponentProps {
  open: boolean;
  handleDrawerToggle: () => void;
}

const SideBar = ({ open, handleDrawerToggle }: DrawerComponentProps) => {
  const { data: session } = useSession();
  if (!session) {
    redirect("/login");
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
      <img src={session.user?.image || ""} alt="User Profile" />
    </Drawer>
  );
};

export default SideBar;
