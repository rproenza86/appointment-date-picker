import * as tslib_1 from "tslib";
import * as React from 'react';
import { Component } from 'react';
import config from './../../config';
import './style/TestDriveConfirmationUI.css';
var TestDriveConfirmationUI = /** @class */ (function (_super) {
    tslib_1.__extends(TestDriveConfirmationUI, _super);
    function TestDriveConfirmationUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestDriveConfirmationUI.prototype.componentDidMount = function () {
        var _a = this.props, showNewTestDriveUIflow = _a.showNewTestDriveUIflow, leadSubmitted = _a.leadSubmitted, goToLeadform = _a.goToLeadform;
        if (showNewTestDriveUIflow && !leadSubmitted) {
            goToLeadform();
        }
        /** Accessing the actual container where the scroll window is in -- dr-shopper-app (inside HTML file) */
        var frame = document.getElementById('dr-shopper-app');
        if (frame) {
            frame.scroll(0, 0);
        }
    };
    TestDriveConfirmationUI.prototype.render = function () {
        var _a = this.props, address = _a.address, name = _a.name, phone = _a.phone, scheduledDateTime = _a.scheduledDateTime;
        var encodedAddress = window.encodeURIComponent(address.address);
        var mapSource = "https://www.google.com/maps/embed/v1/place?key=" + config.mapApiKey + "&q=" + encodedAddress;
        var mapLink = "https://www.google.com/maps/place/" + encodedAddress;
        return (React.createElement("div", { className: "dr-ui-test-drive-confirmation" },
            React.createElement("h3", { className: "test-drive-confirmation-title" }, "Test Drive Scheduled"),
            React.createElement("p", { className: "test-drive-confirmation-schedule" }, scheduledDateTime),
            React.createElement("p", { className: "reschedule-test-drive", onClick: this.handleRescheduleLinkClick },
                React.createElement("a", { className: "btn btn-link link", id: "reschedule-test-drive-link" },
                    React.createElement("span", { className: "reschedule-test-drive-text" }, "Reschedule a Test Drive"))),
            React.createElement("p", { className: "test-drive-confirmation" }, "If you have immediate questions, please call us directly at the number below."),
            React.createElement("div", null,
                React.createElement("iframe", { className: "map", id: "test-drive-confirmation-map", src: mapSource, allowFullScreen: true }),
                React.createElement("p", { className: "dealer-name" },
                    React.createElement("strong", null, name)),
                React.createElement("p", { className: "dealer-info-map-link" },
                    React.createElement("a", { className: "btn btn-link link", href: mapLink, id: "test-drive-dealer-info-map-link", target: "_blank" },
                        React.createElement("i", { className: "fa fa-map-marker" }),
                        React.createElement("span", { className: "dealer-address" }, address.address)),
                    React.createElement("br", null),
                    React.createElement("span", { className: "dealer-phone" }, phone)))));
    };
    TestDriveConfirmationUI.prototype.handleRescheduleLinkClick = function () {
        var onRescheduleLinkClick = this.props.onRescheduleLinkClick;
        onRescheduleLinkClick();
    };
    return TestDriveConfirmationUI;
}(Component));
export default TestDriveConfirmationUI;
