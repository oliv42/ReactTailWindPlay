import React from "react";

function Profile({count, profile}) {
    console.log('Fonction Profil')
    const liStyle = "px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out"
    return (
        <div>
            <ul className="border border-gray-200 rounded overflow-hidden shadow-md">
                <li className={liStyle}><p className="text-4xl">User ID: {count}</p></li>
                <li className={liStyle}><strong>Nom: </strong>{profile.name}</li>
                <li className={liStyle}><strong>Pseudo: </strong>{profile.username}</li>
                <li className={liStyle}><strong>Email: </strong>{profile.email}</li>
            </ul>
        </div>
    );
}

export default React.memo(Profile);