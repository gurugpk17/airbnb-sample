import React from "react"
import ReactLogo from "../images/grid.png"

export default function Body() {
    return(
        <div className="hero">
            <img src={ReactLogo} className="grid"/>
            <h1>Online Experiences</h1>
            <p>The spread parameter defines the spread radius. A positive value increases the size of the shadow, a negative value decreases the size of the shadow.</p>
        </div>   
    )
  }
  