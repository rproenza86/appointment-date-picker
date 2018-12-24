export var dispatchActionWithAnalytics = function (store, type, description) {
    var analyticsAction = {
        meta: {
            middleware: {
                analytics: {
                    name: description
                }
            }
        },
        type: type
    };
    store.dispatch(analyticsAction);
};
