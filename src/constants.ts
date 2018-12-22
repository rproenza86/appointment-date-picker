export const ONE_DAY = 24 * 60 * 60 * 1000;
export const ONE_YEAR = 365 * ONE_DAY;

// TestDrive Action Types
export const SUBMIT_TEST_DRIVE = 'SUBMIT_TEST_DRIVE';
export const TEST_DRIVE_SUBMIT_SUCCESS = 'TEST_DRIVE_SUBMIT_SUCCESS';
export const SCHEDULE_TEST_DRIVE_REQUEST = 'SCHEDULE_TEST_DRIVE_REQUEST';
export const SCHEDULE_TEST_DRIVE_SUCCESS = 'SCHEDULE_TEST_DRIVE_SUCCESS';
export const SCHEDULE_TEST_DRIVE_FAILURE = 'SCHEDULE_TEST_DRIVE_FAILURE';
export const ROUTE_TEST_DRIVE = 'ROUTE_TEST_DRIVE';
export const ROUTE_TEST_DRIVE_CONFIRMATION = 'ROUTE_TEST_DRIVE_CONFIRMATION';
export const ROUTE_LEAD_FORM = 'ROUTE_LEAD_FORM';
export const UPDATE_TEST_DRIVE_DAY = 'UPDATE_TEST_DRIVE_DAY';
export const UPDATE_TEST_DRIVE_TIME = 'UPDATE_TEST_DRIVE_TIME';

// Route values
export const RouteValues = {
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
