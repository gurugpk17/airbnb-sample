import React from "react"

import Star from "../images/star.png"

export default function card(probs){
    return(
        <div className="card">
            <section className="imag">
                <img src={probs.img} className="img1" />
                <br></br>
                <div className="stats1">
                    <img src={Star} className="star" />
                    <span>{probs.rating}</span>
                    <span className="gray">({probs.pple}) </span>
                    <span className="gray">{probs.country}</span>
                </div>
                <div className="det1">
                    <p>{probs.name}</p>
                    <p className="bold">{probs.dob}</p>
                </div>
                <br></br>
            </section>
        </div>
    )
}
