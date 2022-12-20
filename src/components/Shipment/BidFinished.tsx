import { Card, CardContent, List, ListItem, ListItemText } from "@mui/material";
import BidClass from "../../types/Bid";

export function BidFinished(props: { biddingID: String; items: BidClass[] }) {
  return (
    <>
      <Card
        sx={{
          margin: "50px",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
        {!(props.items.length > 0) && (
          <CardContent>
            <List>
              <ListItem>
                <ListItemText primary={`Sie haben kein Gebot abgegeben`} />
              </ListItem>
            </List>
          </CardContent>
        )}
        {/*Display placed bid*/}
        {props.items.length > 0 && (
          <CardContent>
            <List>
              <ListItem>
                <ListItemText
                  primary={`Ihr Gebot: ${props.items[0].value.toString()} €`}
                />
              </ListItem>
            </List>
          </CardContent>
        )}
      </Card>
    </>
  );
}
