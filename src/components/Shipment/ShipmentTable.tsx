import * as React from "react";

import Beladeort from "./Beladeort";
import Entladeort from "./Entladeort";
import SendungUebersicht from "./SendungUebersicht";
import {
  Grid,
  CssBaseline,
  Container,
  ListItemIcon,
  List,
  ListItemButton,
  ListSubheader,
  ListItemText,
  Collapse,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SpaceBarIcon from "@mui/icons-material/SpaceBar";
import HeightIcon from "@mui/icons-material/Height";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

/*
function TableContent({ items }: any) {
  const [item, setItem] = useState([]);
  const [data, setData] = useState([]);

  //api call für die Bidding Objekte

  useEffect(() => {
    fetch("mock-shipment.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => console.log(res.json()))
      .then((items) => setItem(item));
  }, []);

  return (
    <div className="App">
      {data &&
        data.length > 0 &&
        data.map((item) => <p>{item.shipment.label}</p>)}
    </div>
  );
}
*/

export default function ShipmentTable() {
  const [open, setOpen] = React.useState(true);

  //toggle funktion für die Sendung
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: "100%",
          bgcolor: "#9ad6bd",
          borderRadius: "10px",
        }}
        component="nav"
      >
        <ListItemButton onClick={handleClick}>
          <SendIcon sx={{ mr: "20px" }} />
          <ListItemText primary="Sendung 14001" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            sx={{
              width: "100%",
              maxWidth: "100%",
              bgcolor: "#ffffff",
            }}
            component="div"
            disablePadding
          >
            <Grid container justifyContent="center">
              <Grid xs={10}>
                <SendungUebersicht />
              </Grid>
              <Grid xs={5}>
                <Beladeort />
              </Grid>
              <Grid xs={5}>
                <Entladeort />
              </Grid>
            </Grid>
          </List>
        </Collapse>
      </List>
    </>
  );
}
