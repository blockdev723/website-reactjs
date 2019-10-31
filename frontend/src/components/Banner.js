import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          Let's together
        </h1>
        <p>A place to share your idioms.</p>
      </div>
    </div>
  );
};

export default Banner;
