import * as React from 'react';
import config from './../../config';
import './style/TestDriveConfirmationUI.css';
var MapUI = function (props) {
    return (React.createElement("div", { className: "dr-ui-map" },
        React.createElement("div", { className: "map-container" },
            React.createElement("iframe", { className: "map", id: "shopper-info-success-map-click", "data-analytics": "shopper-info-success-map-click", src: 'https://www.google.com/maps/embed/v1/place?key=' +
                    config.mapApiKey + '&q=' + window.encodeURIComponent(props.address.address), allowFullScreen: true }),
            React.createElement("p", { className: "dealer-name" },
                React.createElement("strong", null, props.dealerName)),
            React.createElement("p", { className: "address" },
                React.createElement("a", { className: "btn btn-link link", href: 'https://www.google.com/maps/place/' + window.encodeURIComponent(props.address.address), id: "shopper-info-success-map-link-click", "data-analytics": "shopper-info-success-map-link-click", target: "_blank" },
                    React.createElement("i", { className: "fa fa-map-marker" }),
                    props.address.address)))));
};
export default MapUI;
