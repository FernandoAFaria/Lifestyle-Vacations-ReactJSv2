import React from "react";
import puertoplata from "../../assets/imgs/PuertoPlata.jpg";
import cabarete from "../../assets/imgs/Cabarete.jpg";
import puntacana from "../../assets/imgs/PuntaCana.jpg";


export default function Overview() {
    return (
        <section className="overview">
            <div className="container flex-center">
                <div className="overview-left">
                    <h1>Lifestyle Holidays Hotels and Resorts</h1>
                    <p>
                        Lifestyle Holidays Hotels and Resorts in Puerto Plata
                        provides the ultimate Dominican Republic destination.
                        Stroll along miles of sparkling gold sand beaches and
                        soak up the sunshine while enjoying the energizing ocean
                        breezes. Our welcoming resort features rooms, suites,
                        and villas in a variety of sizes to offer plenty of room
                        for families, couples, or groups.
                    </p>
                </div>

                <div className="overview-right">
                    <div className="img-container">
                        <div className="text-overlay">
                            <h1>Puerto Plata</h1>
                        </div>
                        <img src={puertoplata} alt='Puerto Plata, DR'/>
                    </div>
                    <div className="img-container">
                        <div className="text-overlay">
                            <h1>Cabarete</h1>
                            <h6>coming soon...</h6>
                        </div>
                        <img src={cabarete} alt='Cabarete, DR' />
                    </div>
                    <div className="img-container">
                        <div className="text-overlay">
                            <h1>Punta Cana</h1>
                        </div>
                        <img src={puntacana} alt='Punta Cana, DR' />
                    </div>
                </div>
            </div>
        </section>
    );
}
