import React from 'react'
import { useState, useEffect } from 'react';
import { useStateValue } from "./StateProvider";
import "./Payment.css"
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
import axios from 'axios';

function Payment() {
   const [{cart, user} , dispatch]= useStateValue();
   const history = useHistory();

   const stripe = useStripe();
   const elements = useElements();
    
   const [processing ,setProcessing ] = useState(false);
   const [succeeded, setSucceeded] = useState("");
   const [error, setError ] = useState(null);
   const [disabled, setDisabled] = useState(true);
   const [clientSecret, setClientSecret] = useState(true);

   useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post', 
                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
     
   }, [cart])
   
   console.log('The Secret is >>>', clientSecret)

   const handleSubmit = async(event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent is like payment confirmation

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            history.replace('/orders')
        })
   }
   const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
   }   

  return (
    <div className="payment">
        <div className="payment_container">
            <h1> Checkout (<Link to="/checkout">{cart.length} items</Link>) </h1>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment_address">
                    <p>{user?.email}</p>
                    <p>blah blah blah</p>
                    <p>blah blah</p>
                </div>
            </div>


            <div className="payment_section">
                <div className="payment_title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment_items">
                    { cart.map( item => 
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    )}
                </div>
            </div>


            <div className="payment_section">
                <div className="payment_title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment_priceContainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getCartTotal(cart)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₹"}
                            />

                            <button disabled={processing || disabled || succeeded } >
                                <span>{ processing ? <p>Processing</p> : "Buy Now" }</span>
                            </button>
                            </div>
                            
                             {error && <div>{error}</div>}  {/*if there is error */}
                        </form>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Payment