import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Alert from "@mui/material/Alert";

export const Footer = () => {
  const router = useRouter();
  const { name } = router.query;
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (name) {
      setShowAlert(true);
      const timer = setTimeout(() => setShowAlert(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [name]);

  return (
    <Grid container>
      <Grid
        sx={{ width: "100%", backgroundColor: "#1976D2", height: "150px" }}
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
      >
        <p style={{ color: "white" }}>
          Copyright 2023, PromptGov, All rights reserved
        </p>
        <p style={{ color: "white" }}>Terms & Conditions</p>
      </Grid>
      {showAlert && (
        <Alert
          severity="success"
          sx={{
            position: "fixed",
            top: "10%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999, 
          }}
        >
          เข้าสู่ระบบสำเร็จ: {name}
        </Alert>
      )}
    </Grid>
  );
};
