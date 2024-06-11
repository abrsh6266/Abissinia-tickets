import { useRef, useState } from "react";
import avatarURL from "/public/images/chapa.png";
import Image from "next/image";
import Chappa from "./Chappa";

const PaymentProcess = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handlePaymentMethodSelect = (paymentMethod: string) => {
    setSelectedPaymentMethod(paymentMethod);
  };
  return (
    <form method="dialog" className="p-4 overflow-y-hidden">
      <div className="space-y-4">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="email"
            className="grow"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="block">Pay With</label>
        <a
          className={`btn btn-primary rounded-lg ${
            selectedPaymentMethod === "Chapa"?'border-4 border-green-400 ':''
          }`}
          onClick={() => handlePaymentMethodSelect("Chapa")}
        >
          <div className="w-20 h-20">
            <Image src={avatarURL} alt="chapa" />
          </div>
        </a>
        <Chappa
          firstName={firstName}
          lastName={lastName}
          email={email}
          selectedPaymentMethod={selectedPaymentMethod}
        />
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          className="btn bg-transparent border-2 text-red-700 border-red-700 rounded-lg px-6 mr-8"
          onClick={() => dialogRef.current?.close()}
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default PaymentProcess;
