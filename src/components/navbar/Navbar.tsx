import React from 'react';
import CampaignIcon from '@mui/icons-material/Campaign';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Home from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './NeoCargoLogo.png';
import { Link, NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Drawer, ListItemButton } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState, ReactNode } from 'react';

type Props = {
    title: string;
    children?: ReactNode;
};

const Navbar = ({children}: Props) => {

    const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);

  };

  const menuItem=[
      {
          path:"/",
          name:"Home",
          icon:<Home/>,
      },   
      {
          path:"/shipments",
          name:"Shipments",
          icon:<LocalShippingIcon/>,
      },  
      {
          path:"/offers",
          name:"Offers",
          icon:<CampaignIcon/>,
      }    
  ]

    return (
        <div className="container">
        <div className="navbar">
            <div className="top-section">
                <h1 className="logo">
                  <div style={{background: "white"}}>
                   <img src={Logo} alt="NeoCargo" style={{width: "300px", height: "60px", marginTop: "20px", marginLeft: "5px", marginRight: "5px"}}/>
                  </div>
                </h1>
            </div>
          {}
            <List>
              {menuItem.map(item =>(
                <Link key={item.name} to={item.path}>
                <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
                </ListItemButton>
                </Link>
              ))}
              </List>
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Navbar;