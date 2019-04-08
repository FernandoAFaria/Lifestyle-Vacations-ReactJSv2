import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { join } from "path";


class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    componentDidMount(){
        let closeBtn = document.getElementById('close-btn');
        closeBtn.addEventListener('click', () => {
            document.querySelector('.payment-overlay').style.display = 'none';
        })
    }

    async submit(ev) {
        ev.preventDefault();
        let firstName = document.getElementById('form-firstname').value
        let lastName = document.getElementById('form-lastname').value
        let streetAddress = document.getElementById('form-street').value
        let city = document.getElementById('form-city').value
        let state = document.getElementById('form-state').value
        let zipcode = document.getElementById('form-zipcode').value
        let amount = this.props.amount;
        let strAmount = amount.toString() + "00";
        let stripeAmount = parseInt(strAmount)
        // User clicked submit
        let  {token} = await this.props.stripe.createToken({ 
            name: `${firstName} ${lastName}`,
            address_line1: streetAddress,
            address_city: city,
            address_state: state,
            address_zip: zipcode
        });
        if(!token) {
            document.getElementById('error').textContent = 'Credit Card Invalid'
        } else {
            let response = await fetch('http://localhost:3150/charge/create', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                
                body: JSON.stringify({token: token.id, amount: stripeAmount})
            })
        }
  
      
    }

    render() {
     

        return (
            <div className="checkout">
                <p style={{ marginBottom: "15px", marginTop: "15px" }}>
                    Would you like to complete the purchase?
                </p>
                <form id='personal-info' style={{margin: '15px 0'}} onSubmit={(e)=> this.submit(e)}>
                    <input required id='form-firstname' type='text' name='firstname' placeholder='First Name'></input>
                    <input required id='form-lastname' type='text' name='lastname' placeholder='Last Name'></input>
                    <input required id='form-email' type='email' name='email' placeholder='Email Address'></input>
                    <input required  id='form-street' type='text' name='street' placeholder='Street'></input>
                    <input required id='form-city'type='text' name='city' placeholder='City'></input>
                    <input required id='form-state' style={{width: '75px'}} type='text' name='state' placeholder='State'></input>
                    <input required id='form-zipcode' style={{width: '110px'}} type='number' name='zipcode' placeholder='zipcode'></input>
                    <textarea required id='form-members'  placeholder='names of all party members eg. John Smith, Jane Doe ect..'></textarea>
                
      
              
                <CardElement
                    className="stripe-element"
                    style={{
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            fontFamily: 'Open Sans, sans-serif',
                            letterSpacing: '0.025em',
                            '::placeholder': {
                              color: '#aab7c4',
                            },
                          },
                          invalid: {
                            color: '#c23d4b',
                          },
                        }
                    }
                />
                <i className="fas fa-lock"></i><p style={{display: 'inline', marginLeft: '15px'}} id='error'></p>
                <h2 style={{ marginTop: "25px" }}>
                    Your total is $
                    <span style={{ color: "green", marginLeft: '15px' }}>{this.props.amount}</span>
                </h2>
                <button
                    
                    className=""
                    style={{
                        marginTop: "25px",
                        marginBottom: "25px",
                        padding: "15px 30px",
                        background: "#4ce0b3",
                        color: "white",
                        fontSize: "22px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        float: 'left'
                    }}
                    
                >
                    Submit
                </button>
                <button id='close-btn'
                onClick={(e)=> e.preventDefault()}
                    style={{
                        float: "right",
                        padding: "15px 30px",
                        background: "#ea526f",
                        color: 'white',
                        fontSize: '22px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        marginTop: '25px'
                    }}
                >
                    Back
                </button>
                </form>
            </div>
        );
    }
}


export default injectStripe(CheckoutForm);
