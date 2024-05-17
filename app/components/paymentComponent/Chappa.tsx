import React from "react";

interface ChappaProps {
  firstName: string;
  lastName: string;
  email: string;
  selectedPaymentMethod: string;
}

const Chappa: React.FC<ChappaProps> = ({
  firstName,
  lastName,
  email,
  selectedPaymentMethod,
}) => {
  return (
    <form method="POST" action="https://api.chapa.co/v1/hosted/pay">
      <input
        type="hidden"
        name="public_key"
        value={process.env.NEXT_PUBLIC_CHAPA_PUBLIC_KEY}
      />
      <input type="hidden" name="tx_ref" value={`${firstName}-${lastName}-tx-122212 `} />
      <input type="hidden" name="amount" value="100" />
      <input type="hidden" name="currency" value="ETB" />
      <input type="hidden" name="email" value={email} />
      <input type="hidden" name="first_name" value={firstName} />
      <input type="hidden" name="last_name" value={lastName} />
      <input type="hidden" name="title" value="Let us do this" />
      <input
        type="hidden"
        name="description"
        value="Paying with Confidence with cha"
      />
      <input
        type="hidden"
        name="logo"
        value="https://chapa.link/asset/images/chapa_swirl.svg"
      />
      <input
        type="hidden"
        name="callback_url"
        value="https://example.com/callbackurl"
      />
      <input
        type="hidden"
        name="return_url"
        value="https://example.com/returnurl"
      />
      <input type="hidden" name="meta[title]" value="test" />
      <button
        className="btn"
        type="submit"
        disabled={
          !firstName ||
          !lastName ||
          !email ||
          !(selectedPaymentMethod === "Chapa")
        }
      >
        Pay Now
      </button>
    </form>
  );
};

export default Chappa;
