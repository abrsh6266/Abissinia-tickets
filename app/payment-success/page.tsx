'use client'
import React from "react";
import { useRouter } from "next/router";

const PaymentSuccess = () => {
  const router = useRouter();
  const { tx_ref } = router.query;

  return (
    <div>
      <h1>Payment Success</h1>
      <p>Your transaction with reference {tx_ref} was successful.</p>
    </div>
  );
};

export default PaymentSuccess;
