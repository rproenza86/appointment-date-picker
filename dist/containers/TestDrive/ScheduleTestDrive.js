import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScheduleTestDriveUI from '../../components/TestDrive/ScheduleTestDriveUI';
// tslint:disable:ordered-imports
import { updateDay, updateTime, submitTestDrive } from '../../actions/testDriveActionCreators';
import * as dealerSelectors from '../../selectors/dealerSelectors';
import { isFailedToSchedule, getDayOrDefault, getTimeOfDayOrDefault } from '../../selectors/testDriveSelectors';
function normalizeDayDate(day) {
    var normalizedDayDate = new Date();
    if (typeof day === 'string') {
        normalizedDayDate = new Date(day);
    }
    else if (day instanceof Date) {
        normalizedDayDate = day;
    }
    return normalizedDayDate;
}
var mapStateToProps = function (state) {
    var address = dealerSelectors.getDealerAddress(state);
    var dealerName = dealerSelectors.getDealerName(state);
    var hasError = isFailedToSchedule(state);
    var errorMsg = hasError ? 'Unable to schedule your test drive due to a system error. Please try again later.' : '';
    var rawDay = getDayOrDefault(state);
    var day = normalizeDayDate(rawDay);
    var time = getTimeOfDayOrDefault(state);
    return {
        address: address,
        day: day,
        dealerName: dealerName,
        errorMsg: errorMsg,
        time: time
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        onDayChanged: bindActionCreators(updateDay, dispatch),
        onTimeChanged: bindActionCreators(updateTime, dispatch),
        submitTestDrive: bindActionCreators(submitTestDrive, dispatch)
    };
};
var TestDriveContainer = connect(mapStateToProps, mapDispatchToProps)(ScheduleTestDriveUI);
export default TestDriveContainer;
