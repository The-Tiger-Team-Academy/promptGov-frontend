import React, { useState, useEffect } from "react";
import { Footer } from "@/common/footer";
import ".//globals.css";

const RootLayout = ({ children }: any) => {

  return (
    <div>
      <header></header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
