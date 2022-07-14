import React from 'react'
import "./hero.css"
function Hero() {
    return (
        <div className='hero-main'>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <input type="email" placeholder='Email address' />
            <button>Get Started &gt;</button>
        </div>
    )
}

export default Hero