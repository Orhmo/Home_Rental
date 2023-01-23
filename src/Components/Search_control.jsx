
import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

export class Search_control extends Component {
  componentDidMount() {
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

    var marker = new mapboxgl.Marker()
      .setLngLat([-122.4194, 37.7749])
      .addTo(this.map);
  }
}
