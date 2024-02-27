import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [products])

    console.log(products)
    return (
        <div className='grid md:grid-cols-3 gap-10'>
            {products.map((pd) => (
                <SingleProduct key={pd.id} product={pd}></SingleProduct>
            ))}
        </div>
    );
};

export default AllProducts;