
import React, { useState } from 'react';


const ProductDetail = () => {
  
  const product = {
    name: 'Producto Ejemplo',
    price: 19.99,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Rojo', 'Verde', 'Azul'],
    images: ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg'],
  };
  
  const productSelected = {
    name: '',
    size: '',
    color:'',
  }
  
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  
  const addToCart = () => {
    productSelected.name = product.name
    productSelected.color = selectedColor
    productSelected.size = selectedSize
    console.log(productSelected)
  };

  
  const addToFavorites = () => {
    console.log('Agregado a favoritos:', product.name);
  };


  return (
    <div className="product-detail">
      <div className="image-carousel">
        {/* carrusel de imágenes */}
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`Imagen ${index}`} />
        ))}
      </div>
      <div className="detail-product">
        <h2>{product.name}</h2>
        <p></p>
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
