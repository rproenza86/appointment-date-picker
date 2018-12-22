import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IStateTree } from '../../types';

import ScheduleTestDriveUI, {
    ITestDriveUIDispatchProps,
    ITestDriveUIStateProps
} from '../../components/TestDrive/ScheduleTestDriveUI';
// tslint:disable:ordered-imports
import { updateDay, updateTime, submitTestDrive } from '../../actions/testDriveActionCreators';
import * as dealerSelectors from '../../selectors/dealerSelectors';
import { isFailedToSchedule, getDayOrDefault, getTimeOfDayOrDefault } from '../../selectors/testDriveSelectors';

function normalizeDayDate(day: string | Date): Date {
    let normalizedDayDate  = new Date();
    if (typeof day === 'string') {
        normalizedDayDate =  new Date(day);
    } else if (day instanceof Date) {
        normalizedDayDate =  day
    }
    return normalizedDayDate;
}

const mapStateToProps = (state: IStateTree): ITestDriveUIStateProps => {
    const address = dealerSelectors.getDealerAddress(state);
    const dealerName = dealerSelectors.getDealerName(state);
    const hasError = isFailedToSchedule(state);
    const errorMsg = hasError ? 'Unable to schedule your test drive due to a system error. Please try again later.' : '';

    const rawDay = getDayOrDefault(state);
    const day = normalizeDayDate(rawDay);
    const time = getTimeOfDayOrDefault(state);

    return {
        address,
        day,
        dealerName,
        errorMsg,
        time
    };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): ITestDriveUIDispatchProps => {
    return {
        onDayChanged: bindActionCreators(updateDay as any, dispatch as any),
        onTimeChanged: bindActionCreators(updateTime as any, dispatch as any),
        submitTestDrive: bindActionCreators(submitTestDrive as any, dispatch as any)
    };
};

const TestDriveContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ScheduleTestDriveUI);


export default TestDriveContainer;
