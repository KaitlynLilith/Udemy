/* eslint-disable */
// import { loadStripe } from '@stripe/stripe-js';
// import axios from 'axios';
import { showAlert } from './alerts.js';
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// const elements = stripe.elements();

export const bookTour = async (tourId) => {
  try {
    // Get checkout session from API endpoint
    const session = await axios(`http://127.0.0.1:8000/api/v1/bookings/checkout-session/${tourId}`);
    //   Create checkout form and charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
