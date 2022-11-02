import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material'
import { useEffect, useState } from 'react';
//import Contract from '../types/Contracts';

function TableContent({items}:any) {
  return (
    <>
      {items.map((item:any) => (
        <TableRow
          key={item.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align="right">{item.id}</TableCell>
          <TableCell align="right">{item.shipment.id}</TableCell>
          <TableCell align="right">{item.shipment.tmsReference}</TableCell>
          <TableCell align="right">{item.shipment.pickupReference}</TableCell>
          <TableCell align="right">{item.shipment.deliveryReference}</TableCell>
          <TableCell align="right">{item.shipment.label}</TableCell>
        </TableRow>
      ))}
    </>
  )
}

export default function ShipmentTable() {

    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch('https://api.jeberhardt.dev/biddings')
        .then(res => res.json())
        .then(data => setItems(data));
    }, []);

    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Shipment ID</TableCell>
              <TableCell align="right">TMSReference</TableCell>
              <TableCell align="right">PickupReference</TableCell>
              <TableCell align="right">Delivery Reference</TableCell>
              <TableCell align="right">Label</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {items && <TableContent items={items}/>}
          </TableBody>
        </Table>
      </TableContainer>
    );
}