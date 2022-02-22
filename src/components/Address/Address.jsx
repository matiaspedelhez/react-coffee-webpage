import React from "react";
import "./Address.scss";

function Address() {
  return (
    <div className="Address">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.32151495296!2d-58.503345029674186!3d-34.61575895891961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3d05457fbb%3A0xe160f4fce7f7c017!2sBuenos%20Aires!5e0!3m2!1ses-419!2sar!4v1645553515180!5m2!1ses-419!2sar"
        style={{ border: 0 }}
        loading="lazy"
        title="google-maps-iframe"
        className="google-map"
        samesite="Lax"
      ></iframe>
      <div className="textual-address">
        <h3>Our Address</h3>
        <p>110 St-Cathedral Pkwy Station</p>
        <p>4310 94th St, Flushing</p>
        <p>94-54 Corona Ave., Elmhurst</p>
        <p>5627 Van Doren St, Queens</p>
      </div>
    </div>
  );
}

export default Address;
