// Importamos las bibliotecas necesarias
import React, { useState } from 'react';

// Definimos nuestro componente
const ProductDetail = () => {
  // Datos de ejemplo del producto
  const product = {
    name: 'Producto Ejemplo',
    price: 19.99,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Rojo', 'Verde', 'Azul'],
    images: ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg'],
  };

  // Estado para manejar el talle seleccionado
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  // Estado para manejar el color seleccionado
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  // Función para manejar el cambio de talle
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  // Función para manejar el cambio de color
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  // Función para agregar al carrito
  const addToCart = () => {
    // Lógica para agregar al carrito
    console.log('Agregado al carrito:', product.name);
  };

  // Función para agregar a favoritos
  const addToFavorites = () => {
    // Lógica para agregar a favoritos
    console.log('Agregado a favoritos:', product.name);
  };

  return (
    <div className="product-detail">
      <div className="image-carousel">
        {/* Aquí puedes implementar un carrusel de imágenes */}
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`Imagen ${index}`} />
        ))}
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>Precio: ${product.price}</p>
        <label>Talle:</label>
        <select value={selectedSize} onChange={handleSizeChange}>
          {product.sizes.map((size, index) => (
            <option key={index} value={size}>
              {size}
            </option>
          ))}
        </select>
        <label>Color:</label>
        <select value={selectedColor} onChange={handleColorChange}>
          {product.colors.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>
        <button onClick={addToCart}>Agregar al Carrito</button>
        <button onClick={addToFavorites}>Agregar a Favoritos</button>
      </div>
    </div>
  );
};

export default ProductDetail;
