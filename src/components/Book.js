import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";

export default class Book extends Component {
    constructor() {
        super();
        this.state = {
            resort: "",
            room: "",
            adults: 0,
            children: 0,
            checkIn: "",
            checkOut: "",
            numOfNights: 0,
            nightCost: 0,
            totalCost: 0
        };
    }

    componentDidMount() {
        let payBtn = document.getElementById("pay-now");
        payBtn.addEventListener("click", () => {
            if (this.state.totalCost !== 0) {
                document.querySelector(".payment-overlay").style.display =
                    "block";
            } else {
                document.getElementById("warning").textContent =
                    "please fill out all fields before proceding";
            }
        });
    }

    handleResortChange(event) {
        this.setState({
            resort: event.target.value,
            room: '',
            nightCost: 0
        });

        this.calculateNights();
        document.getElementById('roomChange').focus();
    }

    //Once a room is picked, we also need to set the nightly room cost
    handleRoomChange(event) {
        this.setState({
            room: event.target.value
        });
        setTimeout(() => {
            this.handleNightCosts(this.state.room);
        }, 100);
        setTimeout(() => {
            this.calcOurCosts();
        }, 100);
    }
    handleAdultChange(event) {
        this.setState({
            adults: event.target.value
        });
    }
    handleChildrenChange(event) {
        this.setState({
            children: event.target.value
        });
    }
    handleCheckinChange() {
        let date = document.getElementById("checkin").value;
        this.setState({
            checkIn: date
        });

        setTimeout(() => {
            this.calculateNights();
        }, 200);
    }
    handleCheckoutChange() {
        let date = document.getElementById("checkout").value;
        this.setState({
            checkOut: date
        });

        setTimeout(() => {
            this.calculateNights();
        }, 100);
    }

    //Once the total nights is calculated, we will update our total cost
    calculateNights() {
        if (this.state.checkIn !== "" && this.state.checkOut !== "") {
            let checkin = new Date(this.state.checkIn);
            let checkout = new Date(this.state.checkOut);
            let oneDay = 24 * 60 * 60 * 1000;
            let nights = (checkout - checkin) / oneDay;

            this.setState({
                numOfNights: nights
            });
            setTimeout(() => {
                this.calcOurCosts();
            }, 100);
        }
    }
    handleNightCosts(room) {
        switch (room) {
            //confresi
            case "confresi-studio-49":
                this.setPerNightCost(49);
                break;
            case "confresi-spa-59":
                this.setPerNightCost(59);
                break;
            case "confresi-beach-studio-69":
                this.setPerNightCost(69);
                break;
            //tropical
            case "tropical-studio-49":
                this.setPerNightCost(49);
                break;
            //royal suites
            case "royal-1bedroom-99":
                this.setPerNightCost(99);
                break;
            case "royal-2bedroom-129":
                this.setPerNightCost(129);
                break;
            //dream suties
            case "dream-studio-79":
                this.setPerNightCost(79);
                break;
            //presidential puerto plata
            case "presidentialpp-studio-79":
                this.setPerNightCost(79);
                break;
            case "presidentialpp-1bedroom-99":
                this.setPerNightCost(99);
                break;
            case "presidentialpp-2bedroom-136":
                this.setPerNightCost(136);
                break;
            //presidential punta cana
            case "presidentialpc-1bedroom-109":
                this.setPerNightCost(109);
                break;
            case "presidentialpc-2bedroom-139":
                this.setPerNightCost(139);
                break;
            case "presidentialpc-3bedroom-179":
                this.setPerNightCost(179);
                break;
            //villas
            case "villas-3bedroom-229":
                this.setPerNightCost(229);
                break;
            case "villas-4bedroom-249":
                this.setPerNightCost(249);
                break;
            case "villas-5bedroom-269":
                this.setPerNightCost(269);
                break;

            default:
                break;
        }
    }
    setPerNightCost(amount) {
        this.setState({
            nightCost: amount
        });
    }
    calcOurCosts() {
        let costs = this.state.numOfNights * this.state.nightCost;
        this.setState({
            totalCost: costs
        });
    }

