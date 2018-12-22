// externals
import { Store } from 'redux';

// state
import { IStateTree } from './../types';

export const dispatchActionWithAnalytics = (store: Store<IStateTree>, type: string, description: string) => {
    const analyticsAction = {
        meta: {
            middleware: {
                analytics: {
                    name: description
                }
            }
        },
        type
    };
    store.dispatch(analyticsAction);
};
