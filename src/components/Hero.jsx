import React from "react"
// import HeroImage from "/images/photo-grid.png"
import './Hero.css'

export default function Hero() {
    return (
        <section className="hero">
            <img src="/images/photo-grid.png" alt="Hero Image" className="hero--image" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts--all without leaving home</p>
        </section>
    )
}