    //Room based on resort selection
    whichRoom(resort) {
        if (resort === "") {
            return <option value="">Pick A Resort</option>;
        } else if (resort === "confresi") {
            return (
                <>
                    <option value="confresi-studio-49">
                        Studio *maxiumum 4 persons - $49 per night
                    </option>
                    <option value="confresi-spa-59">
                        Spa Suites *maxiumum 4 persons(ADULTS ONLY 18+) - $59
                        per night
                    </option>
                    <option value="confresi-beach-studio-69">
                        Beach Studio *maxiumum 4 persons - $69 per night
                    </option>
                </>
            );
        } else if (resort === "tropical") {
            return (
                <>
                    <option value="tropical-studio-49">
                        Studio *maxiumum 4 persons - $49 per night
                    </option>
                </>
            );
        } else if (resort === "royal") {
            return (
                <>
                    <option value="royal-1bedroom-99">
                        1 Bedroom *maxiumum 4 persons - $99 per night
                    </option>
                    <option value="royal-2bedroom-129">
                        2 Bedroom *maxiumum 6 persons - $129 per night
                    </option>
                </>
            );
        } else if (resort === "dream") {
            return (
                <>
                    <option value="dream-studio-79">
                        Studio *maxiumum 4 persons - $79 per night
                    </option>
                </>
            );
        } else if (resort === "presidentialPP") {
            return (
                <>
                    <option value="presidentialpp-studio-79">
                        Studio *maxiumum 4 persons - $79 per night
                    </option>
                    <option value="presidentialpp-1bedroom-99">
                        1 Bedroom *maxiumum 4 persons - $99 per night
                    </option>
                    <option value="presidentialpp-2bedroom-136">
                        2 Bedroom *maxiumum 8 persons - $136 per night
                    </option>
                </>
            );
        } else if (resort === "presidentialPC") {
            return (
                <>
                    <option value="presidentialpc-1bedroom-109">
                        1 Bedroom *maxiumum 4 persons - $109 per night
                    </option>
                    <option value="presidentialpc-2bedroom-139">
                        2 Bedroom *maxiumum 6 persons - $139 per night
                    </option>
                    <option value="presidentialpc-3bedroom-179">
                        3 Bedroom *maxiumum 8 persons - $179 per night
                    </option>
                </>
            );
        } else if (resort === "villas") {
            return (
                <>
                    <option value="villas-3bedroom-229">
                        3 Bedroom *maxiumum 6 persons - $229 per night
                    </option>
                    <option value="villas-4bedroom-249">
                        4 Bedroom *maxiumum 8 persons - $249 per night
                    </option>
                    <option value="villas-5bedroom-269">
                        5 Bedroom *maxiumum 10 persons - $269 per night
                    </option>
                </>
            );
        }
    }

