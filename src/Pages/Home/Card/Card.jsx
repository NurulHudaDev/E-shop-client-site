import React from 'react';

const Card = ({data, handleAddToCard, setCardCount2}) => {

    const {id, img, name} = data;

    return (
        <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions">
            <button onClick={() => handleAddToCard(data)} className="btn btn-primary"><button onClick={setCardCount2}>Add Cord</button></button>
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    );
};

export default Card;