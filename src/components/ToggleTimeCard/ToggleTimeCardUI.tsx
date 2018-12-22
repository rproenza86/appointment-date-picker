// externals
import * as React from 'react';

// utils
import { generalUseID } from './../../utils/uiHelpersUtil';

// components
import ToggleButtonPanelUI, { IToggleButtonBase } from '../ToggleButtonPanel/ToggleButtonPanelUI';
import './ToggleTimeCardUI.css';

export enum TimeType {
    MORNING = 'Morning',
    AFTERNOON = 'Afternoon',
    EVENING = 'Evening'
}

export interface IToggleTimeInfo extends IToggleButtonBase {
    name: TimeType;
}

export interface IToggleTimeCardStateProps {
    id?: string;
    analyticsTag?: string;
    selectedTime: TimeType;
}

export interface IToggleTimeCardDispatchProps {
    onChange: (time: TimeType) => void;
}

export type ToggleTimeCardProps = IToggleTimeCardStateProps & IToggleTimeCardDispatchProps;

export default class ToggleTimeCardUI extends React.Component<ToggleTimeCardProps, {}> {
    constructor(props: ToggleTimeCardProps) {
        super(props);
    }

    public render() {
        const { analyticsTag, selectedTime } = this.props;
        const { buttons, activeClassName } = this.getButtonsAndActiveClassName(selectedTime);

        return (
            <ToggleButtonPanelUI
                activeButtonIdOrClass={activeClassName}
                analyticsTag={analyticsTag}
                className="dr-ui-toggle-time-picker-card"
                id={this.props.id}
                renderButton={this.renderButton}
                toggleButtons={buttons}
            />
        );
    }

    private renderButton = (item: IToggleTimeInfo, tabClass: string) => {
        const { onChange } = this.props;

        return (
            <div
                key={generalUseID()}
                id={item.id}
                className={tabClass}
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => {
                    if (onChange) {
                        onChange(item.name);
                    }
                }}
            >
                <div className="toggle-time-title">{item.name}</div>
            </div>
        );
    };

    private getButtonsAndActiveClassName(
        selectedTime: TimeType
    ): { buttons: IToggleTimeInfo[]; activeClassName: string } {
        const buttons = [] as IToggleTimeInfo[];
        const times = [TimeType.MORNING, TimeType.AFTERNOON, TimeType.EVENING];
        let activeClassName = '';
        for (let i = 0; i < times.length; i++) {
            const className = `dr-ui-toggle-time-card-${i}`;
            const name = times[i];
            buttons.push({ className, name });
            const nameLower = name && name.toLowerCase();
            const selectedTimeLower = selectedTime && selectedTime.toLowerCase();
            if (nameLower === selectedTimeLower) {
                activeClassName = className;
            }
        }
        return { buttons, activeClassName };
    }
}
