import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Navbar from "./Navbar";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 200;

export default function Layout({ navlinks, children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: "none" }}
      >
        <Navbar pages={navlinks?.navbar} profile={navlinks?.profile} />
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box
          sx={{ overflow: "auto", height: "100%", backgroundColor: "#111434" }}
        >
          <CustomDivider />
          <List>
            {navlinks?.sidebar?.map((item, index) => (
              <ListItem disablePadding key={index}>
                <Link to={item.disabled ? "/" : item.link}>
                  <ListItemButton sx={item.disabled ? { opacity: 0.5 } : {}}>
                    <ListItemIcon>
                      <Icon src={`/${item.icon}`} />
                    </ListItemIcon>
                    <ListItemText primary={`${item.text}`} />
                  </ListItemButton>
                  {item.disabled && <InfoText>Comming Soon</InfoText>}
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider variant="middle" sx={{ borderColor: "white" }} />
          <Typography variant="h5" sx={{ color: "white", padding: "10px" }}>
            Catalog
          </Typography>
          <List sx={{ paddingLeft: "30px" }}>
            {navlinks?.catalog?.map((item, index) => (
              <ListItem key={index} disablePadding>
                <Link to={item.link}>
                  <ListItemButton>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}

const Icon = styled("img")(() => ({
  height: "30px",
  width: "30px",
}));

const CustomDivider = styled("div")(() => ({
  height: "4px",

  background:
    "linear-gradient(90deg, rgba(146,0,15,1) 0%, rgba(245,207,67,1) 50%, rgba(146,0,15,1) 100%)",
}));

const InfoText = styled("span")(() => ({
  position: "relative",
  left: "40%",
  top: "-20px",
  backgroundColor: "#00edbd",
  borderRadius: "10px",
  textAlign: "center",
  width: "fit-content",
  paddingLeft: "10px",
  paddingRight: "10px",
  paddingTop: "2px",
  paddingBottom: "2px",
  fontSize: "10px",
  color: "#111434",
}));
