import * as tslib_1 from "tslib";
import * as React from 'react';
import { Component } from 'react';
import './CardActionButtonUI';
var CardActionButtonUI = /** @class */ (function (_super) {
    tslib_1.__extends(CardActionButtonUI, _super);
    function CardActionButtonUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardActionButtonUI.prototype.render = function () {
        return (React.createElement("div", { className: "dr-ui-package-price-add-btn" },
            React.createElement("button", { disabled: this.props.disabled, className: "btn btn-secondary btn-sm btn-block", type: "button", onClick: this.handleClick }, this.getButtonContent())));
    };
    CardActionButtonUI.prototype.handleClick = function () {
        if (this.props.onClick) {
            this.props.onClick();
        }
    };
    CardActionButtonUI.prototype.getButtonContent = function () {
        if (this.props.isSelected) {
            return React.createElement("i", { className: "fa fa-check" });
        }
        else {
            return React.createElement("span", null, this.props.buttonText);
        }
    };
    return CardActionButtonUI;
}(Component));
export default CardActionButtonUI;
