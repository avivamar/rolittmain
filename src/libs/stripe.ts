import Stripe from 'stripe';
import { Env } from '@/libs/Env';

if (!Env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set');
}

const stripe = new Stripe(Env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

export default stripe;