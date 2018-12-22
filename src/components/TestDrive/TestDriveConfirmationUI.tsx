import * as React from 'react';
import { Component } from 'react';

import config from './../../config';
import { IAddress } from './../../types';
import './style/TestDriveConfirmationUI.css';

export interface ITestDriveConfirmationUIProps {
    address: IAddress;
    name: string;
    onRescheduleLinkClick: () => void;
    phone: string;
    scheduledDateTime: string;
    leadSubmitted: boolean;
    goToLeadform: any;
    showNewTestDriveUIflow: boolean;
}

class TestDriveConfirmationUI extends Component<ITestDriveConfirmationUIProps, {}> {
    public componentDidMount() {
        const { showNewTestDriveUIflow, leadSubmitted, goToLeadform } = this.props;
        if (showNewTestDriveUIflow && !leadSubmitted) {
            goToLeadform();
        }

        /** Accessing the actual container where the scroll window is in -- dr-shopper-app (inside HTML file) */
        const frame = document.getElementById('dr-shopper-app');
        if (frame) {
            frame.scroll(0, 0);
        }
    }

    public render() {
        const { address, name, phone, scheduledDateTime } = this.props;
        const encodedAddress = (window as any).encodeURIComponent(address.address);
        const mapSource = `https://www.google.com/maps/embed/v1/place?key=${
            config.mapApiKey
        }&q=${encodedAddress}`;
        const mapLink = `https://www.google.com/maps/place/${encodedAddress}`;

        return (
            <div className="dr-ui-test-drive-confirmation">
                <h3 className="test-drive-confirmation-title">Test Drive Scheduled</h3>
                <p className="test-drive-confirmation-schedule">{scheduledDateTime}</p>
                <p className="reschedule-test-drive" onClick={this.handleRescheduleLinkClick}>
                    <a className="btn btn-link link" id="reschedule-test-drive-link">
                        <span className="reschedule-test-drive-text">Reschedule a Test Drive</span>
                    </a>
                </p>
                <p className="test-drive-confirmation">
                    If you have immediate questions, please call us directly at the number below.
                </p>
                <div>
                    <iframe
                        className="map"
                        id="test-drive-confirmation-map"
                        src={mapSource}
                        allowFullScreen={true}
                    />
                    <p className="dealer-name">
                        <strong>{name}</strong>
                    </p>
                    <p className="dealer-info-map-link">
                        <a
                            className="btn btn-link link"
                            href={mapLink}
                            id="test-drive-dealer-info-map-link"
                            target="_blank"
                        >
                            <i className="fa fa-map-marker" />
                            <span className="dealer-address">{address.address}</span>
                        </a>
                        <br />
                        <span className="dealer-phone">{phone}</span>
                    </p>
                </div>
            </div>
        );
    }

    private handleRescheduleLinkClick() {
        const { onRescheduleLinkClick } = this.props;
        onRescheduleLinkClick();
    }
}

export default TestDriveConfirmationUI;
