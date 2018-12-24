import { Store } from 'redux';
import { IStateTree } from './../types';
export declare const dispatchActionWithAnalytics: (store: Store<IStateTree, import("redux").AnyAction>, type: string, description: string) => void;
