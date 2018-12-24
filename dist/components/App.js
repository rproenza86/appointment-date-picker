import * as tslib_1 from "tslib";
import * as React from 'react';
import './../css/App.css';
import { TestDrive } from './../containers/TestDrive';
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var TD = TestDrive.Container;
        return (React.createElement("div", { className: "App" },
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
