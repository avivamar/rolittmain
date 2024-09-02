'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function BillingPage() {
  const [loading, setLoading] = useState(false);
  const t = useTranslations('Billing');

  const handleSubscribe = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId: 'your_price_id' }),
      });
      const session = await response.json();
      const stripe = await stripePromise;
      const { error } = await stripe!.redirectToCheckout({
        sessionId: session.id,
      });
      if (error) {
        console.error('Error:', error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>{t('title_bar')}</h1>
      <p>{t('title_bar_description')}</p>
      <button onClick={handleSubscribe} disabled={loading}>
        {loading ? 'Loading...' : t('manage_subscription_button')}
      </button>
    </div>
  );
}