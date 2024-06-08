// frontend/pages/api/initiate-payment.ts
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface PaymentRequest {
  email: string;
  amount: string;
  tx_ref: string;
  first_name: string;
  last_name: string;
  description: string;
  title: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    email,
    amount,
    tx_ref,
    first_name,
    last_name,
    title,
    description,
  }: PaymentRequest = req.body;
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  try {
    const response = await axios.post(
      "https://api.chapa.co/v1/transaction/initialize",
      {
        email,
        amount,
        description,
        title,
        first_name,
        last_name,
        tx_ref,
        currency: "ETB",
        callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/verifyPayment}`,
        return_url: `${baseUrl}/payment-success`,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.CHAPA_PUBLIC_KEY}`,
        },
      }
    );

    res.status(200).json({ payment_url: response.data.data.checkout_url });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Payment initiation failed", error: error.message });
  }
};
