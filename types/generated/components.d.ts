import type { Schema, Struct } from '@strapi/strapi';

export interface GeoLocationLocation extends Struct.ComponentSchema {
  collectionName: 'components_geo_location_locations';
  info: {
    displayName: 'Location';
    icon: 'earth';
  };
  attributes: {
    latitude: Schema.Attribute.String;
    longitude: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'geo-location.location': GeoLocationLocation;
    }
  }
}
