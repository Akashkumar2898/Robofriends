import React from "react";

function Card({name,id,email})
{
    return(
        <div className="tc bg-light-green dib br3 pa3 ma3 grow shadow-4">
            <img alt ='Robots' src={`https://robohash.org/${id}?100x100`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card;
