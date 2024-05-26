'use client'
import React from 'react';
import { useRouter } from 'next/router';

const PaymentFailure = () => {
  const router = useRouter();
  const { tx_ref } = router.query;

  return (
    <div>
      <h1>Payment Failure</h1>
      <p>Your transaction with reference {tx_ref} failed. Please try again.</p>
    </div>
  );
};

export default PaymentFailure;
