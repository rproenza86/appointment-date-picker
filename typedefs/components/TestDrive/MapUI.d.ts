/// <reference types="react" />
import { IAddress } from './../../types';
import './style/TestDriveConfirmationUI.css';
export interface IMapUIProps {
    address: IAddress;
    dealerName: string;
}
declare const MapUI: (props: IMapUIProps) => JSX.Element;
export default MapUI;
