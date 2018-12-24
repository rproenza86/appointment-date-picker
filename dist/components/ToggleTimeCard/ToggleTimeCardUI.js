import * as tslib_1 from "tslib";
// externals
import * as React from 'react';
// utils
import { generalUseID } from './../../utils/uiHelpersUtil';
// components
import ToggleButtonPanelUI from '../ToggleButtonPanel/ToggleButtonPanelUI';
import './ToggleTimeCardUI.css';
export var TimeType;
(function (TimeType) {
    TimeType["MORNING"] = "Morning";
    TimeType["AFTERNOON"] = "Afternoon";
    TimeType["EVENING"] = "Evening";
})(TimeType || (TimeType = {}));
var ToggleTimeCardUI = /** @class */ (function (_super) {
    tslib_1.__extends(ToggleTimeCardUI, _super);
    function ToggleTimeCardUI(props) {
        var _this = _super.call(this, props) || this;
        _this.renderButton = function (item, tabClass) {
            var onChange = _this.props.onChange;
            return (React.createElement("div", { key: generalUseID(), id: item.id, className: tabClass, 
                // tslint:disable-next-line:jsx-no-lambda
                onClick: function () {
                    if (onChange) {
                        onChange(item.name);
                    }
                } },
                React.createElement("div", { className: "toggle-time-title" }, item.name)));
        };
        return _this;
    }
    ToggleTimeCardUI.prototype.render = function () {
        var _a = this.props, analyticsTag = _a.analyticsTag, selectedTime = _a.selectedTime;
        var _b = this.getButtonsAndActiveClassName(selectedTime), buttons = _b.buttons, activeClassName = _b.activeClassName;
        return (React.createElement(ToggleButtonPanelUI, { activeButtonIdOrClass: activeClassName, analyticsTag: analyticsTag, className: "dr-ui-toggle-time-picker-card", id: this.props.id, renderButton: this.renderButton, toggleButtons: buttons }));
    };
    ToggleTimeCardUI.prototype.getButtonsAndActiveClassName = function (selectedTime) {
        var buttons = [];
        var times = [TimeType.MORNING, TimeType.AFTERNOON, TimeType.EVENING];
        var activeClassName = '';
        for (var i = 0; i < times.length; i++) {
            var className = "dr-ui-toggle-time-card-" + i;
            var name_1 = times[i];
            buttons.push({ className: className, name: name_1 });
            var nameLower = name_1 && name_1.toLowerCase();
            var selectedTimeLower = selectedTime && selectedTime.toLowerCase();
            if (nameLower === selectedTimeLower) {
                activeClassName = className;
            }
        }
        return { buttons: buttons, activeClassName: activeClassName };
    };
    return ToggleTimeCardUI;
}(React.Component));
export default ToggleTimeCardUI;
