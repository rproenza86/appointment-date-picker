import * as tslib_1 from "tslib";
// externals
import * as React from 'react';
import { Component } from 'react';
// components
import ToggleDatePickerCardUI from '../ToggleDatePickerCard/ToggleDatePickerCardUI';
import ToggleTimeCardUI from '../ToggleTimeCard/ToggleTimeCardUI';
import { ONE_DAY } from './../../constants';
import './style/TestDriveFormUI.css';
var TestDriveFormUI = /** @class */ (function (_super) {
    tslib_1.__extends(TestDriveFormUI, _super);
    function TestDriveFormUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestDriveFormUI.prototype.render = function () {
        var _a = this.props, selectedDate = _a.selectedDate, selectedTime = _a.selectedTime;
        var startDate = this.getStartDate();
        return (React.createElement("div", { className: "dr-ui-new-test-drive-form" },
            React.createElement("div", { className: "dr-ui-input-section" },
                React.createElement("div", { className: "dr-ui-control-header-text" }, "What day can you come in?"),
                React.createElement(ToggleDatePickerCardUI, { id: "spTdfdatepicker", startDate: startDate, selectedDate: selectedDate, onChange: this.props.onDayChanged })),
            React.createElement("div", { className: "dr-ui-input-section" },
                React.createElement("div", { className: "dr-ui-control-header-text" }, "What time of day works for you?"),
                React.createElement(ToggleTimeCardUI, { selectedTime: selectedTime, onChange: this.props.onTimeChanged }))));
    };
    TestDriveFormUI.prototype.getStartDate = function () {
        var selectedDate = this.props.selectedDate;
        var todaysDate = new Date();
        todaysDate.setHours(0, 0, 0, 0);
        if (selectedDate && selectedDate.getTime() < todaysDate.getTime()) {
            return selectedDate;
        }
        else if (selectedDate.getTime() > todaysDate.getTime() + 2 * ONE_DAY) {
            return new Date(selectedDate.getTime() - ONE_DAY);
        }
        else {
            return todaysDate;
        }
    };
    return TestDriveFormUI;
}(Component));
export default TestDriveFormUI;
