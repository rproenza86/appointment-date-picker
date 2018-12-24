import * as tslib_1 from "tslib";
// externals
import * as React from 'react';
// components
import MapUI from './MapUI';
import './style/TestDriveUI.css';
import TestDriveFormUI from './TestDriveFormUI';
var TestDriveUI = /** @class */ (function (_super) {
    tslib_1.__extends(TestDriveUI, _super);
    function TestDriveUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestDriveUI.prototype.render = function () {
        var _a = this.props, address = _a.address, dealerName = _a.dealerName, errorMsg = _a.errorMsg;
        var errorMsgComponent = !errorMsg ? null : (React.createElement("div", { className: "form-group text-center dr-sp-test-drive-error" },
            React.createElement("span", { className: "message-error" },
                " ",
                errorMsg,
                " ")));
        return (React.createElement("div", { className: "dr-ui-test-drive" },
            address && React.createElement(MapUI, { address: address, dealerName: dealerName }),
            React.createElement(TestDriveFormUI, { selectedDate: this.props.day, selectedTime: this.props.time, onDayChanged: this.props.onDayChanged, onTimeChanged: this.props.onTimeChanged }),
            errorMsgComponent));
    };
    return TestDriveUI;
}(React.Component));
export default TestDriveUI;
