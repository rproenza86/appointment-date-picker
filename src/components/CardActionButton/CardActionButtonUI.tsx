import * as React from 'react';
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
    public render() {
        return (
            <div className="dr-ui-package-price-add-btn">
                <button disabled={this.props.disabled}
                        className="btn btn-secondary btn-sm btn-block"
                        type="button"
                        onClick={this.handleClick} >
                    {this.getButtonContent()}
                </button>
            </div>
        );
    }

    private handleClick() {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    private getButtonContent() {
        if (this.props.isSelected) {
            return <i className="fa fa-check"/>;
        } else {
            return <span>{this.props.buttonText}</span>;
        }
    }
}
