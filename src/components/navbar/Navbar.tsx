import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import CampaignIcon from "@mui/icons-material/Campaign";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Home from "@mui/icons-material/Home";
import Logo from "./NeoCargoLogo.png";
import { Link, NavLink } from "react-router-dom";
import { Drawer, ListItemButton } from "@mui/material";
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
      name: "Home",
      icon: <Home />,
    },
    {
      path: "/shipments",
      name: "Shipments",
      icon: <LocalShippingIcon />,
    },
    {
      path: "/offers",
      name: "Offers",
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
        <Toolbar>
          <img
            src={Logo}
            alt="NeoCargo"
            style={{
              width: "300px",
              height: "60px",
              marginTop: "20px",
              marginLeft: "5px",
              marginRight: "5px",
            }}
          />
          <main>{children}</main>

          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
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
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {menuItem.map((item) => (
              <Link key={item.name} to={item.path}>
                <ListItemButton
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>effdfdfsd</Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae su
        </Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
