import React from 'react';

export default React.memo(function Navbar() {
  return (
    <header className="border-b border-divider bg-background-paper">
      <div className="container mx-auto max-w-screen-lg px-4">
        <nav className="flex items-center">
          {/* The Poppins font will be handled in the main layout file. */}
          <h1
            className="font-sans text-primary text-2xl py-5 tracking-wider"
            style={{ fontWeight: 600, fontFamily: 'Poppins, Arial' }}
          >
            NOMOS
          </h1>
        </nav>
      </div>
    </header>
  );
});
