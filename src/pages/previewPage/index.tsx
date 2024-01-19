import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "@fontsource/kanit/700.css";

export default function Previewmessagerecord() {
  const [Url_pdf, serUrl_pdf] = useState<string | null>(null);
  useEffect(() => {
    const Url_pdf = localStorage.getItem("url_pdf");
    if (Url_pdf) {
      serUrl_pdf(Url_pdf);
    }
    console.log(Url_pdf);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <iframe
        src={`${Url_pdf}`}
        width="100%"
        height="800px"
        style={{ border: "none" }}
      ></iframe>
      <Stack
        spacing={0}
        direction="row"
        style={{
          padding: "3px",
          justifyContent: "",
          display: "flex",
          flexDirection: "column",
          width:'150px'
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
            style={{ backgroundColor: "red", fontSize: "0.7rem" }}
          >
            ฿30
          </Button>
          <Button variant="text" style={{ color: "red", fontSize: "10px" }}>
            cancle
          </Button>
        </div>
      </Stack>
    </div>
  );
}
