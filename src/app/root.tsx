import React from "react";


const RootLayout = ({ children } : any) => {
  return (
  <div>
      <header >
      </header>
      <main >
        {children} 
      </main>
      </div>
  );
}
export default RootLayout;
