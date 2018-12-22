// externals
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
    constructor(props: IToggleButtonPanelProps) {
        super(props);
    }

    public render() {
        const { toggleButtons, renderButton } = this.props;
        const toggleButtonsRendered =
            toggleButtons && toggleButtons.map(item => renderButton(item, this.getTabClass(item)));
        const className =
            'toggle-button-panel-container' +
            (this.props.className ? ` ${this.props.className}` : '');

        return <div className={className}>{toggleButtonsRendered}</div>;
    }

    private getTabClass(item: IToggleButtonBase) {
        const isSelected = item.id
            ? item.id === this.props.activeButtonIdOrClass
            : item.className === this.props.activeButtonIdOrClass;
        const tabClass = isSelected ? 'tab active' : 'tab inactive';
        return tabClass;
    }
}
