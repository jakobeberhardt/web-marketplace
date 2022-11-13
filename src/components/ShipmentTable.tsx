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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function TableContent({ items }: any) {
  return (
    <>
      {items.map((item: any) => (
        <TableRow
          key={item.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{item.shipment.label}</Typography>
            </AccordionSummary>
            <AccordionDetails></AccordionDetails>
          </Accordion>
        </TableRow>
      ))}
    </>
  );
}

export default function ShipmentTable() {
  const [items, setItems] = useState([]);
  const [open, setOpen] = React.useState(true);

  //toggle funktion für die Sendung
  const handleClick = () => {
    setOpen(!open);
  };

  //api call für die Bidding Objekte
  useEffect(() => {
    fetch("mock-shipment.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <>
      <TableBody>{items && <TableContent items={items} />}</TableBody>

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
              <ListItemIcon>inbox</ListItemIcon>
              <ListItemText primary="Inbox" />
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
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div"></Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          adjective
                        </Typography>
                        <Typography variant="body2">
                          well meaning and kindly.
                          <br />
                          {'"a benevolent smile"'}
                        </Typography>
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
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="black"
                          gutterBottom
                          bgcolor={"#a9a9a9"}
                        >
                          Beladeort
                        </Typography>
                        <Typography variant="h5" component="div"></Typography>

                        <Typography>Referenz:</Typography>
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
                        <Typography>Status:</Typography>
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
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="black"
                          gutterBottom
                          bgcolor={"#a9a9a9"}
                        >
                          Entladeort
                        </Typography>

                        <Typography>Referenz:</Typography>
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

                        <Typography>Status:</Typography>
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
