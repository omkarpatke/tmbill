import React from 'react';
import './RestaurantOpening.css';

const RestaurantOpening = () => {
  return (
    <div className='restaurant-opening-container'>
      
      <div className='img-content'>
      <div className="img">
        <img src="https://tmbill.com/img/tmbill_restaurant_operating_system.png" alt="TMBill Operationg System" />
      </div>
      <div className="info-container">
      <div className="content">
        <h2>Restaurant Operating System</h2>
        <p>TMBill is a leading cloud-based end-to-end technology solutions for the Restaurants, Bars, Cafés, QSRs, Ice-cream Shops, Bakeries, and Cake Shops.</p>
        <br />
        <p>TMBill helps all types of food businesses, from a standalone food outlets to a large food chain, manage functions like billing, QR Code Ordering Platform, CRM, Customer Loyalty, Aggregators integrations, Analytics, Inventory, Recipe, and Wastage Management, Centralized Menu Management, Vendor Management and more. We have successfully registered a global presence, with more than 5000+ customers in over 350+ cities and 21+ countries.</p>
        <br />
        <p>We are the first company to provide a complete online cloud POS solution for restaurants on Desktop and Mobile Devices.</p>
      </div>

      <div className="cards">
        <div className="card">
          <h6>Integration</h6>
          <div className="companies-imgs">
            <img src="https://tmbill.com/img/integration/tmbill_swiggy_integration.png" alt="swiggy" />
            <img src="https://tmbill.com/img/integration/tmbill_zomato_integration.png" alt="zomato" />
            <img src="https://tmbill.com/img/integration/tmbill_dunzo_integration.png" alt="dunzo" />
            <img src="https://tmbill.com/img/integration/tmbill_googlepay_integration.png" alt="googlepay" />
            <img src="https://tmbill.com/img/integration/tmbill_paytm_integration.png" alt="paytm" />
          </div>
        </div>
        <div className="card">
          <h6>Works on</h6>
          <div className="companies-imgs">
            <img src="https://tmbill.com/img/integration/tmbill_works_on_android.png" alt="android" />
            <img src="https://tmbill.com/img/integration/tmbill_works_on_apple.png" alt="apple" />
            <img src="https://tmbill.com/img/integration/tmbill_works_on_windows.png" alt="windows" />
          </div>
        </div>
      </div>


      </div>

      </div>

      <div className="services">
        <div className="service-card">
          <img src="https://tmbill.com/img/outlet/tmbill_admin_control.png" alt="paperless menu icon" />
          <h6 className="service-card-text">
          Paperless Menu with Ordering Platform
          </h6>
        </div>

        <div className="service-card">
          <img src="https://tmbill.com/img/outlet/tmbill_deskop_pos_auto_sync.png" alt="desktop and mobile icon" />
          <h6 className="service-card-text">
          Desktop and Mobile POS with Cloud Sync
          </h6>
        </div>

        <div className="service-card">
          <img src="https://tmbill.com/img/outlet/tmbill_Billing_and_Inventory.png" alt="inventry and stock management icon" />
          <h6 className="service-card-text">
          Inventory and Stock Management
          </h6>
        </div>

        <div className="service-card">
          <img src="https://tmbill.com/img/outlet/tmbill_support_24_by_7.png" alt="24 X 7 Support icon" />
          <h6 className="service-card-text">
          24 X 7 Support
          </h6>
        </div>


      </div>

    </div>
  )
}

export default RestaurantOpening