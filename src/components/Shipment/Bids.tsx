import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Handshake } from "@mui/icons-material";
import Bid from "../../types/Bid";
import { useGlobalState, GlobalStateInterface } from "../GlobalStateProvider";
import axios from "axios";

function BidItems(props: {
  items: Bid[];
  state: Partial<GlobalStateInterface>;
  setItems: Function;
}) {
  return (
    <>
      {props.items.map((item: Bid) => (
        <ListItem>
          <ListItemText primary={item.value.toString()} />
          <ListItemButton
            onClick={() => acceptOffer(item, props.state, props.setItems)}
          >
            Zuschlag erteilen
            <Handshake />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
}

function acceptOffer(
  item: Bid,
  state: Partial<GlobalStateInterface>,
  setItems: Function
) {
  const data = {
    value: item.value,
    user: item.userId,
    bid: item.id,
  };
  const headers = {
    Authorization: `Bearer ${state.accessToken}`,
    "Content-Type": "application/json",
  };
  axios
    .post(`${process.env.REACT_APP_API_URL}/api/v1/biddings/accept`, data, {
      headers: headers,
    })
    .then((response) => setItems(response));
}

export function Bids(props: { items: Array<Bid>; setItems: Function }) {
  const { state } = useGlobalState();
  return (
    <>
      <Card
        sx={{
          mt: "30px",
          mb: "30px",
          mr: "30px",
          borderRadius: "10px",
        }}
      >
        <CardContent>
          <List>
            <BidItems
              items={props.items}
              state={state}
              setItems={props.setItems}
            />
          </List>
        </CardContent>
      </Card>
    </>
  );
}
