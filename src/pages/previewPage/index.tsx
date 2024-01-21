import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PaymentHook from "../../module/payment/hooks/payments.hook";
import "@fontsource/kanit/700.css";

export default function Previewmessagerecord() {
  const { handlePrizeClick } = PaymentHook();
  const [urlPdf, setUrlPdf] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const storedUrl = localStorage.getItem("url_pdf");
      setUrlPdf(storedUrl || "");
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {urlPdf ? (
        <iframe
          src={urlPdf}
          width="100%"
          height="800px"
          style={{ border: "none" }}
        ></iframe>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            position: "absolute",
            backgroundColor: "white",
          }}
        >
          <img
            src="https://cdn.dribbble.com/users/566817/screenshots/2280275/media/39ebef761528920581bb98a35709676c.gif"
            alt="Loading cat animation"
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "white",
            }}
          />
        </div>
      )}
      <Stack
        spacing={0}
        direction="row"
        style={{
          padding: "3px",
          justifyContent: "start",
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          width: "200px",
        }}
      >
        <div>
          <Typography
            style={{
              fontFamily: "Kanit, sans-serif",
              justifyContent: "center",
              display: "flex",
              fontSize: "1.2rem",
            }}
            variant="h5"
            gutterBottom
          >
            ทำรายการสั่งซื้อ
          </Typography>
        </div>
        <div style={{ flexDirection: "row", display: "flex" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "red",
              fontSize: "0.7rem",
              width: "100%",
            }}
            onClick={() => handlePrizeClick("price_1OSio8EX8k2LI3RY8b4UFGRG")}
          >
            ฿30
          </Button>
        </div>
      </Stack>
    </div>
  );
}
