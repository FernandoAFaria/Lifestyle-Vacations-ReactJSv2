import React, { Component } from "react";
import {Link} from 'react-router-dom';

/*Data for resorts */
import { resortsData } from "../../assets/data/resorts_data";

export default class Resort extends Component {
    constructor(props) {
        super(props);
        const id = props.match.params.id;

        this.state = {
            loaded: false,
            id: id,
            resortName: "",
            data: "",
            pics: [],
            occupancy: ""
        };
    }
    componentDidMount() {
        //Load the resort details into state
        window.scrollTo(0, 0);
        let currentResort = resortsData.filter(resort => {
            if (resort.id === this.state.id) {
                return resort;
            } else {
                return "";
            }
        });
        if (currentResort.length === 0) {
            console.log("Resort Deosnt exist");
        } else {
            this.setState({
                loaded: true,
                resortName: currentResort[0].resortName,
                data: currentResort[0].data,
                pics: [...currentResort[0].pics],
                occupancy: currentResort[0].occupancy
            });
        }
    }

    render() {
        if (this.state.loaded === false) {
            return (
                <div className="resort_page">
                    <h1>Loading</h1>
                </div>
            );
        } else if (this.state.loaded === true) {
            return (
                <section>
                    <div className="resort_page">
                        <h1>{this.state.resortName}</h1>
                        <p>{this.state.data}</p>

                        <div className="resort_features">
                        <div className='all_inclusive'>
                            <h2>
                                All-Inclusive Plan Includes
                            </h2>
                            <ul
                                style={{
                                    textAlign: "left",
                                    marginBottom: '75px',
                                    listStyle: "circle"
                                }}
                            >
                                <li>
                                    Privileged use of all restaurants, bars, and
                                    facilities at the Resort (<strong>V.I.P areas and
                                    services exclusive for Members</strong>)
                                </li>
                                <li>
                                    24-hour food and beverages available in
                                    select locations
                                </li>
                                <li>
                                    All meals – access to breakfast, lunch, and
                                    dinner in any of our restaurants on property
                                    (some restaurants require advance
                                    reservations)
                                </li>
                                <li>
                                    9 All Guest restaurants for a la carte
                                    dining (Reservations may be required)
                                </li>
                                <li>
                                    2 International Buffet restaurants (No
                                    reservations required)
                                </li>
                                <li>
                                    Daytime and late snacks located throughout
                                    the property, including 11 V.I.P Lite Fare
                                    Bars
                                </li>
                                <li>
                                    Includes: House Wine with Meals, plus Beer,
                                    Spirits, Cocktails, Juices, and Soft Drinks
                                    are available from all Bars located on the
                                    property.
                                </li>
                            </ul>
                            <h5>Occupancy: {this.state.occupancy}</h5>
                            </div>
                            <div className='amenities'>
                            <h2>Amenities and Facilities</h2>
              <ul
                style={{
                  textAlign: "left",
                  listStyle: "circle",
                  minWidth: "40%"
                }}
              >
                <li>11 Restaurants for All Guests</li>
                <li>12 Bars for All Guests</li>
                <li>12+ Pools Including Exclusive Kid’s Pool Areas</li>
                <li>ICE Nightclub</li>
                <li>
                  2 Entertainment Centers, Colosseum & Lights, Camera, Action
                  Theatre
                </li>
                <li>
                  Non-Motorized Water-Sports: Snorkeling Equipment, Boogie
                  Boards, Kayaks
                </li>
                <li>Tennis Courts</li>
                <li>Basketball Court</li>
                <li>Beach Volleyball Court</li>
                <li>2 Gyms with Exercise Equipment</li>
                <li>Shopping Areas, Including Hand-Crafted Market</li>
                
               
              </ul>
                            
                            </div>
                            
                        </div>
                        <div className='book_now'><Link className='book_now_btn' to="/book">Book Now</Link></div>
                    </div>
                    <div className="resort_images">
                        {this.state.pics.map((each, index) => {
                            return (
                                <div
                                    key={index}
                                    className="mySlides"
                                    style={{
                                        background: `url(${each})`,
                                        backgroundRepeat: "no-repeat"
                                    }}
                                />
                            );
                        })}
                        
                    </div>
                    
                </section>
            );
        }
    }
}
