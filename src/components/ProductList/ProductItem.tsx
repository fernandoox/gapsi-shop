import React from "react";
import { Product } from "../../models/Product";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator"; // Importar el ícono de drag

type ProductItemProps = {
  product: Product;
  onDragStart: (e: React.DragEvent) => void;
};

const ProductItem: React.FC<ProductItemProps> = ({ product, onDragStart }) => {
  return (
    <Card
      sx={{ display: "flex", width: "100%", maxWidth: 800, mb: 2 }}
      draggable
      onDragStart={onDragStart}
    >
      <CardMedia
        component="img"
        sx={{ width: 180, height: 180 }}
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
          <Typography variant="body1">{product.name}</Typography>
          <Typography variant="body2" color="grey">
            ${product.price}
          </Typography>
          <Typography variant="body1" color={product.inStock ? "green" : "red"}>
            {product.inStock ? "In Stock" : "Out of Stock"}
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
        <Tooltip title="Arrastra el producto al carrito" arrow>
          <IconButton>
            <DragIndicatorIcon sx={{ color: "gray" }} />
          </IconButton>
        </Tooltip>
      </Box>
    </Card>
  );
};

export default ProductItem;
