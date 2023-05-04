import React, {useContext} from 'react';

//import product context

import {ProductContext} from '../contexts/ProductContext'
import Product from '../components/Product'


import Hero from '../components/Hero'
const Home = () => {
  //get products from product context
  const {products} = useContext(ProductContext);

    // console.log(products);

  //get only men's and women's clothiing category
  const filtererdProducts = products.filter(item=>{
    return(
      item.category === "Men's Clothing " || item.category ==="women's clothing"
  );
  });
  // console.log(filtererdProducts);
  return <div>
    <section className='py-16'>
      <div className="container mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm max-auto md:max-w-none md:mx-0'>
          {filtererdProducts.map(product =>{
            return (
            // <div className='w-full h-[300px] bg-pink-200' 
            // key={product.id}>{product.title}</div>);
              <Product product={product} key={product.id}/>
            );
          })}
        </div>

      </div>
    </section>

  </div>;
};

export default Home;
