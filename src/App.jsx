import React from "react"
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
// import katie from "../public/images/katie-zaferes.png"

import data from "./data.js"

export default function App() {
    const cards = data.map(item => {
        return <Card 
            key={item.id}
            // item={item}
            {...item}
        />
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}
