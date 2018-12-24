import * as React from 'react';
import { IToggleButtonBase } from '../ToggleButtonPanel/ToggleButtonPanelUI';
import './ToggleTimeCardUI.css';
export declare enum TimeType {
    MORNING = "Morning",
    AFTERNOON = "Afternoon",
    EVENING = "Evening"
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
export declare type ToggleTimeCardProps = IToggleTimeCardStateProps & IToggleTimeCardDispatchProps;
export default class ToggleTimeCardUI extends React.Component<ToggleTimeCardProps, {}> {
    constructor(props: ToggleTimeCardProps);
    render(): JSX.Element;
    private renderButton;
    private getButtonsAndActiveClassName;
}
