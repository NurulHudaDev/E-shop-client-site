import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import { IoMdClose } from "react-icons/io";

const Home = () => {

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
                                    <h2 key={item.id}>{item.name}</h2>
                                ))
                            }
                        </hi>
                    </h3>
                </div>
            </dialog>

            <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    guns.map((gun) => (
                        <Card key={gun.id} data={gun} handleAddToCard={handleAddToCard}></Card>
                    ))}
            </div>
        </div>
    );
};

export default Home;