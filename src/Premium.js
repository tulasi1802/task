import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';

function Premium() {
  const navigate = useNavigate();

  return (
    <div className="premium-container" style={{ padding: 20 }}>
      <h2>Subscribe to Premium</h2>
      <p>Get access to premium features by subscribing here.</p>

      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: "9.99", // Price in USD
              },
            }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(details => {
            alert(`Transaction completed by ${details.payer.name.given_name}!`);
            navigate('/premium-success'); // ✅ Redirect to success page
          });
        }}
        onError={(err) => {
          console.error('PayPal Checkout onError', err);
          alert('Payment failed. Please try again.');
        }}
      />
    </div>
  );
}

export default Premium;
