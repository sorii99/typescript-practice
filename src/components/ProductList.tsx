import React, { useEffect, useState } from 'react';
import { getProducts } from '../controllers/productController';
import Product from './Product';

interface ProductInterface {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: object,
    title: string
}

const ProductList = (): JSX.Element => {

    const [product, setProduct] = useState<ProductInterface[]>([]);

    useEffect(() => {
        getProducts()
            .then((r) => setProduct(r.data))
            .catch((e) => console.log(e));
    }, [])

    return (
        <>{product.length === 0
            ?
            "Loading..."
            :
            <div className='mt-4 grid grid-cols-3 md:grid-cols-5 gap-2'>
                {product.map((product: ProductInterface, i: number): JSX.Element =>
                    <Product
                        key={i}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                    />
                )}
            </div>
        }</>
    );
}

export default ProductList