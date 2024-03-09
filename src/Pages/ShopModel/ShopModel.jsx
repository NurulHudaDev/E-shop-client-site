import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

const ShopModel = ({ item }) => {

    const { id, img, name, price } = item;

    return (
        <div className="w-full overflow-x-auto">
            <table className="table">
                <tr>
                    <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-24 h-24">
                                    <img src={img} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{name}</div>
                                <div className="text-sm opacity-50">United States</div>
                            </div>
                        </div>
                    </td>
                    <td>{price}</td>
                    <th>
                        <button className="btn btn-ghost size-24"><RiDeleteBin6Line /></button>
                    </th>
                </tr>
            </table>
        </div>
    );
};

export default ShopModel;