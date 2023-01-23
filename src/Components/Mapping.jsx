import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

//Mapbox API import
const MAPBOX_API = import.meta.env.VITE_REACT_APP_MAPBOX_API_KEY;

class Mapping extends Component {

  componentDidMount() {
    mapboxgl.accessToken = `${MAPBOX_API}`;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-122.4194, 37.7749], // San Francisco's coordinates
      zoom: 12
    });

    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true
      },
      trackUserLocation: true
    }));
    this.map.addControl(new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      marker: false
    }));

    var marker = new mapboxgl.Marker({color:"#F4511E"})
      .setLngLat([-122.4194, 37.7749])
      .addTo(this.map);
  }



  render() {
    const MAPBOX_API = import.meta.env.VITE_REACT_APP_MAPBOX_API_KEY;

      return (
          <div>
            <div id="map">
              <div ref={this.mapContainer} style={{ width: '500px', height: '300px' }} />
            </div>
            <div className="px-4 px-6 rounded-lg">

            </div>
          </div>

      );
  }
}

export default Mapping;
