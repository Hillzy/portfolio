import React from "react";
import "./contact.css";
import Tags from "../components/Tags";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import NetlifyForm from "react-netlify-form";

const mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#feda6a"
      }
    ]
  },
  {
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    elementType: "labels.text",
    stylers: [
      {
        color: "#1d1e22"
      },
      {
        visibility: "on"
      }
    ]
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#1d1e22"
      },
      {
        visibility: "on"
      }
    ]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121"
      },
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#feda6a"
      },
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#feda6a"
      },
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#1d1e22"
      },
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#1d1e22"
      },
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "administrative.neighborhood",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#181818"
      },
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1b1b1b"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#1d1e22"
      },
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8a8a8a"
      }
    ]
  },
  {
    featureType: "road.arterial",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#1d1e22"
      },
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#1d1e22"
      },
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#1d1e22"
      }
    ]
  },
  {
    featureType: "road.local",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161"
      }
    ]
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#1d1e22"
      },
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3d3d3d"
      },
      {
        visibility: "off"
      }
    ]
  }
];

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: -37.8716929, lng: 144.8929592 }}
      defaultOptions={{
        styles: mapStyle,
        clickableIcons: false,
        disableDefaultUI: true,
        fullscreenControl: false
      }}
    />
  ))
);

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-left">
        <Tags tag="html" type="open" indent={-1} />
        <Tags tag="body" type="open" indent={0} />
        <div className="contact-text-container">
          <Tags tag="h1" type="open" indent={0} />
          <h1>Contact Me</h1>
          <Tags tag="h1" type="close" indent={0} />
        </div>
        <Tags tag="body" type="close" indent={0} />
        <Tags tag="html" type="close" indent={-1} />
      </div>
      <div className="contact-right">
        <MyMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA1swnFgM-GZBakP9chlEU-o9IUXTI_gVU"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
};
export default Contact;
