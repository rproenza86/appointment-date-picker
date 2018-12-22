import config from './../config';
import { IAddress, IDealerState, IStateTree } from './../types';

export const getDealerState = (state: IStateTree): IDealerState => {
    return state.dealer || {};
};

export const getApplyTaxesAndFees = (state: IStateTree): boolean => {
    const dealer = getDealerState(state);
    return dealer.applyTaxesAndFees || false;
};

export const getDealerAddress = (state: IStateTree): IAddress => {
    const dealer = getDealerState(state);
    return dealer.address || ({} as IAddress);
};

export const getDealerEmail = (state: IStateTree): string => {
    const dealer = getDealerState(state);
    return dealer.email || '';
};

export const getDealerId = (state: IStateTree): number => {
    const dealer = getDealerState(state);
    return dealer.dealerId || 0;
};

export const getOwnerId = (state: IStateTree) => {
    const dealer = getDealerState(state);
    return dealer.ownerId;
};

export const getDealerLogoUrl = (state: IStateTree) => {
    const dealer = getDealerState(state);
    if (dealer.logo && config.urls.dealerLogoUrl) {
        return `${config.urls.dealerLogoUrl}${dealer.logo}`;
    }
    return '';
};

export const getDealerSiteUrl = (state: IStateTree): string => {
    const dealer = getDealerState(state);
    return dealer.website || '';
};

export const getDealerName = (state: IStateTree): string => {
    const dealer = getDealerState(state);
    return dealer.name || '';
};

export const getTCPAProvider = (state: IStateTree): string => {
    const dealer = getDealerState(state);
    return dealer.TCPAProvider || '';
};

export const getShopperConsentText = (state: IStateTree): string => {
    const dealer = getDealerState(state);
    return dealer.TCPAConsentText || '';
};

export const getDealerPhone = (state: IStateTree) => {
    const dealer = getDealerState(state);
    return dealer.phone;
};

export const getDealerSmsPhone = (state: IStateTree) => {
    const dealer = getDealerState(state);
    return (dealer.contactOptions && dealer.contactOptions.smsPhone) || '';
};

export const getDealervdpTrackingPhoneNumber = (state: IStateTree) => {
    const dealer = getDealerState(state);
    return dealer.vdpTrackingPhoneNumber || undefined;
};

export const getDealerUsers = (state: IStateTree) => {
    const dealer = getDealerState(state);
    return dealer.users;
};

export const hasCreditDecision = (state: IStateTree) => {
    const dealer = getDealerState(state);
    return dealer.hasCreditDecision || false;
};

export const excludeStdCashIncsLoan = (state: IStateTree) => {
    const dealer = getDealerState(state);
    return dealer.excludeStdCashIncsLoan || false;
};

export const excludeStdCashIncsLease = (state: IStateTree) => {
    const dealer = getDealerState(state);
    return dealer.excludeStdCashIncsLease || false;
};

export const hasLeasing = (state: IStateTree): boolean => {
    const leaseSettings = getDealerState(state).leaseSettings;
    return leaseSettings && leaseSettings.hasLeasing || false;
};

export const isVppEnabled = (state: IStateTree) => {
    const dealer = getDealerState(state);
    return dealer.isVppEnabled || false;
};

export const useDRCRM = (state: IStateTree): boolean => {
    const dealer = getDealerState(state);
    return dealer.useDRCRM || false;
};

export const useFnI2 = (state: IStateTree): boolean => {
    const dealer = getDealerState(state);
    return dealer.useFnI2 || false;
};

export const isDealertrackCreditProvider = (state: IStateTree): boolean => {
    const dealer = getDealerState(state);
    return dealer.isDealertrackCreditProvider || false;
};

export const getCreditAppUrl = (state: IStateTree) => {
    const dealer = getDealerState(state);
    return dealer.creditAppUrl;
};

export const getCreditAppButtonText = (state: IStateTree) => {
    const dealer = getDealerState(state);
    return dealer.creditAppButtonText;
};

export const getIsContinueToCheckoutEnabled = (state: IStateTree) => {
    const dealer = getDealerState(state);
    return dealer.isContinueToCheckoutEnabled;
};

export const getConsentText = (state: IStateTree): string => getDealerState(state).consentText || '';

export const getTCPACheckboxStatus = (state: IStateTree) => {
    const dealer = getDealerState(state);
    return dealer.isTCPACheckboxDisabled;
};

export const getIsNewVehicleSinglePrice = (state: IStateTree) => {
    const dealer = getDealerState(state);
    return dealer.isNewVehicleSinglePrice;
};

export const getIsUsedVehicleSinglePrice = (state: IStateTree) => {
    const dealer = getDealerState(state);
    return dealer.isUsedVehicleSinglePrice;
};

export const getDealerTheme = (state: IStateTree): string => {
    const dealer = getDealerState(state);
    return dealer.theme || '';
};

export const isPrePurchaseAgreementEnabled = (state: IStateTree) => {
    const dealer = getDealerState(state);
    return dealer.enablePrePurchaseAgreement;
};

export const isChatContactOptionEnabled = (state: IStateTree) => {
    const dealer = getDealerState(state);
    return (dealer && dealer.contactOptions) ? dealer.contactOptions.isChatEnabled : false;
};

export const isMessageContactOptionEnabled = (state: IStateTree) => {
    const dealer = getDealerState(state);
    return (dealer && dealer.contactOptions) ? dealer.contactOptions.isMessageEnabled : false;
};

export const isPhoneContactOptionEnabled = (state: IStateTree) => {
    const dealer = getDealerState(state);
    return (dealer && dealer.contactOptions) ? dealer.contactOptions.isPhoneEnabled : false;
};

export const isSmsContactOptionEnabled = (state: IStateTree) => {
    const dealer = getDealerState(state);
    return (dealer && dealer.contactOptions) ? dealer.contactOptions.isSmsEnabled : false;
};

export const isTradeValuationKbb = (state: IStateTree) => {
    const tradeProvider =( state.dealer && state.dealer.tradeInValuationProvider) || '';
    return tradeProvider.toLocaleLowerCase() === 'kelley blue book';
};

export const getLabelSetName = (state: IStateTree) => {
    const dealer = getDealerState(state);
    return dealer.labelSetName;
};

export const getIsTermsOnSDPEnabled = (state: IStateTree) => {
    const dealer = getDealerState(state);
    return dealer.isTermsOnSDPEnabled || false;
};

export const isLeasePaymentOnMSRP = (state: IStateTree): boolean => {
    const dealer = getDealerState(state);
    return (dealer.leaseSettings && dealer.leaseSettings.isLeasePaymentOnMSRP) || false;
};
