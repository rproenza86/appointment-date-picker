// externals
import * as React from 'react';
import { Component } from 'react';

// components
import ToggleDatePickerCardUI from '../ToggleDatePickerCard/ToggleDatePickerCardUI';
import ToggleTimeCardUI, { TimeType } from '../ToggleTimeCard/ToggleTimeCardUI';
import { ONE_DAY } from './../../constants';
import './style/TestDriveFormUI.css';

export interface ITestDriveFormUIStateProps {
    selectedDate: Date;
    selectedTime: TimeType;
}

export interface ITestDriveFormUIDispatchProps {
    onDayChanged:  (date: Date) => void;
    onTimeChanged: (time: TimeType) => void;
}

export interface ITestDriveFormUIProps extends ITestDriveFormUIStateProps, ITestDriveFormUIDispatchProps {
}

class TestDriveFormUI extends Component<ITestDriveFormUIProps, {}> {
    public render() {
        const { selectedDate, selectedTime } = this.props;
        const startDate = this.getStartDate();
        return (
            <div className="dr-ui-new-test-drive-form">
                <div className="dr-ui-input-section">
                    <div className="dr-ui-control-header-text">What day can you come in?</div>
                    <ToggleDatePickerCardUI
                        id="spTdfdatepicker"
                        startDate={startDate}
                        selectedDate={selectedDate}
                        onChange={this.props.onDayChanged}
                    />
                </div>
                <div className="dr-ui-input-section">
                    <div className="dr-ui-control-header-text">What time of day works for you?</div>
                    <ToggleTimeCardUI
                        selectedTime={selectedTime}
                        onChange={this.props.onTimeChanged}
                    />
                </div>
            </div>
        );
    }

    private getStartDate(): Date {
        const { selectedDate } = this.props;
        const todaysDate = new Date();
        todaysDate.setHours(0, 0, 0, 0);

        if (selectedDate && selectedDate.getTime() < todaysDate.getTime()) {
            return selectedDate;
        } else if (selectedDate.getTime() > todaysDate.getTime() + 2 * ONE_DAY) {
            return new Date(selectedDate.getTime() - ONE_DAY);
        } else {
            return todaysDate;
        }
    }
}

export default TestDriveFormUI;
