import { data } from '../data';
import { MdFavoriteBorder } from "react-icons/md";


export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

	return (
		<div className='container-items'>
			{data.map(product => (
				<div className='item' key={product.id}>
					<figure>
						<img src={product.img} alt={product.nameProduct} />
					</figure>
					<div className='info-product'>
						<h2>{product.nameProduct}</h2>
                        <p className='desc'>{product.desc}</p>
						<p className='price'>${product.price}</p>
						<div className='btn-container'>
						  <button onClick={() => onAddProduct(product)}>Ver Producto</button>
						  <button className='btn-fav'><MdFavoriteBorder /></button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};