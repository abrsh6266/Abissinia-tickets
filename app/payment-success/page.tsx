"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const PaymentSuccess = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [transactionId, setTransactionId] = useState<string | null>(null);

  useEffect(() => {
    const tx_ref = searchParams.get("tx_ref");
    if (tx_ref) {
      setTransactionId(tx_ref as string);
    }
  }, [searchParams.get("tx_ref")]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center w-full">
        <h1 className="text-2xl font-semibold text-green-500 mb-4">
          Payment Successful!
        </h1>
        <p className="text-gray-700 mb-4">
          Thank you for your payment. Your transaction was completed
          successfully.
        </p>
        {transactionId && (
          <p className="text-gray-600 mb-6">
            <strong>Transaction ID:</strong> {transactionId}
          </p>
        )}
        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
          onClick={() => router.push("/")}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
