import { useState } from "react";

function Card({ name, role, bio, avatar }) {
    const [likes, setLikes] = useState(0);
    const HandleClick = () => {
        setLikes(likes + 1);
    };

    return (
        <div className="card">
            <img className="card-avatar" src={avatar} alt={name} />
            <div className="card-info">
                <p className="card-nama">Nama : {name}</p>
                <p className="card-role">Role : {role}</p>
                <p className="card-bio">Bio : {bio}</p>
            </div>
            <div className="like-container">
                <button className="like-btn" onClick={HandleClick}>Suka</button>
                <p className="like-counter">{likes}</p>
            </div>
        </div>
    );
}

export default Card;