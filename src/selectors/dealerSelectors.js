"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./../config");
exports.getDealerState = function (state) {
    return state.dealer || {};
};
exports.getApplyTaxesAndFees = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.applyTaxesAndFees || false;
};
exports.getDealerAddress = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.address;
};
exports.getDealerEmail = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.email;
};
exports.getDealerId = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.dealerId;
};
exports.getOwnerId = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.ownerId;
};
exports.getDealerLogoUrl = function (state) {
    var dealer = exports.getDealerState(state);
    if (dealer.logo && config_1.default.urls.dealerLogoUrl) {
        return "" + config_1.default.urls.dealerLogoUrl + dealer.logo;
    }
    return '';
};
exports.getDealerSiteUrl = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.website || null;
};
exports.getDealerName = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.name;
};
exports.getTCPAProvider = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.TCPAProvider;
};
exports.getShopperConsentText = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.TCPAConsentText || '';
};
exports.getDealerPhone = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.phone;
};
exports.getDealerSmsPhone = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.contactOptions.smsPhone;
};
exports.getDealervdpTrackingPhoneNumber = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.vdpTrackingPhoneNumber || undefined;
};
exports.getDealerUsers = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.users;
};
exports.hasCreditDecision = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.hasCreditDecision || false;
};
exports.excludeStdCashIncsLoan = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.excludeStdCashIncsLoan || false;
};
exports.excludeStdCashIncsLease = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.excludeStdCashIncsLease || false;
};
exports.hasLeasing = function (state) {
    var leaseSettings = exports.getDealerState(state).leaseSettings;
    return leaseSettings && leaseSettings.hasLeasing || false;
};
exports.isVppEnabled = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.isVppEnabled || false;
};
exports.useDRCRM = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.useDRCRM || false;
};
exports.useFnI2 = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.useFnI2 || false;
};
exports.isDealertrackCreditProvider = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.isDealertrackCreditProvider;
};
exports.getCreditAppUrl = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.creditAppUrl;
};
exports.getCreditAppButtonText = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.creditAppButtonText;
};
exports.getIsContinueToCheckoutEnabled = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.isContinueToCheckoutEnabled;
};
exports.getConsentText = function (state) { return exports.getDealerState(state).consentText || ''; };
exports.getTCPACheckboxStatus = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.isTCPACheckboxDisabled;
};
exports.getIsNewVehicleSinglePrice = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.isNewVehicleSinglePrice;
};
exports.getIsUsedVehicleSinglePrice = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.isUsedVehicleSinglePrice;
};
exports.getDealerTheme = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.theme;
};
exports.isPrePurchaseAgreementEnabled = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.enablePrePurchaseAgreement;
};
exports.isChatContactOptionEnabled = function (state) {
    var dealer = exports.getDealerState(state);
    return (dealer && dealer.contactOptions) ? dealer.contactOptions.isChatEnabled : false;
};
exports.isMessageContactOptionEnabled = function (state) {
    var dealer = exports.getDealerState(state);
    return (dealer && dealer.contactOptions) ? dealer.contactOptions.isMessageEnabled : false;
};
exports.isPhoneContactOptionEnabled = function (state) {
    var dealer = exports.getDealerState(state);
    return (dealer && dealer.contactOptions) ? dealer.contactOptions.isPhoneEnabled : false;
};
exports.isSmsContactOptionEnabled = function (state) {
    var dealer = exports.getDealerState(state);
    return (dealer && dealer.contactOptions) ? dealer.contactOptions.isSmsEnabled : false;
};
exports.isTradeValuationKbb = function (state) {
    var tradeProvider = state.dealer.tradeInValuationProvider;
    return tradeProvider.toLocaleLowerCase() === 'kelley blue book';
};
exports.getLabelSetName = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.labelSetName;
};
exports.getIsTermsOnSDPEnabled = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.isTermsOnSDPEnabled || false;
};
exports.isLeasePaymentOnMSRP = function (state) {
    var dealer = exports.getDealerState(state);
    return dealer.leaseSettings.isLeasePaymentOnMSRP;
};
