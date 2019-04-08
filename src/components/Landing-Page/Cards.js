import React from "react";
import {resortsData} from '../../assets/data/resorts_data';
import {Link} from 'react-router-dom';





let Card = (props) => {
    return (
        
        <div className="card-container" >
            
            <div className="card-body">
                <div className={props.frontClass}>
                    <h1>{props.resortName}</h1>
                    <h4>
                        {props.stars === "4"? <><i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i> </>  :<>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i className="far fa-star"></i>  </> }
                              
                    </h4>
                    <h3>{props.city}, Dominican Republic</h3>
                    <h3>Starting at {props.perNight} per night!*</h3>
                </div>
                <div className="back-card">
                <h5>Occupancy: {props.occupancy}</h5>
                <Link to={`/resorts` + props.id} className="card-btn">Explore Resort</Link>
                <h6>*Price is for room only, all-inclusive fee is manditory and due at the resort upon check-in.</h6>
                </div>
            </div>
        </div>
    );
};

export default function Cards() {
    return (
    
    <section id='resorts' className='landing-cards-section' >
    <h1 className='landing-title'>Resorts</h1>
    <div className="landing-cards-container">
        <Card frontClass="front-card conf-back" id='/confresi' resortName="Confresi Resort and Spa" city={'Puerto Plata'} perNight="$69" occupancy={resortsData[0].occupancy} stars={"3.5"} />
        <Card frontClass="front-card pres-back" id='/presidential' resortName="Presidential Suite" city={'Puerto Plata'} perNight="$89" occupancy={resortsData[3].occupancy} stars={"4"}/>
        <Card frontClass="front-card trop-back" id='/tropical' resortName="The Tropical" city={'Puerto Plata'} perNight="$69" occupancy={resortsData[2].occupancy} stars={"3.5"}/>
        <Card frontClass="front-card royal-back" id='/royalsuites' resortName="The Royal Suites" city={'Puerto Plata'} perNight="$109" occupancy={resortsData[4].occupancy} stars={"4"}/>
        <Card frontClass="front-card villas-back" id='/crownvillas' resortName="The Crown Villas" city={'Puerto Plata'} perNight="$229" occupancy={resortsData[1].occupancy} stars={"4"}/>
        <Card frontClass="front-card dream-back" id='/dreamsuites' resortName="Dream Suites by Lifestyle" city={'Puerto Plata'} perNight="$89" occupancy={resortsData[5].occupancy} stars={"4"}/>
        <Card frontClass="front-card dream-back" id='/dreamsuites' resortName="Presidential Suite - Punta Cana" city={'Punta Cana'} perNight="$119" occupancy={resortsData[6].occupancy} stars={"4"}/>
        </div>
    </section>
    );
    
}
