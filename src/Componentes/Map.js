import React from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import stores from './../store_directory.json'
/*
* Use this component as a launching-pad to build your functionality.
*
*/

  const inMap = stores.map((element, i) => {
    
      return (
          <Marker
              key={i}
              position={{ lat: element.Coordinates.lat, lng: element.Coordinates.lng }}
              title={element.Name}
              
          />
      )
  })



const MyMapComponent = compose(

  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `330px` }} />,
    mapElement: <div style={{ height: `186%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 19.4978, lng:  -99.1269 }}
  >
    {props.isMarkerShown && inMap }
  </GoogleMap>
)

export default MyMapComponent;
