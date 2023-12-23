import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Alert from "@mui/material/Alert";

const RootLayout = ({ children }: any) => {
  const router = useRouter();
  const { name } = router.query;
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (name) {
      setShowAlert(true);
      const timer = setTimeout(() => setShowAlert(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [name]);

  return (
    <div>
      <header></header>
      <main>{children}</main>
      <footer>
        <p>© 2023 My Application</p>
      </footer>
      {showAlert && <Alert severity="success">เข้าสู่ระบบสำเร็จ: {name}</Alert>}
    </div>
  );
};

export default RootLayout;
