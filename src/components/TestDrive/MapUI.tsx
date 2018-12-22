import * as React from 'react';
import config from './../../config';
import { IAddress } from './../../types';
import './style/TestDriveConfirmationUI.css';

export interface IMapUIProps {
    address: IAddress;
    dealerName: string;
}
const MapUI = (props: IMapUIProps) => {
    return (
            <div className="dr-ui-map">
                <div className="map-container">
                <iframe className="map"
                        id="shopper-info-success-map-click"
                        data-analytics="shopper-info-success-map-click"
                        src={'https://www.google.com/maps/embed/v1/place?key=' +
                            config.mapApiKey + '&q=' + (window as any).encodeURIComponent(props.address.address)} allowFullScreen={true} />
                    <p className="dealer-name"><strong>{props.dealerName}</strong></p>
                    <p className="address">
                        <a  className="btn btn-link link"
                            href={'https://www.google.com/maps/place/' + (window as any).encodeURIComponent(props.address.address)}
                            id="shopper-info-success-map-link-click"
                            data-analytics="shopper-info-success-map-link-click"
                            target="_blank">
                            <i className="fa fa-map-marker"/>
                            {props.address.address}
                        </a>
                    </p>
                </div>
            </div>
    );
};

export default MapUI;
