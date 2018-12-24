import { Component } from 'react';
import './CardActionButtonUI';
export interface ICardActionButtonUIStateProps {
    isSelected: boolean;
    buttonText: string;
    disabled: boolean;
}
export interface ICardActionButtonUIDispatchProps {
    onClick: () => void;
}
export interface ICardActionButtonUIProps extends ICardActionButtonUIStateProps, ICardActionButtonUIDispatchProps {
}
export default class CardActionButtonUI extends Component<ICardActionButtonUIProps, {}> {
    render(): JSX.Element;
    private handleClick;
    private getButtonContent;
}