    render() {
        return (
            <div className="book">
            <div className="payment-overlay">
                                    <div id="payment-modal">
                                        <StripeProvider apiKey="pk_test_Q8CMARj4lb5GKIzq5kMdCxfW">
                                            <div className="example">
                                                <h1>CheckOut</h1>
                                                <Elements>
                                                    <CheckoutForm
                                                        amount={
                                                            this.state.totalCost
                                                        }
                                                    />
                                                </Elements>
                                            </div>
                                        </StripeProvider>
                                    </div>
                                </div>
                <table
                    style={{
                        margin: "0 auto",

                        padding: "5px"
                    }}
                >
                    <tbody>
                        {/* RESORT */}
                        <tr>
                            <td>
                                <label htmlFor="resort">Pick Your Resort</label>
                            </td>
                            <td>
                                <select
                                    name="resort"
                                    onChange={e => this.handleResortChange(e)}
                                >
                                    <option value="" />
                                    <option value="confresi">
                                        Confresi - Puerto Plata (starts @ $49
                                        per night)
                                    </option>
                                    <option value="tropical">
                                        Tropical - Puerto Plata (starts @ $49
                                        per night)
                                    </option>
                                    <option value="royal">
                                        Royal Suites - Puerto Plata (starts @
                                        $99 per night)
                                    </option>
                                    <option value="dream">
                                        Dream Suites - Puerto Plata (starts @
                                        $79 per night)
                                    </option>
                                    <option value="presidentialPP">
                                        Presidential Suites - Puerto Plata
                                        (starts @ $79 per night)
                                    </option>
                                    <option value="villas">
                                        Villas - Puerto Plata (starts @ $229 per
                                        night)
                                    </option>
                                    <option value="presidentialPC">
                                        Presidential Suites - Punta Cana (starts
                                        @ $109 per night)
                                    </option>
                                </select>
                            </td>
                        </tr>
                        {/* ROOM */}
                        <tr>
                            <td>
                                <label htmlFor="room">Pick Your Room</label>
                            </td>
                            <td>
                                <select id='roomChange'
                                    name="room"
                                    onChange={e => this.handleRoomChange(e)}
                                >
                                    <option value="" />
                                    {this.whichRoom(this.state.resort)}
                                </select>
                            </td>
                        </tr>
                        {/* NUM OF ADULTS */}
                        <tr>
                            <td>
                                <label htmlFor="adults">Number of Adults</label>
                            </td>
                            <td>
                                <input
                                    style={{ width: "75px" }}
                                    name="adults"
                                    type="number"
                                    onChange={e => this.handleAdultChange(e)}
                                />
                            </td>
                        </tr>
                        {/* NUM OF CHILDREN */}
                        <tr>
                            <td>
                                <label htmlFor="children">
                                    Number of Children
                                </label>
                            </td>
                            <td>
                                <input
                                    style={{ width: "75px" }}
                                    name="children"
                                    type="number"
                                    onChange={e => this.handleChildrenChange(e)}
                                />
                            </td>
                        </tr>
                        {/* Check In */}
                        <tr>
                            <td>
                                <label htmlFor="checkin">Check-In Date</label>
                            </td>
                            <td>
                                <input
                                    id="checkin"
                                    name="checkin"
                                    type="date"
                                    onChange={() => this.handleCheckinChange()}
                                />
                            </td>
                        </tr>
                        {/* CheckOut */}
                        <tr>
                            <td>
                                <label htmlFor="checkout">Check-Out Date</label>
                            </td>
                            <td>
                                <input
                                    id="checkout"
                                    name="checkout"
                                    type="date"
                                    onChange={() => this.handleCheckoutChange()}
                                />
                            </td>
                        </tr>
                        {/* Number of Nights */}
                        <tr>
                            <td>
                                <label htmlFor="numOfNights">
                                    Number of Nights
                                </label>
                            </td>
                            <td>
                                <input
                                    style={{ width: "75px" }}
                                    name="numOfNights"
                                    type="number"
                                    value={this.state.numOfNights}
                                    readOnly
                                />
                            </td>
                        </tr>
                        {/* Our Costs  */}
                        <tr>
                            <td>
                                <label htmlFor="roomCost">
                                    Room Costs - Payable today
                                </label>
                            </td>
                            <td>
                                <span
                                    style={{
                                        display: "inline-block",
                                        transform: "translatex(15px)"
                                    }}
                                >
                                    $
                                </span>
                                <input
                                    style={{
                                        width: "75px",
                                        background: "transparent",
                                        color: "#4ce0b3",
                                        fontWeight: "bold",
                                        fontSize: "1.2rem"
                                    }}
                                    name="roomCost"
                                    type="number"
                                    value={this.state.totalCost}
                                    readOnly
                                />
                            </td>
                        </tr>
                        {/* Resort Costs */}
                        <tr>
                            <td>
                                <label htmlFor="resortCost">
                                    Resort Regulations and Fees
                                </label>
                            </td>
                            <td style={{ paddingLeft: "10px" }}>
                                <button className="nav-book-btn">
                                    All Inclusive Fees
                                </button>
                                <button
                                    style={{ marginLeft: "15px" }}
                                    className="nav-book-btn"
                                >
                                    Resort Regulations
                                </button>
                            </td>
                        </tr>
                        {/* Terms of Service */}
                        <tr>
                            <td>
                                <label htmlFor="tos">
                                    I agree to the terms
                                </label>
                                <input
                                    style={{ transform: "translatey(10px)" }}
                                    name="TOS"
                                    type="checkbox"
                                />
                            </td>
                            <td>
                                <div
                                    style={{
                                        transform: "translatey(15px)",
                                        lineHeight: "1.4",
                                        maxWidth: "450px",
                                        maxHeight: "125px",
                                        overflow: "scroll",
                                        color: "black",
                                        background: "white",
                                        fontSize: ".9rem",
                                        padding: "5px",
                                        fontWeight: "400",
                                        marginLeft: "15px"
                                    }}
                                >
                                    <ul>
                                        <li>*ID is required at check-in.</li>
                                        <li>
                                            *Check-in time for all
                                            accommodations is 3 PM.
                                        </li>
                                        <li>
                                            *All-inclusive fee is manditory as
                                            resort is cashless. You hearby agree
                                            to pay all resort fees at the time
                                            of check-in for all members of your
                                            group.
                                        </li>
                                        <li>
                                            *You hearby agree to the resort
                                            regulations and rules provided
                                            above.
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        {/* Pay Now */}
                        <tr>
                            <td />
                            <td>
                                <button id="pay-now" className="browse-btn">
                                    Pay Now
                                </button>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p
                    id="warning"
                    style={{
                        color: "white",
                        fontSize: "20px",
                        
                        width: "375px",
                        margin: "15px auto",
                       
                    }}
                />
            </div>
        );
    }
}
