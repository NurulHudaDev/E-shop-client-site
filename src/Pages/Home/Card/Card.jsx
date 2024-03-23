import React from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';

const Card = ({ data, handleAddToCard, setCardCount2 }) => {

  const { id, img, name, price } = data;

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <div className='flex gap-8'>
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">$ {price}</h2>
        </div>
        <div className="card-actions">
          <button onClick={() => handleAddToCard(data)} className="btn btn-primary"><button onClick={setCardCount2}>Add Cord</button></button>
          <ProductDetails></ProductDetails>
        </div>
      </div>  
    </div>
  );
};

export default Card;