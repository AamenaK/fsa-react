import ProductItem from "./ProductItem";

const ProductList = () => {
    const products = [
        {id:1, brand: 'Apple', model:'Iphone 13', inStock: true, price:1000, img: 'https://m.media-amazon.com/images/I/61l9ppRIiqL._SX522_.jpg'},
        {id:2, brand: 'Apple', model:'Iphone 12', inStock: false, price:900, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000'},
        {id:3, brand: 'Apple', model:'Iphone 12 Max', inStock: true, price:1200, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MHLE3?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1601149640000'}
    ];

    return <div>
        {products.map(item => <ProductItem key={item.id} product={item} />)}
    </div>
}

export default ProductList;
