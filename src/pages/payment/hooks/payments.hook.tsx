import router from "next/router";
import { useState } from "react";
import checkout from "../services/payments";


const PaymentHook = () => {
    const [selectedPrize, setSelectedPrize] = useState("");
    const handlePrizeClick = async (prize: string) => {
      setSelectedPrize(prize);
  
      // Calling the checkout function and awaiting the returned URL
      const url = await checkout({ prize: prize, quantity: 1 });
      
      // Redirecting to the URL
      router.push(url);
    };
    return { selectedPrize, handlePrizeClick };
};

export default PaymentHook;