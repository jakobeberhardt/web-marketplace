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
  AccessTime,
  HourglassEmpty,
  Gavel,
} from "@mui/icons-material";
import Logo from "../../assets/NeoCargoLogo.png";
import { Link, Path } from "react-router-dom";
import { useState, ReactNode, useEffect, useCallback } from "react";
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
      `${process.env.REACT_APP_API_URL_LOCAL_AUTH}/api/v1/auth/register`,
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
  setSnackError: Function,
  setCookie: Function
) {
  axios
    .post(
      `${process.env.REACT_APP_API_URL_LOCAL_AUTH}/api/v1/auth/login`,
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
      setShow((prev: Boolean) => false);
      setSnack(true);
      setCookie("username", username, 1);
      setCookie("password", password, 1);
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

  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  const submitFunction = useCallback(
    (data: Partial<GlobalStateInterface>) => {
      setState((prev) => ({ ...prev, ...data }));
    },
    [setState]
  );

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
    login(
      username,
      password,
      submitFunction,
      setShow,
      setSnack,
      setSnackError,
      setCookie
    );
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
      index: 1,
    },
    {
      path: "/allowlist",
      name: "Bieterkreis",
      icon: <People />,
      index: 2,
    },
    {
      name: "Meine Ausschreibungen",
      icon: <LocalShipping />,
      children: [
        {
          path: "/shipments/active",
          name: "Laufend",
          icon: <AccessTime />,
          index: 3,
        },
        {
          path: "/shipments/paused",
          name: "Pausiert",
          icon: <HourglassEmpty />,
          index: 4,
        },
        {
          path: "/shipments/finished",
          name: "Beendet",
          icon: <Gavel />,
          index: 5,
        },
      ],
    },
    {
      name: "Meine Gebote",
      icon: <Campaign />,
      children: [
        {
          path: "/offers/active",
          name: "Laufend",
          icon: <AccessTime />,
          index: 6,
        },
        {
          path: "/offers/paused",
          name: "Pausiert",
          icon: <HourglassEmpty />,
          index: 7,
        },
        {
          path: "/offers/finished",
          name: "Beendet",
          icon: <Gavel />,
          index: 8,
        },
      ],
    },
  ];

  const drawerWidth = 240;

  //Setter and Getter for cookies
  function setCookie(cname: string, cvalue: string, exdays: number) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname: string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  //Immediately login when cookies exist
  useEffect(() => {
    let username = getCookie("username");
    if (username === "") return;

    let password = getCookie("password");

    login(
      username,
      password,
      submitFunction,
      setShow,
      setSnack,
      setSnackError,
      setCookie
    );
  }, [submitFunction, username, password]);

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
          Du bist erfolgreich eingeloggt, {getCookie("username")} !
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
          <List
            style={{
              backgroundColor: "#75b989",
              minHeight: "65vh",
              paddingTop: "unset",
            }}
            sx={{
              // selected and (selected + hover) states
              "&& .Mui-selected, && .Mui-selected:hover": {
                bgcolor: "darkgreen",
                "&, & .MuiListItemIcon-root": {
                  color: "#0000008a",
                },
              },
              // hover states
              "& .MuiListItemButton-root:hover": {
                bgcolor: "#75b989",
                "&, & .MuiListItemIcon-root": {
                  color: "#0000008a",
                },
              },
            }}
          >
            {menuItem.map((item) => (
              <NavbarItem
                path={item.path}
                name={item.name}
                icon={item.icon}
                selectedIndex={selectedIndex}
                handleListItemClick={handleListItemClick}
                children={item.children || []}
                index={item.index || -1}
              />
            ))}
          </List>
          <UserSidebar userName={getCookie("username")} />
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
  selectedIndex: number;
  handleListItemClick: Function;
  children: {
    name: String;
    path: String;
    icon: ReactJSXElement;
    index: number;
  }[];
  index: number;
}) {
  const [open, setOpen] = React.useState(false);

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
          color: "white",
        }}
      >
        <ListItemButton
          sx={{ backgroundColor: "#3A9B57" }}
          selected={props.index === props.selectedIndex}
          onClick={(event) => props.handleListItemClick(event, props.index)}
        >
          <ListItemIcon>{props.icon}</ListItemIcon>
          <ListItemText>{props.name}</ListItemText>
        </ListItemButton>
      </Link>
    );
  } else {
    return (
      <>
        <ListItemButton
          onClick={handleClick}
          style={{ backgroundColor: "#3A9B57" }}
        >
          <ListItemIcon>{props.icon}</ListItemIcon>
          <ListItemText
            primary={props.name}
            sx={{
              color: "white",
              fontWeight: "700",
            }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse
          sx={{ backgroundColor: "#f4fff759" }}
          in={open}
          timeout="auto"
          unmountOnExit
        >
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
                  selected={element.index === props.selectedIndex}
                  onClick={(
                    event: React.MouseEvent<HTMLDivElement, MouseEvent>
                  ) => props.handleListItemClick(event, element.index)}
                >
                  <ListItemIcon>{element.icon}</ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "white",
                      fontWeight: "400",
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
