import { GlobalEventDistributor } from '@rproenza/events-distributor/dist/src/globalEventDistributor';
import { Store } from 'redux';
import './css/index.css';
export declare let EventsDistributor: GlobalEventDistributor;
export declare function initApp(store: Store, rootElementName?: string, EventsDistributorParam?: GlobalEventDistributor, children?: any): void;
export declare function createStore(state?: {} | null): Store<any, import("redux").AnyAction>;
