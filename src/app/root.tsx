import React from 'react';


const RootLayout = ({ children } : any) => {
  return (
  <div>
      <header >
      </header>
      <main >
        {children} 
        {/* This is where your page content will be rendered */}
      </main>
      <footer>
        {/* Footer content goes here */}
        <p>© 2023 My Application</p>
      </footer>
    </div>
  );
};

export default RootLayout;
