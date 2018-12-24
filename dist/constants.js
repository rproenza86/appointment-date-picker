export var ONE_DAY = 24 * 60 * 60 * 1000;
export var ONE_YEAR = 365 * ONE_DAY;
// TestDrive Action Types
export var SUBMIT_TEST_DRIVE = 'SUBMIT_TEST_DRIVE';
export var TEST_DRIVE_SUBMIT_SUCCESS = 'TEST_DRIVE_SUBMIT_SUCCESS';
export var SCHEDULE_TEST_DRIVE_REQUEST = 'SCHEDULE_TEST_DRIVE_REQUEST';
export var SCHEDULE_TEST_DRIVE_SUCCESS = 'SCHEDULE_TEST_DRIVE_SUCCESS';
export var SCHEDULE_TEST_DRIVE_FAILURE = 'SCHEDULE_TEST_DRIVE_FAILURE';
export var ROUTE_TEST_DRIVE = 'ROUTE_TEST_DRIVE';
export var ROUTE_TEST_DRIVE_CONFIRMATION = 'ROUTE_TEST_DRIVE_CONFIRMATION';
export var ROUTE_LEAD_FORM = 'ROUTE_LEAD_FORM';
export var UPDATE_TEST_DRIVE_DAY = 'UPDATE_TEST_DRIVE_DAY';
export var UPDATE_TEST_DRIVE_TIME = 'UPDATE_TEST_DRIVE_TIME';
// Route values
export var RouteValues = {
    DEAL_SUMMARY: '/dealSummary/default',
    // tslint:disable-next-line:object-literal-sort-keys
    CREDIT: '/credit',
    CREDIT_DECISION_RESULTS: '/creditDecisionResults',
    HELP_CONTACT: '/helpContact',
    LEAD_FORM: '/leadForm',
    MESSAGING: '/messaging',
    MENU_PRODUCTS: '/menuProducts',
    TRADE_IN: '/tradeIn',
    MY_TERMS_DEAL_SUMMARY: '/dealSummary/myTerms',
    TERMS: '/paymentOptions',
    EDIT_TERMS: '/paymentOptions/edit'
};
