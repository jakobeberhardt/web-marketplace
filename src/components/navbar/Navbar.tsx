import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CampaignIcon from "@mui/icons-material/Campaign";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Home from "@mui/icons-material/Home";
import Logo from "./NeoCargoLogo.png";
import { Link } from "react-router-dom";
import { Drawer, ListItemButton, TextField } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState, ReactNode } from "react";

type Props = {
  title: string;
  children?: ReactNode;
};

const Navbar = ({ children }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  const menuItem = [
    {
      path: "/",
      name: "Start",
      icon: <Home />,
    },
    {
      path: "/shipments",
      name: "Ausschreibungen",
      icon: <LocalShippingIcon />,
    },
    {
      path: "/offers",
      name: "Angebote",
      icon: <CampaignIcon />,
    },
  ];

  const drawerWidth = 240;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar style={{ backgroundColor: "#3a9b57", maxHeight: "7vh" }}>
          <img
            src={Logo}
            alt="NeoCargo"
            style={{
              maxWidth: "250px",
              height: "55px",
              backgroundColor: "white",
              borderRadius: "16px",
              marginLeft: "12px",
              padding: "15px",
            }}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "rgb(117, 185, 137)",
          },
        }}
      >
        <Toolbar />
        <Box
          sx={{
            overflow: "auto",
          }}
        >
          <List style={{ backgroundColor: "#75b989", minHeight: "80vh" }}>
            {menuItem.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  textDecoration: "none",
                }}
              >
                <ListItemButton
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    style={{
                      color: "white",
                    }}
                  >
                    {item.name}
                  </ListItemText>
                </ListItemButton>
              </Link>
            ))}
          </List>
          <div style={{ width: "-webkit-fill-available" }}>
            <TextField
              style={{
                width: "-webkit-fill-available",
                marginLeft: "15px",
                marginRight: "15px",
              }}
              id="outlined-read-only-input"
              label="Username"
              //defaultValue={username}
              InputProps={{
                readOnly: true,
              }}
              color="success"
            />
          </div>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <main>{children}</main>
      </Box>
    </Box>
  );
};

export default Navbar;
