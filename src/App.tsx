import * as React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button} from '@mui/material'
import Shipment from './types/Shipment';
import { getShipments } from './service/ShipmentService'

function App() {

  const fetchAllShipments = () => {
    getShipments()
      .then(shipments => {
        console.log(shipments);
      })
  }

  const rows = [
    new Shipment({id: 1, tmsReference: "Test", position: 123, label: "Test", pickupReference: "Test", deliveryReference: "Test", totalItemCount: 5, totalWeight: 0, totalVolume: 0, totalLoadMeters: 0})
    //new Shipment(fetchAllShipments())
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">TMSReference</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">PickupReference</TableCell>
            <TableCell align="right">Delivery Reference</TableCell>
            <TableCell align="right">TotalItemCount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.tmsReference}</TableCell>
              <TableCell align="right">{row.position.toString()}</TableCell>
              <TableCell align="right">{row.pickupReference}</TableCell>
              <TableCell align="right">{row.deliveryReference}</TableCell>
              <TableCell align="right">{row.totalItemCount?.toString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default App;
