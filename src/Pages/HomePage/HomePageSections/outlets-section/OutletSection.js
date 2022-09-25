import React from 'react';
import './OutletSection.css';

const OutletSection = () => {
  return (
    <>
    <div className='outletSection-container'>
      <h2>Outlet Types</h2>
      <p>TMBill’s Restaurant Management POS is built for all types of restaurant sizes and formats from single outlets to 100+ outlet chains. Select your format to see how TMBill can help you run better.</p>
      <div className="outlet-cards">

        <div className="outlet-card">
           <img src="https://tmbill.com/img/outlet/tmbill_for_qsr.png" alt="outlet" />
           <div className="outlet-card-text">QSR</div>
        </div>

        <div className="outlet-card">
           <img src="https://tmbill.com/img/outlet/tmbill_for_dine_in.png" alt="outlet" />
           <div className="outlet-card-text">Dine In</div>
        </div>

        <div className="outlet-card">
           <img src="https://tmbill.com/img/outlet/tmbill_for_cafe.png" alt="outlet" />
           <div className="outlet-card-text">Cafes</div>
        </div>

        <div className="outlet-card">
           <img src="https://tmbill.com/img/outlet/tmbill_for_cloud_kitchen.png" alt="outlet" />
           <div className="outlet-card-text">Cloud Kitchens</div>
        </div>

        <div className="outlet-card">
           <img src="https://tmbill.com/img/outlet/tmbill_for_food_truck.png" alt="outlet" />
           <div className="outlet-card-text">Food Trucks</div>
        </div>

        <div className="outlet-card">
           <img src="https://tmbill.com/img/outlet/tmbill_for_Bakeries.png" alt="outlet" />
           <div className="outlet-card-text">Bakaries</div>
        </div>

        <div className="outlet-card">
           <img src="https://tmbill.com/img/outlet/tmbill_for_ice_cream.png" alt="outlet" />
           <div className="outlet-card-text">Ice Cream</div>
        </div>

        <div className="outlet-card">
           <img src="https://tmbill.com/img/outlet/tmbill_for_Pubs_bars.png" alt="outlet" />
           <div className="outlet-card-text">Pubs & Bars</div>
        </div>

      </div>
    </div>
    <div className="social-media-partners">
       <h2>From The Press & Media</h2>
       <div className="media-cards">
        <div className="media-card">
          <img src="https://tmbill.com/img/media/1.png" alt="media1" />
        </div>

        <div className="media-card">
          <img src="https://tmbill.com/img/media/2.png" alt="media2" />
        </div>

        <div className="media-card">
          <img src="https://tmbill.com/img/media/3.jfif" alt="media3" />
        </div>
       </div>
    </div>
    <div className="happy-clients">
      <h2>Happy Clients</h2>
      <img src="https://tmbill.com/img/happy-client/tmbill_one_bite.jpg" alt="one-bite" />
      <div className="content">
      I would definitely recommend this software to all the store / outlets / restaurants as we  are already using it in 100+ outlets. TMBill team is so co-operative &  provides extremely satisfying services.
      </div>
      <div className="author">MR Abhishek</div>
      <div className="author-post">Co-Founder</div>
      <div className="company-name">OneBite</div>
    </div>
    </>
  )
}

export default OutletSection