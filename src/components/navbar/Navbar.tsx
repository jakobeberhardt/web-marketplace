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
import {
  Drawer,
  ListItemButton,
  Button,
  Input,
  Typography,
} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState, ReactNode } from "react";
import axios from "axios";
import { useGlobalState, GlobalStateInterface } from "../GlobalStateProvider";

type Props = {
  title: string;
  children?: ReactNode;
};

function register(username: String, password: String) {
  axios
    .post(
      "https://api.jeberhardt.dev/api/v1/auth/register",
      { username: username, password: password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((data) => console.log(data.data.accessToken))
    .catch(console.log);
}

function login(username: String, password: String, submitFunction: Function) {
  axios
    .post(
      "https://api.jeberhardt.dev/api/v1/auth/login",
      {
        username: username,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((data) => {
      submitFunction(data.data);
    })
    .catch(console.log);
}

const Navbar = ({ children }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setState } = useGlobalState();

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  const submitFunction = (data: Partial<GlobalStateInterface>) => {
    setState((prev) => ({ ...prev, ...data }));
  };

  const handleChangeUsername = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
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
        <Toolbar style={{ backgroundColor: "#3a9b57", maxHeight: "7vh" }}>
          <img
            src={Logo}
            alt="NeoCargo"
            style={{
              maxWidth: "250px",
              height: "55px",
              backgroundColor: "white",
              borderRadius: "16px",
              marginLeft: "35px",
              padding: "15px",
            }}
          />
          <div style={{ marginLeft: "auto", marginRight: 0 }}>
            <Input
              placeholder="Username"
              value={username}
              onChange={handleChangeUsername}
            />
            <Input
              placeholder="Password"
              value={password}
              onChange={handleChangePassword}
            />{" "}
            <Button
              variant="contained"
              onClick={() => login(username, password, submitFunction)}
              style={{ backgroundColor: "black", margin: "5px" }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              onClick={() => register(username, password)}
              style={{ backgroundColor: "black", margin: "5px" }}
            >
              Register
            </Button>
          </div>
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
        <Box
          sx={{
            overflow: "auto",
          }}
        >
          <List style={{ backgroundColor: "#75b989", minHeight: "93vh" }}>
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
          <Typography>Username: {username}</Typography>
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
