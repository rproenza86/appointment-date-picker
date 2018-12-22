// externals
import * as React from 'react';

// components
import MapUI from './MapUI';
import './style/TestDriveUI.css';
import TestDriveFormUI from './TestDriveFormUI';

// interfaces/types
import { IAddress } from './../../types';
import { TimeType } from './../ToggleTimeCard/ToggleTimeCardUI';

export interface ITestDriveUIStateProps {
    address: IAddress;
    dealerName: string;
    educationTitle?: string;
    educationDescription?: string;
    errorMsg: string;
    day: Date;
    time: TimeType;
}

export interface ITestDriveUIDispatchProps {
    submitTestDrive: any;
    onDayChanged: (day: Date) => void;
    onTimeChanged: (time: TimeType) => void;
}

export interface ITestDriveUIProps extends ITestDriveUIStateProps, ITestDriveUIDispatchProps {}

class TestDriveUI extends React.Component<ITestDriveUIProps, {}> {
    public render() {
        const { address, dealerName, errorMsg, } = this.props;
        const errorMsgComponent = !errorMsg ? null : (
            <div className="form-group text-center dr-sp-test-drive-error">
                <span className="message-error"> {errorMsg} </span>
            </div>
        );

        return (
            <div className="dr-ui-test-drive">
                {address && <MapUI address={address} dealerName={dealerName} />}
                <TestDriveFormUI
                    selectedDate={this.props.day}
                    selectedTime={this.props.time}
                    onDayChanged={this.props.onDayChanged}
                    onTimeChanged={this.props.onTimeChanged}
                />
                {errorMsgComponent}
            </div>
        );
    }
}

export default TestDriveUI;
