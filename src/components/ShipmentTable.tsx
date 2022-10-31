import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material'
import { getShipments } from "../service/ShipmentService";
import Shipment from "../types/Shipment";

export default function ShipmentTable() {
    let rows: Shipment[] = [];
  
    function fetchShipments() {
      fetch('http://localhost:8080/contracts')
        .then(res => res.json())
        .then(data => {
          console.log("in test: " + data)
          rows.push(... data)
        })
    }

      fetchShipments()
      setTimeout(() => console.log("Timeout"), 0)

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
                  <TableCell align="right">Test</TableCell>
                  <TableCell align="right">{row.pickupReference}</TableCell>
                  <TableCell align="right">{row.deliveryReference}</TableCell>
                  <TableCell align="right">Test</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}