import React from "react";

function Map() {
  return (
    <div id="map">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.501638908967!2d-0.1643183244785147!3d5.640306494340892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9bfd199c5afd%3A0x827671f073d92a17!2sNick%20Petroleum!5e0!3m2!1sen!2sgh!4v1695680917599!5m2!1sen!2sgh"
    
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        frameBorder="0"
        style={{
          border: "0",
          width: "100%",
        }}
        allowFullScreen=""
        aria-hidden="false"
      />
    </div>
  );
}

export default Map;
