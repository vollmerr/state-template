import React from 'react';

const LocationBar = () => (
  <div className="location-settings section section-standout collapse collapsed " id="locationSettings">
    <div className="container p-y">
      <button type="button" className="close" data-toggle="collapse" data-target="#locationSettings" aria-expanded="false" aria-controls="locationSettings" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>

      <div className="form-group form-inline">
        <label htmlFor="locationZipCode">Saving your location allows us to provide you with more relevant information.</label>
        <input type="input" className="form-control" id="locationZipCode" placeholder="Zip Code" />
        <button type="button" className="btn btn-primary">Set Location</button>
      </div>
    </div>
  </div>
);

export default LocationBar;
