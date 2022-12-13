import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  ListItemButton,
} from "@mui/material";
import Bidding from "../../types/Bidding";
import { List, Typography, Button } from "@mui/material";
import { Bids } from "./Bids";
import { Bid } from "./Bid";

export default function Gebote(props: {
  item: Bidding;
  view: String;
  setItems: Function;
}) {
  //toggle Function für die Sendung
  const handleClick = () => {};

  return (
    <>
      <Card>
        <CardContent>
          <List
            sx={{
              width: "100%",
              maxWidth: "100%",
              bgcolor: "#9ad6bd",
              borderRadius: "10px",
              alignItems: "center",
              marginBottom: "15px",
            }}
            component="nav"
          >
            <ListItemButton>
              {" "}
              <Typography sx={{ mr: "20px", fontWeight: "700" }}>
                Anzahl Gebote:
              </Typography>
              <div style={{ marginRight: "30px", marginLeft: "10px" }}>
                {props.item.shipment.totalLoadMeters?.toString()} ldm
              </div>
            </ListItemButton>
            <div className="quickinfo" style={{ backgroundColor: "#FFFFFF" }}>
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop p
            </div>

            {props.view === "Offers" && (
              <>
                <Grid>
                  <Bid items={props.item.bids} setItems={props.setItems} />
                </Grid>
              </>
            )}
            {props.view === "Biddings" && (
              <>
                <Grid>
                  <Bids items={props.item.bids} setItems={props.setItems} />
                </Grid>
              </>
            )}
          </List>
        </CardContent>
      </Card>{" "}
    </>
  );
}
