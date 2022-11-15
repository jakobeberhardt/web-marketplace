import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useState, useEffect, Key } from "react";
import Bidding from "../types/Bidding";
import axios from "axios";
import { useGlobalState } from "../components/GlobalStateProvider";

function TableContent(props: { items: Bidding[] }) {
  return (
    <>
      {props.items.map((item: Bidding) => (
        <TableRow
          key={item.id as Key}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell align="right">{item.shipment.id}</TableCell>
          <TableCell align="right">{item.shipment.tmsReference}</TableCell>
          <TableCell align="right">{item.shipment.pickupReference}</TableCell>
          <TableCell align="right">{item.shipment.deliveryReference}</TableCell>
          <TableCell align="right">{item.shipment.label}</TableCell>
        </TableRow>
      ))}
    </>
  );
}

export default function ShipmentTable() {
  const [items, setItems] = useState<Bidding[]>([]);
  const { state } = useGlobalState();

  useEffect(() => {
    axios
      .get("https://api.jeberhardt.dev/api/v1/biddings/", {
        headers: {
          Authorization: `Bearer ${state.accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((data) => setItems(data.data));
  }, [state.accessToken]);
  return (
    <>
      <div style={{ padding: "1%", background: "white" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Shipment ID</TableCell>
                <TableCell align="right">TMSReference</TableCell>
                <TableCell align="right">PickupReference</TableCell>
                <TableCell align="right">Delivery Reference</TableCell>
                <TableCell align="right">Label</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{items && <TableContent items={items} />}</TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
