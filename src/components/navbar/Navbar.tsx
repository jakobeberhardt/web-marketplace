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
  Collapse,
} from "@mui/material";
import {
  People,
  Campaign,
  LocalShipping,
  Home,
  ExpandMore,
  ExpandLess,
  HourglassDisabled,
  AccessTime,
  HourglassEmpty,
} from "@mui/icons-material";
import Logo from "./NeoCargoLogo.png";
import { Link, Path } from "react-router-dom";
import { useState, ReactNode } from "react";
import axios from "axios";
import { useGlobalState, GlobalStateInterface } from "../GlobalStateProvider";
import UserSidebar from "./UserSidebar";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

type Props = {
  title: string;
  children?: ReactNode;
};

function register(username: String, password: String) {
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/api/v1/auth/register`,
      { username: username, password: password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .catch(console.log);
}

async function login(
  username: String,
  password: String,
  submitFunction: Function,
  setShow: Function,
  setSnack: Function,
  setSnackError: Function
) {
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/api/v1/auth/login`,
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
    .then((response) => {
      submitFunction(response.data);
      setShow((prev: Boolean) => !prev);
      setSnack(true);
    })
    .catch((err) => {
      console.log(err);
      setSnackError(true);
    });
}

const Navbar = ({ children }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setState } = useGlobalState();
  const [openSnack, setSnack] = useState(false);
  const [show, setShow] = useState(true);
  const [openSnackError, setSnackError] = useState(false);

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
    login(username, password, submitFunction, setShow, setSnack, setSnackError);
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
  const handleSnackbarErrorClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackError(false);
  };

  const menuItem = [
    {
      path: "/",
      name: "Start",
      icon: <Home />,
    },
    {
      path: "/allowlist",
      name: "Bieterkreis",
      icon: <People />,
    },
    {
      name: "Meine Ausschreibungen",
      icon: <LocalShipping />,
      children: [
        {
          path: "/shipments/active",
          name: "Laufende",
          icon: <AccessTime />,
        },
        {
          path: "/shipments/revoked",
          name: "Pausierte",
          icon: <HourglassEmpty />,
        },
        {
          path: "/shipments/finished",
          name: "Beendete",
          icon: <HourglassDisabled />,
        },
      ],
    },
    {
      name: "Meine Gebote",
      icon: <Campaign />,
      children: [
        {
          path: "/offers/active",
          name: "Laufende",
          icon: <AccessTime />,
        },
        {
          path: "/offers/finished",
          name: "Beendete",
          icon: <HourglassEmpty />,
        },
      ],
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
                type="password"
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
      <Snackbar
        open={openSnackError}
        autoHideDuration={6000}
        onClose={handleSnackbarErrorClose}
      >
        <Alert
          onClose={handleSnackbarErrorClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          Login mit dem Nutzer {username} ist fehlgeschlagen !
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
              <NavbarItem
                path={item.path}
                name={item.name}
                icon={item.icon}
                children={item.children || []}
              />
            ))}
          </List>
          <UserSidebar userName={username} />
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

function NavbarItem(props: {
  name: String;
  path: String | undefined;
  icon: ReactJSXElement;
  children: { name: String; path: String; icon: ReactJSXElement }[];
}) {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  if (props.children.length === 0 && !!props.path) {
    return (
      <Link
        key={props.name as React.Key}
        to={props.path as unknown as Partial<Path>}
        style={{
          textDecoration: "none",
        }}
      >
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>{props.icon}</ListItemIcon>
          <ListItemText
            style={{
              color: "white",
            }}
          >
            {props.name}
          </ListItemText>
        </ListItemButton>
      </Link>
    );
  } else {
    return (
      <>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>{props.icon}</ListItemIcon>
          <ListItemText
            primary={props.name}
            style={{
              color: "white",
            }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {props.children.map((element) => (
              <Link
                key={element.name as React.Key}
                to={element.path as unknown as Partial<Path>}
                style={{
                  textDecoration: "none",
                }}
              >
                <ListItemButton
                  selected={true}
                  onClick={(event) => handleListItemClick(event, 1)}
                >
                  <ListItemIcon>{element.icon}</ListItemIcon>
                  <ListItemText
                    style={{
                      color: "black",
                    }}
                  >
                    {element.name}
                  </ListItemText>
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Collapse>
      </>
    );
  }
}

export default Navbar;
