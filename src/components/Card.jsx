import "./Card.css";
import { useState } from "react";

function Card({ nama, role, bio, avatar }) {
    const [likes, setLikes] = useState(0);
    const HandleClick = () => {
        setLikes(likes + 1);
    }
    return (
    <div className="flex flex-col items-center text-center">
        <div className="container">
            <img className="w-44 h-44 object-cover rounded-full" src={avatar} alt="" />
            <p className="font-bold text-slate-900 text-lg">Nama : {nama} </p>
            <p className="text-slate-700 text-base">Role : {role} </p>
            <p className="text-slate-600 text-sm">Bio : {bio} </p>
        </div>
        <div className="like-container">
            <button className="like.btn" onClick={HandleClick}>Suka</button>
            <p className="like.counter">{likes}</p>
        </div>
        </div>
    )
}
export default Card;