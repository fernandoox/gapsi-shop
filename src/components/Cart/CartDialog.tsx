import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import { Product } from "../../models/Product";
import CartItem from "./CartItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type CartDialogProps = {
  open: boolean;
  onClose: () => void;
  cart: Product[];
  onRemove: (productId: string) => void;
};

const CartDialog: React.FC<CartDialogProps> = ({
  open,
  onClose,
  cart,
  onRemove,
}) => {
  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
        <ShoppingCartIcon />
        <span> Carrito de compras</span>
      </DialogTitle>
      <DialogContent dividers>
        {cart.length === 0 ? (
          <Typography variant="body1">El carrito está vacío.</Typography>
        ) : (
          cart.map((product) => (
            <CartItem key={product.id} product={product} onRemove={onRemove} />
          ))
        )}
      </DialogContent>
      <DialogActions>
        <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 2 }}>
          Total: ${getTotalPrice()}
        </Typography>
        <Button onClick={onClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CartDialog;
