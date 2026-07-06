import ProductCard from './ProductCard';
// import {useContext} from 'react';
// import {ProductContext} from '../context/ProductContext';
import { useProducts } from '../context/ProductContext';

const ProductList = () => {
    // const {products, loading, error} = useContext(ProductContext);
    const {products, loading, error} = useProducts();

    return(      
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {loading && <p>Loading...</p>}
            {error && <p className='error'>{error}</p>}
            {products.map((product)=> 
                <ProductCard key={product.id} product={product} />
          )}
        </div>
    )
}

export default ProductList;