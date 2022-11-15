import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Box,
  Grid,
  CssBaseline,
  Container,
  ListItemIcon,
  List,
  ListItemButton,
  ListSubheader,
  ListItemText,
  Collapse,
  Card,
  CardActions,
  Button,
  CardContent,
  Divider,
} from "@mui/material";
import { useState, useEffect } from "react";
//import AllowedTimeWindow from '../types/AllowedTimeWindow';
//import Contract from '../types/Contracts';
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { spacing } from "@mui/system";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import SyncIcon from "@mui/icons-material/Sync";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import ScaleIcon from "@mui/icons-material/Scale";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
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
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#fafafa", height: "100vh", p: 2 }}>
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
                    <Card sx={{ mt: "30px", mb: "30px", borderRadius: "10px" }}>
                      <CardContent>
                        <Typography variant="body2">
                          Anzahl: <br />
                          Gewicht: <br />
                          Idm: <br />
                          Quadratmeter:
                          <br />
                        </Typography>
                        <LocationOnIcon />
                        <TrendingFlatIcon />
                        <CoronavirusIcon />
                        <SyncIcon />
                        <FoodBankIcon />
                        <ScaleIcon />
                        <ViewInArIcon />
                        <SendIcon />
                        <SpaceBarIcon />
                        <HeightIcon />
                      </CardContent>
                    </Card>{" "}
                  </Grid>
                  <Grid xs={5}>
                    <Card
                      sx={{
                        mt: "30px",
                        mb: "30px",
                        mr: "30px",
                        borderRadius: "10px",
                      }}
                    >
                      <CardContent>
                        <div
                          style={{ borderColor: "black", borderWidth: "4px" }}
                        >
                          <Typography
                            sx={{ fontSize: 20 }}
                            color="black"
                            gutterBottom
                          >
                            Beladeort
                          </Typography>
                          <Divider />
                        </div>
                        <Typography variant="h5" component="div"></Typography>

                        <Typography style={{ paddingTop: "15px" }}>
                          Referenz:
                        </Typography>
                        <Typography
                          sx={{
                            bgcolor: "#e3e3e3",
                            borderRadius: "10px",
                            padding: "5px",
                            margin: "5px",
                          }}
                          variant="body2"
                        >
                          PIK_70528130
                        </Typography>
                        <Typography style={{ paddingTop: "15px" }}>
                          Status:
                        </Typography>
                        <Typography
                          sx={{
                            bgcolor: "#95ef5e",
                            borderRadius: "10px",
                            padding: "5px",
                            margin: "5px",
                          }}
                          variant="body2"
                        >
                          Ankunft:
                        </Typography>
                        <Typography
                          sx={{
                            bgcolor: "#95ef5e",
                            borderRadius: "10px",
                            padding: "5px",
                            margin: "5px",
                          }}
                          variant="body2"
                        >
                          Ladebeginn:
                        </Typography>
                        <Typography
                          sx={{
                            bgcolor: "#95ef5e",
                            borderRadius: "10px",
                            padding: "5px",
                            margin: "5px",
                          }}
                          variant="body2"
                        >
                          Ladeende:
                        </Typography>
                        <Typography
                          sx={{
                            bgcolor: "#95ef5e",
                            borderRadius: "10px",
                            padding: "5px",
                            margin: "5px",
                          }}
                          variant="body2"
                        >
                          Abfahrt:
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid xs={5}>
                    <Card
                      sx={{
                        mt: "30px",
                        mb: "30px",
                        ml: "30px",
                        borderRadius: "10px",
                      }}
                    >
                      <CardContent>
                        <div
                          style={{ borderColor: "black", borderWidth: "4px" }}
                        >
                          <Typography
                            sx={{ fontSize: 20 }}
                            color="black"
                            gutterBottom
                          >
                            Entladeort
                          </Typography>
                          <Divider />
                        </div>

                        <Typography style={{ paddingTop: "15px" }}>
                          Referenz:
                        </Typography>
                        <Typography
                          sx={{
                            bgcolor: "#e3e3e3",
                            borderRadius: "10px",
                            padding: "5px",
                            margin: "5px",
                          }}
                          variant="body2"
                        >
                          DEL_52180246
                        </Typography>

                        <Typography style={{ paddingTop: "15px" }}>
                          Status:
                        </Typography>
                        <Typography
                          sx={{
                            bgcolor: "#e3e3e3",
                            borderRadius: "10px",
                            padding: "5px",
                            margin: "5px",
                          }}
                          variant="body2"
                        >
                          Ankunft:
                        </Typography>
                        <Typography
                          sx={{
                            bgcolor: "#e3e3e3",
                            borderRadius: "10px",
                            padding: "5px",
                            margin: "5px",
                          }}
                          variant="body2"
                        >
                          Ladebeginn:
                        </Typography>
                        <Typography
                          sx={{
                            bgcolor: "#e3e3e3",
                            borderRadius: "10px",
                            padding: "5px",
                            margin: "5px",
                          }}
                          variant="body2"
                        >
                          Ladeende:
                        </Typography>
                        <Typography
                          sx={{
                            bgcolor: "#e3e3e3",
                            borderRadius: "10px",
                            padding: "5px",
                            margin: "5px",
                          }}
                          variant="body2"
                        >
                          Abfahrt:
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </List>
            </Collapse>
          </List>
        </Box>
      </Container>
    </>
  );
}
