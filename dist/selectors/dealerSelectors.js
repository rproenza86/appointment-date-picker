import config from './../config';
export var getDealerState = function (state) {
    return state.dealer || {};
};
export var getApplyTaxesAndFees = function (state) {
    var dealer = getDealerState(state);
    return dealer.applyTaxesAndFees || false;
};
export var getDealerAddress = function (state) {
    var dealer = getDealerState(state);
    return dealer.address || {};
};
export var getDealerEmail = function (state) {
    var dealer = getDealerState(state);
    return dealer.email || '';
};
export var getDealerId = function (state) {
    var dealer = getDealerState(state);
    return dealer.dealerId || 0;
};
export var getOwnerId = function (state) {
    var dealer = getDealerState(state);
    return dealer.ownerId;
};
export var getDealerLogoUrl = function (state) {
    var dealer = getDealerState(state);
    if (dealer.logo && config.urls.dealerLogoUrl) {
        return "" + config.urls.dealerLogoUrl + dealer.logo;
    }
    return '';
};
export var getDealerSiteUrl = function (state) {
    var dealer = getDealerState(state);
    return dealer.website || '';
};
export var getDealerName = function (state) {
    var dealer = getDealerState(state);
    return dealer.name || '';
};
export var getTCPAProvider = function (state) {
    var dealer = getDealerState(state);
    return dealer.TCPAProvider || '';
};
export var getShopperConsentText = function (state) {
    var dealer = getDealerState(state);
    return dealer.TCPAConsentText || '';
};
export var getDealerPhone = function (state) {
    var dealer = getDealerState(state);
    return dealer.phone;
};
export var getDealerSmsPhone = function (state) {
    var dealer = getDealerState(state);
    return (dealer.contactOptions && dealer.contactOptions.smsPhone) || '';
};
export var getDealervdpTrackingPhoneNumber = function (state) {
    var dealer = getDealerState(state);
    return dealer.vdpTrackingPhoneNumber || undefined;
};
export var getDealerUsers = function (state) {
    var dealer = getDealerState(state);
    return dealer.users;
};
export var hasCreditDecision = function (state) {
    var dealer = getDealerState(state);
    return dealer.hasCreditDecision || false;
};
export var excludeStdCashIncsLoan = function (state) {
    var dealer = getDealerState(state);
    return dealer.excludeStdCashIncsLoan || false;
};
export var excludeStdCashIncsLease = function (state) {
    var dealer = getDealerState(state);
    return dealer.excludeStdCashIncsLease || false;
};
export var hasLeasing = function (state) {
    var leaseSettings = getDealerState(state).leaseSettings;
    return leaseSettings && leaseSettings.hasLeasing || false;
};
export var isVppEnabled = function (state) {
    var dealer = getDealerState(state);
    return dealer.isVppEnabled || false;
};
export var useDRCRM = function (state) {
    var dealer = getDealerState(state);
    return dealer.useDRCRM || false;
};
export var useFnI2 = function (state) {
    var dealer = getDealerState(state);
    return dealer.useFnI2 || false;
};
export var isDealertrackCreditProvider = function (state) {
    var dealer = getDealerState(state);
    return dealer.isDealertrackCreditProvider || false;
};
export var getCreditAppUrl = function (state) {
    var dealer = getDealerState(state);
    return dealer.creditAppUrl;
};
export var getCreditAppButtonText = function (state) {
    var dealer = getDealerState(state);
    return dealer.creditAppButtonText;
};
export var getIsContinueToCheckoutEnabled = function (state) {
    var dealer = getDealerState(state);
    return dealer.isContinueToCheckoutEnabled;
};
export var getConsentText = function (state) { return getDealerState(state).consentText || ''; };
export var getTCPACheckboxStatus = function (state) {
    var dealer = getDealerState(state);
    return dealer.isTCPACheckboxDisabled;
};
export var getIsNewVehicleSinglePrice = function (state) {
    var dealer = getDealerState(state);
    return dealer.isNewVehicleSinglePrice;
};
export var getIsUsedVehicleSinglePrice = function (state) {
    var dealer = getDealerState(state);
    return dealer.isUsedVehicleSinglePrice;
};
export var getDealerTheme = function (state) {
    var dealer = getDealerState(state);
    return dealer.theme || '';
};
export var isPrePurchaseAgreementEnabled = function (state) {
    var dealer = getDealerState(state);
    return dealer.enablePrePurchaseAgreement;
};
export var isChatContactOptionEnabled = function (state) {
    var dealer = getDealerState(state);
    return (dealer && dealer.contactOptions) ? dealer.contactOptions.isChatEnabled : false;
};
export var isMessageContactOptionEnabled = function (state) {
    var dealer = getDealerState(state);
    return (dealer && dealer.contactOptions) ? dealer.contactOptions.isMessageEnabled : false;
};
export var isPhoneContactOptionEnabled = function (state) {
    var dealer = getDealerState(state);
    return (dealer && dealer.contactOptions) ? dealer.contactOptions.isPhoneEnabled : false;
};
export var isSmsContactOptionEnabled = function (state) {
    var dealer = getDealerState(state);
    return (dealer && dealer.contactOptions) ? dealer.contactOptions.isSmsEnabled : false;
};
export var isTradeValuationKbb = function (state) {
    var tradeProvider = (state.dealer && state.dealer.tradeInValuationProvider) || '';
    return tradeProvider.toLocaleLowerCase() === 'kelley blue book';
};
export var getLabelSetName = function (state) {
    var dealer = getDealerState(state);
    return dealer.labelSetName;
};
export var getIsTermsOnSDPEnabled = function (state) {
    var dealer = getDealerState(state);
    return dealer.isTermsOnSDPEnabled || false;
};
export var isLeasePaymentOnMSRP = function (state) {
    var dealer = getDealerState(state);
    return (dealer.leaseSettings && dealer.leaseSettings.isLeasePaymentOnMSRP) || false;
};
