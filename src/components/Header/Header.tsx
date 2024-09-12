import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import logo from "../../assets/logo.png";

const Header: React.FC = () => {
  const handleReset = () => {
    window.location.reload();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "lightgray", padding: 1 }}>
      <Toolbar>
        <img src={logo} alt="Gapsi Logo" />

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "darkslategray" }}
        >
          e-Commerce Gapsi
        </Typography>

        <IconButton onClick={handleReset}>
          <RestartAltIcon />
        </IconButton>

        <IconButton>
          <ShoppingCartIcon />
          Arrasta productos aqui
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
