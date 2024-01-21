import React, { useEffect, useState } from "react";
// import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./appbar.style";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import { NextRouter, useRouter } from "next/router";
import signOut from "../../module/auth/services/signOut";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { MenuItem, Tooltip } from "@mui/material";

const NavigatToPages = (router: NextRouter, path: string) => {
  switch (path) {
    case "home":
      router.push("/");
      break;
    case "payment":
      router.push("/payment");
      break;
    case "createDocuments":
      router.push("/createDocuments");
      break;
    case "history":
      router.push("/history");
      break;
    case "settings":
      router.push("/settings");
      break;
    case "login":
      router.push("/login");
      break;
    case "logout":
      router.push("/logout");
      break;
    default:
      break;
  }
};

interface CustomButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  icon,
  label,
}) => {
  return (
    <MenuItem color="inherit" onClick={onClick}>
      {icon}
      <Typography
        style={{ marginLeft: "8px", color: "black", fontSize: "14px" }}
      >
        {label}
      </Typography>
    </MenuItem>
  );
};

interface AppBarComponentProps {
  open: boolean;
  router: NextRouter;
}

const AppBarComponent = ({ open }: AppBarComponentProps) => {
  const router = useRouter();
  const appBarStyle = styles();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const goHome = () => {
    router.push("/createDocuments");
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const signOutuser = () => {
    signOut();
    router.push("/");
  };

  const [userImage, setUserImage] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const savedImage = localStorage.getItem("userImage");
    const savedName = localStorage.getItem("userName");
    if (savedImage && savedName) {
      setUserImage(savedImage ?? "");
      setUserName(savedName ?? "");
    }
  }, []);

  return (
    <AppBar position="relative" style={appBarStyle.appBarStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Tooltip title="" onClick={goHome}>
            <Box
              component="img"
              sx={appBarStyle.Logo_xs}
              alt="PromptGov"
              src="https://i.postimg.cc/k41vFCpP/Logo-Prompt-Gov.png"
            />
          </Tooltip>
          <Box sx={appBarStyle.Box_xs}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={appBarStyle.Menu}
            >
              {/* Home */}
              <CustomButton
                onClick={() => NavigatToPages(router, "home")}
                icon={<HomeIcon />}
                label="Home"
              />
              <CustomButton
                onClick={() => NavigatToPages(router, "createDocuments")}
                icon={<AddCircleOutlineIcon />}
                label="Create Document"
              />
              <CustomButton
                onClick={() => NavigatToPages(router, "history")}
                icon={false}
                label="ประวัติการสั่งซื้อ"
              />
            </Menu>
          </Box>
          <Typography
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={appBarStyle.Typography}
          >
            <Box
              component="img"
              sx={appBarStyle.Logo_md}
              alt="PromptGov"
              src="https://i.postimg.cc/k41vFCpP/Logo-Prompt-Gov.png"
            />
          </Typography>
          <Box sx={appBarStyle.Box_md}>
            <CustomButton
              onClick={() => NavigatToPages(router, "createDocuments")}
              icon={false}
              label="Create Document"
            />
            <Box sx={{}}>
              {/* ประวัติการสั่งซื้อ */}
              <CustomButton
                onClick={() => NavigatToPages(router, "history")}
                icon={false}
                label="ประวัติการสั่งซื้อ"
              />
            </Box>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={userName}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar /> */}
                <img
                  style={{ width: "40px", borderRadius: "100%" }}
                  src={userImage}
                  alt=""
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* Settings */}
              <CustomButton
                icon={<SettingsIcon />}
                label="Settings"
                onClick={() => {
                  /* Add your settings logic here */
                }}
              />

              {/* Logout */}
              <CustomButton
                onClick={signOutuser}
                icon={<LogoutIcon />}
                label="Logout"
              />
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarComponent;
