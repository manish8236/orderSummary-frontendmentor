import React, { FunctionComponent } from 'react';
import musicIcon from '../assets/icon-music.svg';
import heroBanner from '../assets/illustration-hero.svg';
import pattern from '../assets/pattern-background-desktop.svg';

const LandingPage: FunctionComponent = () => {
  return (
    <>
      <img src={pattern} className="pattern_background"></img>
      <div className="container">
        <img src={heroBanner} alt="hero image" className="hero-image" />
        <h3>Order Summary</h3>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <section className="container-credit">
          <article>
            <img
              src={musicIcon}
              alt="music icon"
              className="container-credit_logo"
            />
            <div className="annual_text">
              <h4>Annual Plan</h4>
              <span>$59.99/year</span>
            </div>
          </article>
          <button className="btn-change">Change</button>
        </section>

        <section className="container-btns">
          <button className="btn-pay">Proceed to Payment</button>
          <button className="btn-cancel">Cancel Order</button>
        </section>
      </div>

      <div className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Manish Pal</a>.
      </div>
    </>
  );
};

export default LandingPage;
