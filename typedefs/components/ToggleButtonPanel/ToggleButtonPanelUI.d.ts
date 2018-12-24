import * as React from 'react';
import { ReactNode } from 'react';
import './ToggleButtonPanelUI.css';
export interface IToggleButtonBase {
    id?: string;
    className?: string;
}
export interface IToggleButtonPanelProps {
    activeButtonIdOrClass: string;
    analyticsTag?: string;
    id?: string;
    className?: string;
    renderButton: (item: IToggleButtonBase, tabClass: string) => ReactNode;
    toggleButtons: IToggleButtonBase[];
}
export default class ToggleButtonPanelUI extends React.Component<IToggleButtonPanelProps, {}> {
    constructor(props: IToggleButtonPanelProps);
    render(): JSX.Element;
    private getTabClass;
}
