import * as React from 'react';
import { IToggleButtonBase } from '../ToggleButtonPanel/ToggleButtonPanelUI';
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
export declare type ToggleDatePickerCardProps = IToggleDatePickerCardStateProps & IToggleDatePickerCardDispatchProps;
export declare enum ButtonType {
    DATE = 0,
    PICKER = 1
}
export interface IToggleButton extends IToggleButtonBase {
    className: string;
    date?: Date | null;
    type: ButtonType;
}
export default class ToggleDatePickerCardUI extends React.Component<ToggleDatePickerCardProps, IToggleDatePickerCardState> {
    private spTdfdatepicker;
    private rerender;
    constructor(props: ToggleDatePickerCardProps);
    componentWillMount(): void;
    render(): JSX.Element;
    shouldComponentUpdate(): boolean;
    private isRerenderNeeded;
    private normalizeDateTme;
    private renderPickADateButton;
    private getDifferenceBetweenDays;
    private getAnimationClass;
    private renderDayPickerButton;
    private renderButton;
    private updateDateButtons;
    private selectedStartOfDay;
    private getButtonsAndActiveClassName;
}
