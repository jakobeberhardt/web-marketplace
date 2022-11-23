import * as React from "react";
import {
  Box,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Drawer,
  ListItemButton,
  Button,
  Input,
  Snackbar,
  Alert,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { People, Campaign, LocalShipping, Home } from "@mui/icons-material";
import Logo from "./NeoCargoLogo.png";
import { Link } from "react-router-dom";
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
  const [openSnack, setSnack] = React.useState(false);
  const [show, setShow] = useState(true);

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

  const loginButtonClick = () => {
    login(username, password, submitFunction);
    setShow((prev) => !prev);
    setSnack(true);
  };

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnack(false);
  };

  const menuItem = [
    {
      path: "/",
      name: "Start",
      icon: <Home />,
    },
    {
      path: "/whitelist",
      name: "Bieterkreis",
      icon: <People />,
    },
    {
      path: "/shipments",
      name: "Ausschreibungen",
      icon: <LocalShipping />,
    },
    {
      path: "/offers",
      name: "Angebote",
      icon: <Campaign />,
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
          <div style={{ marginLeft: "auto", marginRight: 0 }}>
            <div style={{ display: show ? "flex" : "none" }}>
              <Input
                placeholder="Username"
                value={username}
                onChange={handleChangeUsername}
              />
              <Input
                placeholder="Passwort"
                value={password}
                onChange={handleChangePassword}
              />{" "}
              <Button
                variant="contained"
                onClick={() => loginButtonClick()}
                style={{
                  backgroundColor: "black",
                  margin: "5px",
                }}
              >
                Einloggen
              </Button>
              <Button
                variant="contained"
                onClick={() => register(username, password)}
                style={{ backgroundColor: "black", margin: "5px" }}
              >
                Registrieren
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Snackbar
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Du bist erfolgreich eingeloggt, {username} !
        </Alert>
      </Snackbar>
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
          <div
            style={{
              width: "-webkit-fill-available",
              display: show ? "none" : "flex",
            }}
          ></div>
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
