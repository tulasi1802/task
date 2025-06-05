import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserCircle } from 'react-icons/fa';

function Account({ username }) {
  const paymentDate = localStorage.getItem('paymentDate');
  const subscriptionEnd = localStorage.getItem('subscriptionEnd');

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="card shadow-lg p-5" style={{ width: '100%', maxWidth: '500px' }}>
        <div className="text-center mb-4">
          <FaUserCircle size={80} color="#6c63ff" />
          <h3 className="mt-3">Account Details</h3>
        </div>
        <p><strong>Username:</strong> {username}</p>

        {paymentDate && subscriptionEnd ? (
          <>
            <p><strong>Payment Date:</strong> {new Date(paymentDate).toLocaleDateString()}</p>
            <p><strong>Subscription Ends:</strong> {new Date(subscriptionEnd).toLocaleDateString()}</p>
          </>
        ) : (
          <div className="alert alert-warning text-center mt-3">
            You have not subscribed yet.
          </div>
        )}
      </div>
    </div>
  );
}

export default Account;
