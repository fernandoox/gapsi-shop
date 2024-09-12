import React from "react";
import { Product } from "../../models/Product";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { truncateName } from "../../utils/helpers";

type CartItemProps = {
  product: Product;
  onRemove: (productId: string) => void;
};

const CartItem: React.FC<CartItemProps> = ({ product, onRemove }) => {
  return (
    <Card sx={{ display: "flex", width: "100%", maxWidth: 800, mb: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 150 }}
        image={product.image}
        alt={product.name}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 2,
          flexGrow: 1,
        }}
      >
        <CardContent>
          <Typography variant="body1">{truncateName(product.name)}</Typography>
          <Typography variant="body2" color="grey">
            ${product.price}
          </Typography>
        </CardContent>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <IconButton onClick={() => onRemove(product.id)}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Card>
  );
};

export default CartItem;
