import { Container } from "@mui/material"
import PaymentHook from "./hooks/payments.hook";



const PaymentPage = () => {
    const { selectedPrize, handlePrizeClick} = PaymentHook();
    return (
        <div>this is payment page
            <Container>
                <button
                    onClick={() =>
                        handlePrizeClick("price_1OEtCBAom1IgIvKKjrrwjZN3")
                    }
                >
                    จ่ายเงิน
                </button>
            </Container>

        </div>
    )

}

export default PaymentPage