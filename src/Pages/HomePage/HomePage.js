import React from 'react';
import './HomePage.css';
import ClientsSection from './HomePageSections/client-section/ClientsSection';
import Form from './HomePageSections/FormSection/Form';
import HeroSection from './HomePageSections/HeroSection/HeroSection';
import OutletSection from './HomePageSections/outlets-section/OutletSection';
import RestaurantOpening from './HomePageSections/restaurant-opening-section/RestaurantOpening';
import TmbillLinks from './HomePageSections/TMBillLinks/TmbillLinks';
import WhereWeReach from './HomePageSections/WhereWeReachSection/WhereWeReach';

const HomePage = () => {
  return (
    <>
    <HeroSection />
    <RestaurantOpening />
    <ClientsSection />
    <OutletSection />
    <Form />
    <TmbillLinks />
    <WhereWeReach />
    </>
  )
}

export default HomePage