import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import { IoMdClose } from "react-icons/io";
import ShopModel from '../../ShopModel/ShopModel';

const Home = ({ setCardCount1 }) => {

    const [guns, setGuns] = useState([]);
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setGuns(data))
    }, []);

    const handleAddToCard = (gun) => {
        const newCard = [...card, gun];
        setCard(newCard);
    }

    let total = 0;
    for (const product of card) {
        total = total + product.price
    }

    const handleClearCart = () => {
        setCard([]);
        clearLocalStorage();
    };

    const handleDelete = (deletingCard) =>{
        const newCard = card.filter((cards) => cards !== deletingCard);
        setCard(newCard);
    }


    return (
        <div>
            <Banner></Banner>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn"><IoMdClose /></button>
                        </form>
                    </div>
                    <h3 className="font-bold text-lg">
                        <hi>
                            {
                                card.map((item) => (
                                    <ShopModel key={item.id} item={item} handleDelete={handleDelete}></ShopModel>
                                ))
                            }
                        </hi>
                    </h3>
                    <div>
                        <h1 className='font-bold'>Order Summary</h1>
                        <h2>Total Price: $ {total}</h2>
                        <h2>Total Shipping: $</h2>
                        <h2>Tax: $</h2>
                        <h2 className='font-bold'>Grand Total: $</h2>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy</button>
                        <button onClick={handleClearCart} className="btn btn-ghost">All Delete</button>
                    </div>
                </div>
            </dialog>

            <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    guns.map((gun) => (
                        <Card key={gun.id} data={gun} handleAddToCard={handleAddToCard} setCardCount2={setCardCount1}></Card>
                    ))}
            </div>
        </div>
    );
};

export default Home;