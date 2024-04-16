import React from 'react'
import grid from '../assets/images/photo-grid.png'

function Hero() {
    return(
        <section className='hero'>
            <img src={grid} className='hero--grid' />
            <h1 className='hero--title'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home</p>
        </section>
    )
}

export default Hero