import React from 'react'
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppoinmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Contact from './Contact/Contact';


const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner/>
        <Services></Services>
        <Feature/>
        <AppointmentBanner></AppointmentBanner>
        <Testimonial></Testimonial>
        <Contact></Contact>
        </div>
    );
};

export default Home;