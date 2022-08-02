import React from "react";
import "./hero.css";
function Hero() {
  return (
    <div className="hero-main">
      <div className="hero-inner-container">
        <h1 className="hero-header">Unlimited movies, TV shows, and more.</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input type="email" placeholder="Email address" />
        <button>Get Started &gt;</button>
      </div>
    </div>
  );
}

export default Hero;
