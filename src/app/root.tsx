import React from "react";

const RootLayout = ({ children }: any) => {
  return (
      <main>
        {children}
        {/* This is where your page content will be rendered */}
      </main>
  );
}
export default RootLayout;
