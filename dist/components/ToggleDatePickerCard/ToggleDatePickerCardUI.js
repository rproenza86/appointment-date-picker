import * as tslib_1 from "tslib";
// externals
import DatePicker from 'material-ui/DatePicker';
import * as moment from 'moment';
import * as React from 'react';
// utils
import { generalUseID } from './../../utils/uiHelpersUtil';
// components
import ToggleButtonPanelUI from '../ToggleButtonPanel/ToggleButtonPanelUI';
import { ONE_DAY } from './../../constants';
import './ToggleDatePickerCardUI.css';
export var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["DATE"] = 0] = "DATE";
    ButtonType[ButtonType["PICKER"] = 1] = "PICKER";
})(ButtonType || (ButtonType = {}));
var ToggleDatePickerCardUI = /** @class */ (function (_super) {
    tslib_1.__extends(ToggleDatePickerCardUI, _super);
    function ToggleDatePickerCardUI(props) {
        var _this = _super.call(this, props) || this;
        _this.spTdfdatepicker = null;
        _this.rerender = false;
        _this.renderButton = function (item, tabClass) {
            var onChange = _this.props.onChange;
            return item.type === ButtonType.DATE
                ? _this.renderDayPickerButton(item, tabClass, onChange)
                : _this.renderPickADateButton();
        };
        return _this;
    }
    ToggleDatePickerCardUI.prototype.componentWillMount = function () {
        this.getButtonsAndActiveClassName(this.props.startDate);
    };
    ToggleDatePickerCardUI.prototype.render = function () {
        var analyticsTag = this.props.analyticsTag;
        return (React.createElement(ToggleButtonPanelUI, { activeButtonIdOrClass: this.state.activeClassName || '', analyticsTag: analyticsTag, className: "dr-ui-toggle-date-picker-card", id: this.props.id, renderButton: this.renderButton, toggleButtons: this.state.toggleButtons || [] }));
    };
    ToggleDatePickerCardUI.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var shouldRerender = this.rerender || this.isRerenderNeeded(nextProps, nextState);
        if (shouldRerender) {
            this.setState(tslib_1.__assign({}, this.state, {
                selectedDate: this.normalizeDateTme(nextProps.selectedDate),
                startDate: this.normalizeDateTme(nextProps.startDate)
            }));
            this.rerender = false;
        }
        return shouldRerender;
    };
    ToggleDatePickerCardUI.prototype.isRerenderNeeded = function (nextProps, nextState) {
        if (!nextProps || !nextState) {
            return true;
        }
        if (!nextProps.selectedDate || !nextState.selectedDate) {
            return true;
        }
        if (!nextProps.startDate || !nextState.startDate) {
            return true;
        }
        var nextPropsSelectedDate = this.normalizeDateTme(nextProps.selectedDate);
        var nextPropsStartDate = this.normalizeDateTme(nextProps.startDate);
        var nextStateSelectedDate = this.normalizeDateTme(nextState.selectedDate);
        var nextStateStartDate = this.normalizeDateTme(nextState.startDate);
        var isRerenderNeeded = nextPropsSelectedDate.getTime() !== nextStateSelectedDate.getTime() ||
            nextPropsStartDate.getTime() !== nextStateStartDate.getTime();
        return isRerenderNeeded;
    };
    ToggleDatePickerCardUI.prototype.normalizeDateTme = function (date) {
        date.setHours(0, 0, 0, 0);
        return date;
    };
    ToggleDatePickerCardUI.prototype.renderPickADateButton = function () {
        var _this = this;
        return (React.createElement("div", { id: "dr-ui-date-picker-button", className: "dr-ui-date-picker-button", 
            // tslint:disable-next-line:jsx-no-lambda
            onClick: function () {
                // tslint:disable-next-line:no-unused-expression
                _this.spTdfdatepicker && _this.spTdfdatepicker.openDialog();
            } },
            React.createElement("div", { className: "dr-ui-inner" },
                "Pick a Date",
                React.createElement(DatePicker, { id: ".dr-ui-test-drive-date-picker", style: { visibility: 'hidden' }, ref: function (input) {
                        _this.spTdfdatepicker = input;
                    }, minDate: new Date(), 
                    // tslint:disable-next-line:jsx-no-lambda
                    onChange: function (nullVal, date) {
                        var normalizedDate = _this.normalizeDateTme(date);
                        _this.updateDateButtons(normalizedDate);
                        _this.props.onChange(normalizedDate);
                    } }))));
    };
    ToggleDatePickerCardUI.prototype.getDifferenceBetweenDays = function (day1, day2) {
        if (day1 && day2) {
            return moment(day1)
                .startOf('day')
                .diff(moment(day2).startOf('day'), 'days');
        }
        else {
            return 0;
        }
    };
    ToggleDatePickerCardUI.prototype.getAnimationClass = function (date) {
        var className = 'leftFadeIn';
        if (!date) {
            return className;
        }
        var _a = this.state.selectedDate, selectedDate = _a === void 0 ? new Date() : _a;
        var daysDifference = this.getDifferenceBetweenDays(selectedDate, date);
        if (daysDifference < 0) {
            className = 'rightFadeIn';
        }
        return className;
    };
    ToggleDatePickerCardUI.prototype.renderDayPickerButton = function (item, tabClass, onChange) {
        var _this = this;
        var momentLocal = moment(item.date || new Date());
        var dayOfWeek = momentLocal.format('ddd');
        var dayOfMonth = momentLocal.format('DD');
        var month = momentLocal.format('MMM');
        var animationClass = this.state.animationClass;
        return (React.createElement("div", { id: item.id || String(item.date && item.date.getTime()), key: generalUseID(), className: tabClass, 
            // tslint:disable-next-line:jsx-no-lambda
            onClick: function () {
                if (onChange) {
                    onChange(item.date || new Date());
                    _this.updateDateButtons(item.date);
                }
            } },
            React.createElement("div", { className: 'dr-ui-day-of-week ' + animationClass }, dayOfWeek),
            React.createElement("div", { className: 'dr-ui-day ' + animationClass }, dayOfMonth),
            React.createElement("div", { className: 'dr-ui-month ' + animationClass }, month)));
    };
    ToggleDatePickerCardUI.prototype.updateDateButtons = function (selectedDate) {
        var startDate = new Date(selectedDate.getTime() - ONE_DAY);
        this.getButtonsAndActiveClassName(startDate, selectedDate);
    };
    ToggleDatePickerCardUI.prototype.selectedStartOfDay = function (selectedDate) {
        return selectedDate && moment(selectedDate).startOf('day');
    };
    ToggleDatePickerCardUI.prototype.getButtonsAndActiveClassName = function (startDate, selectedDate) {
        if (selectedDate === void 0) { selectedDate = null; }
        var buttons = [];
        var currentMoment = moment(startDate).startOf('day');
        var selectedStartOfDay = this.selectedStartOfDay(selectedDate || this.props.selectedDate);
        var animationClass = selectedDate ? this.getAnimationClass(selectedDate) : '';
        var activeClassName = '';
        // Logic to check if a component re-render it is needed
        var nextProps = { startDate: startDate, selectedDate: selectedDate || this.props.selectedDate };
        var nextState = {
            selectedDate: (this.state && this.state.selectedDate) || null,
            startDate: (this.state && this.state.startDate) || null
        };
        this.rerender = this.isRerenderNeeded(nextProps, nextState);
        this.setState(tslib_1.__assign({}, this.state, {
            animationClass: animationClass,
            selectedDate: this.normalizeDateTme(selectedDate || this.props.selectedDate),
            startDate: this.normalizeDateTme(startDate)
        }));
        // Days buttons initialization
        for (var i = 1; i <= 3; i++) {
            var className = "dr-ui-toggle-date-" + i;
            buttons.push({
                className: className,
                date: this.normalizeDateTme(currentMoment.toDate()),
                type: ButtonType.DATE
            });
            var diff = currentMoment.diff(selectedStartOfDay, 'days');
            if (selectedDate) {
                diff = currentMoment.diff(moment(selectedDate).startOf('day'), 'days');
            }
            if (diff === 0) {
                activeClassName = className;
            }
            currentMoment.add(1, 'days');
        }
        // DatePicker button initialization
        buttons.push({
            className: 'dr-ui-toggle-date-picker',
            date: null,
            type: ButtonType.PICKER
        });
        this.setState({ toggleButtons: buttons, activeClassName: activeClassName });
    };
    return ToggleDatePickerCardUI;
}(React.Component));
export default ToggleDatePickerCardUI;
