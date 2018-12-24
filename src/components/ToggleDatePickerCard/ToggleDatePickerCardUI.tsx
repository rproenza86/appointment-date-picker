// externals
import DatePicker from 'material-ui/DatePicker';
import * as moment from 'moment';
import * as React from 'react';

// utils
import { generalUseID } from './../../utils/uiHelpersUtil';

// components
import ToggleButtonPanelUI, { IToggleButtonBase } from '../ToggleButtonPanel/ToggleButtonPanelUI';
import { ONE_DAY } from './../../constants';
import './ToggleDatePickerCardUI.css';

export interface IToggleDatePickerCardStateProps {
    id: string;
    analyticsTag?: string;
    startDate: Date;
    selectedDate: Date;
}

export interface IToggleDatePickerCardState {
    startDate?: Date;
    selectedDate?: Date;
    animationClass?: string;
    activeClassName?: string;
    toggleButtons?: IToggleButton[];
}

export interface IToggleDatePickerCardDispatchProps {
    onChange: (date: Date) => void;
}

export type ToggleDatePickerCardProps = IToggleDatePickerCardStateProps &
    IToggleDatePickerCardDispatchProps;

export enum ButtonType {
    DATE,
    PICKER
}

export interface IToggleButton extends IToggleButtonBase {
    className: string;
    date?: Date | null ;
    type: ButtonType;
}

export default class ToggleDatePickerCardUI extends React.Component<
    ToggleDatePickerCardProps,
    IToggleDatePickerCardState
