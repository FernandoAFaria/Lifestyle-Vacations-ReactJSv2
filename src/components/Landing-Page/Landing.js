import React from "react";
import CallToAction from "./CallToAction";
import Cards from './Cards';
import Overview from './Overview';
import Testimonials from './Testimonials';
import WhyBook from './WhyBook';

export default function Landing() {


    return (
        <div>
            <CallToAction />
            <Overview />
            <WhyBook />
            <Testimonials />
            <Cards />
            
            
        </div>
    );
}
