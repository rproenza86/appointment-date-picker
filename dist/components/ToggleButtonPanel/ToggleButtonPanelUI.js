import * as tslib_1 from "tslib";
// externals
import * as React from 'react';
import './ToggleButtonPanelUI.css';
var ToggleButtonPanelUI = /** @class */ (function (_super) {
    tslib_1.__extends(ToggleButtonPanelUI, _super);
    function ToggleButtonPanelUI(props) {
        return _super.call(this, props) || this;
    }
    ToggleButtonPanelUI.prototype.render = function () {
        var _this = this;
        var _a = this.props, toggleButtons = _a.toggleButtons, renderButton = _a.renderButton;
        var toggleButtonsRendered = toggleButtons && toggleButtons.map(function (item) { return renderButton(item, _this.getTabClass(item)); });
        var className = 'toggle-button-panel-container' +
            (this.props.className ? " " + this.props.className : '');
        return React.createElement("div", { className: className }, toggleButtonsRendered);
    };
    ToggleButtonPanelUI.prototype.getTabClass = function (item) {
        var isSelected = item.id
            ? item.id === this.props.activeButtonIdOrClass
            : item.className === this.props.activeButtonIdOrClass;
        var tabClass = isSelected ? 'tab active' : 'tab inactive';
        return tabClass;
    };
    return ToggleButtonPanelUI;
}(React.Component));
export default ToggleButtonPanelUI;
