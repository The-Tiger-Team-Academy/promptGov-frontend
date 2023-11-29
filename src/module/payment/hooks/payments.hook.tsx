import router from "next/router";
import checkout from "../services/payments";


const PaymentHook = () => {
    const handlePrizeClick = async (prize: string) => {
  
      // Calling the checkout function and awaiting the returned URL
      const url = await checkout({ prize: prize, quantity: 1 });
      
      // Redirecting to the URL
      router.push(url);
    };
    return { handlePrizeClick };
};

export default PaymentHook;