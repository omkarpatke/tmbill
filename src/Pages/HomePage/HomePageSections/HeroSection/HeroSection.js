import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className='hero-section-container'>
        <div className="content">
           <h1>Reopen Restaurants with <span>Technology! </span></h1>
           <p>Unlock Your Restaurant With Digital Ordering !</p>
           <div className="buttons">
            <div className="button demo-btn">Take A Demo</div>
            <div className="button read-story-btn">Read Our Story</div>
           </div>
        </div>
        <div className="img">
            <img className='all-in-one-thumbnail' src="https://tmbill.com/img/tmbill_all_in_one_restaurant_pos.png" alt="all-in-one-thumbnail" />
        </div>
    </div>
  )
}

export default HeroSection