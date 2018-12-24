import { Store } from 'redux';
import { IStateTree } from './../types';
export declare const testDriveMiddleware: (store: Store<IStateTree, import("redux").AnyAction>) => (next: any) => (action: any) => void;
