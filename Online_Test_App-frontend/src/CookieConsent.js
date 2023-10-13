// CookieConsent.js
import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieConsentComponent = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="myCookieConsent"
      style={{ background: '#333' }}
      buttonStyle={{ background: '#4CAF50' }}
    >
      This website uses cookies to ensure you get the best experience on our website.
    </CookieConsent>
  );
};

export default CookieConsentComponent;
