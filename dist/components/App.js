import * as tslib_1 from "tslib";
import * as React from 'react';
import './../css/App.css';
// import logo from './../assets/images/logo.svg';
import { TestDrive } from './../containers/TestDrive';
// import ScheduleTestDriveUI from './TestDrive/ScheduleTestDriveUI';
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        // const startDate = new Date();
        // const selectedDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000);
        var TD = TestDrive.Container;
        return (React.createElement("div", { className: "App" },
            React.createElement("header", { className: "App-header" },
                React.createElement("h1", { className: "App-title" }, "Welcome to ReactJS")),
            React.createElement("p", { className: "App-intro" },
                "To get started, edit ",
                React.createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            React.createElement(TD
            // tslint:disable:jsx-no-lambda no-console
            , { 
                // tslint:disable:jsx-no-lambda no-console
                submitTestDrive: function () {
                    console.log('date selected ');
                }, onDayChanged: function (date) {
                    console.log('onDayChanged ', date);
                }, onTimeChanged: function (date) {
                    console.log('onTimeChanged ', date);
                } })));
    };
    return App;
}(React.Component));
export default App;