> {
    private spTdfdatepicker: any = null;
    private rerender: boolean = false;

    constructor(props: ToggleDatePickerCardProps) {
        super(props);
    }

    public componentWillMount() {
        this.getButtonsAndActiveClassName(this.props.startDate);
    }

    public render() {
        const { analyticsTag } = this.props;

        return (
            <ToggleButtonPanelUI
                activeButtonIdOrClass={this.state.activeClassName || ''}
                analyticsTag={analyticsTag}
                className="dr-ui-toggle-date-picker-card"
                id={this.props.id}
                renderButton={this.renderButton}
                toggleButtons={this.state.toggleButtons || []}
            />
        );
    }

    public shouldComponentUpdate(nextProps: ToggleDatePickerCardProps, nextState: IToggleDatePickerCardState) {
        const shouldRerender = this.rerender || this.isRerenderNeeded(nextProps, nextState);
        if(shouldRerender){
            this.setState({
                ...this.state,
                ...{
                    selectedDate: this.normalizeDateTme(nextProps.selectedDate),
                    startDate: this.normalizeDateTme(nextProps.startDate)
                }
            });
            this.rerender = false;
        }
        return shouldRerender;
    }

    private isRerenderNeeded(nextProps: ToggleDatePickerCardProps, nextState: IToggleDatePickerCardState) {
        if (!nextProps || !nextState) {
            return true;
        }
        if (!nextProps.selectedDate || !nextState.selectedDate) {
            return true;
        }
        if (!nextProps.startDate || !nextState.startDate) {
            return true;
        }
        const nextPropsSelectedDate = this.normalizeDateTme(nextProps.selectedDate);
        const nextPropsStartDate = this.normalizeDateTme(nextProps.startDate);
        const nextStateSelectedDate = this.normalizeDateTme(nextState.selectedDate);
        const nextStateStartDate = this.normalizeDateTme(nextState.startDate);
        const isRerenderNeeded =
            nextPropsSelectedDate.getTime() !== nextStateSelectedDate.getTime() ||
            nextPropsStartDate.getTime() !== nextStateStartDate.getTime();
        return isRerenderNeeded;
    }

    private normalizeDateTme(date: Date) {
        date.setHours(0, 0, 0, 0);
        return date;
    }

    private renderPickADateButton() {
        return (
            <div
                id="dr-ui-date-picker-button"
                className="dr-ui-date-picker-button"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => {
                    // tslint:disable-next-line:no-unused-expression
                    this.spTdfdatepicker && this.spTdfdatepicker.openDialog();
                }}
            >
                <div className="dr-ui-inner">
                    Pick a Date
                    <DatePicker
                        id=".dr-ui-test-drive-date-picker"
                        style={{ visibility: 'hidden' }}
                        ref={input => {
                            this.spTdfdatepicker = input;
                        }}
                        minDate={new Date()}
                        // tslint:disable-next-line:jsx-no-lambda
                        onChange={(nullVal: undefined, date: Date) => {
                            const normalizedDate = this.normalizeDateTme(date);
                            this.updateDateButtons(normalizedDate);
                            this.props.onChange(normalizedDate);
                        }}
                    />
                </div>
            </div>
        );
    }

    private getDifferenceBetweenDays(day1: Date, day2: Date) {
        if (day1 && day2) {
            return moment(day1)
                .startOf('day')
                .diff(moment(day2).startOf('day'), 'days');
        } else {
            return 0;
        }
    }

    private getAnimationClass(date: Date): string {
        let className = 'leftFadeIn';
        if (!date) {
            return className;
        }

        const { selectedDate = new Date() } = this.state;
        const daysDifference = this.getDifferenceBetweenDays(selectedDate, date);

        if (daysDifference < 0) {
            className = 'rightFadeIn';
        }

        return className;
    }

    private renderDayPickerButton(
        item: IToggleButton,
        tabClass: string,
        onChange: (date: Date) => any
    ) {
        const momentLocal = moment(item.date || new Date());
        const dayOfWeek = momentLocal.format('ddd');
        const dayOfMonth = momentLocal.format('DD');
        const month = momentLocal.format('MMM');
        const animationClass = this.state.animationClass;

        return (
            <div
                id={item.id || String(item.date && item.date.getTime())}
                key={generalUseID()}
                className={tabClass}
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => {
                    if (onChange) {
                        onChange(item.date || new Date());
                        this.updateDateButtons(item.date as Date);
                    }
                }}
            >
                <div className={'dr-ui-day-of-week ' + animationClass}>{dayOfWeek}</div>
                <div className={'dr-ui-day ' + animationClass}>{dayOfMonth}</div>
                <div className={'dr-ui-month ' + animationClass}>{month}</div>
            </div>
        );
    }

    private renderButton = (item: IToggleButton, tabClass: string) => {
        const { onChange } = this.props;

        return item.type === ButtonType.DATE
            ? this.renderDayPickerButton(item, tabClass, onChange)
            : this.renderPickADateButton();
    };

    private updateDateButtons(selectedDate: Date) {
        const startDate = new Date(selectedDate.getTime() - ONE_DAY);
        this.getButtonsAndActiveClassName(startDate, selectedDate);
    }

    private selectedStartOfDay(selectedDate: Date) {
        return selectedDate && moment(selectedDate).startOf('day');
    }

    private getButtonsAndActiveClassName(startDate: Date, selectedDate: Date | null = null) {
        const buttons = [] as IToggleButton[];
        const currentMoment = moment(startDate).startOf('day');
        const selectedStartOfDay = this.selectedStartOfDay(selectedDate || this.props.selectedDate);
        const animationClass = selectedDate ? this.getAnimationClass(selectedDate) : '';
        let activeClassName = '';
        // Logic to check if a component re-render it is needed
        const nextProps = { startDate, selectedDate: selectedDate || this.props.selectedDate };
        const nextState = {
            selectedDate: (this.state && this.state.selectedDate) || null,
            startDate: (this.state && this.state.startDate) || null
        };
        this.rerender = this.isRerenderNeeded(nextProps as any, nextState as any);

        this.setState({
            ...this.state,
            ...{
                animationClass,
                selectedDate: this.normalizeDateTme(selectedDate || this.props.selectedDate),
                startDate: this.normalizeDateTme(startDate)
            }
        });
        // Days buttons initialization
        for (let i = 1; i <= 3; i++) {
            const className = `dr-ui-toggle-date-${i}`;
            buttons.push({
                className,
                date: this.normalizeDateTme(currentMoment.toDate()),
                type: ButtonType.DATE
            });
            let diff = currentMoment.diff(selectedStartOfDay, 'days');
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
        this.setState({ toggleButtons: buttons, activeClassName });
    }
}
