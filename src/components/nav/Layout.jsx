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
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
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
        <Box sx={{ overflow: "auto" }}>
          <List>
            {navlinks?.sidebar?.map((item, index) => (
              <ListItem disablePadding key={index}>
                <Link to={item.link}>
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon src={`/${item.icon}`} />
                    </ListItemIcon>
                    <ListItemText primary={`${item.text}`} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Typography variant="h5" sx={{ padding: "10px" }}>
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
