export interface IAddress {
    address: string;
    zip: string;
    timeZoneId: string;
}

export interface ITestDrive {
    day?: Date;
    email?: string;
    firstName?: string;
    hasError?: boolean;
    isCalculating?: boolean;
    lastName?: string;
    message?: string;
    phone?: string;
    time?: string;
    showNewTestDriveUI?: boolean;
}

// TODO: Check to see if IDealer and IDealerState have same structure
export interface IDealer {
    address?: IAddress;
    applyTaxesAndFees?: boolean;
    brandingExperienceLogo?: string;
    consentText?: string;
    contactOptions?: {
        isChatEnabled?: boolean;
        isMessageEnabled?: boolean;
        isPhoneEnabled?: boolean;
        isSmsEnabled?: boolean;
        smsPhone?: string;
    };
    creditAppButtonText?: string;
    creditAppUrl?: string;
    creditTiers?: {
        finance: any[]; // TODO: Define type
        lease: any[]; // TODO: Define type
    };
    dealerId?: number;
    dealRefId?: string;
    email?: string;
    hasCreditDecision?: boolean;
    excludeStdCashIncsLoan?: boolean;
    excludeStdCashIncsLease?: boolean;
    excludeSpecialAprsLoan?: boolean;
    excludeSpecialAprsLease?: boolean;
    id?: number;
    incentivesEnabled?: boolean;
    isAdvanceCrmEnabled?: boolean;
    isContinueToCheckoutEnabled?: boolean;
    isDealertrackCreditProvider?: boolean;
    isMenuPricingDisabled?: boolean;
    isNewVehicleSinglePrice?: boolean;
    isReservationEnabled?: boolean;
    isUsedVehicleSinglePrice?: boolean;
    isVppEnabled?: boolean;
    labelSetName?: string;
    leaseSettings?: {
        hasLeasing: boolean;
        annualMilesOptions: number[];
        isLeasePaymentOnMSRP: boolean;
    };
    logo?: string;
    messagingEnabled?: boolean;
    name?: string;
    ownerId?: number;
    phone?: string;
    reservation?: {
        accountToken: string;
        acceptorId: string;
        terminalId: string;
        accountId: string;
        amount: number;
        showReservationDetail: boolean;
        holdPeriod: number;
        depositType: string;
    };
    shouldIncludeLease?: boolean;
    theme?: string;
    tradeInValuationICOProviderUrl?: string;
    tradeInValuationProvider?: string;
    useDRCRM?: boolean;
    useFnI2?: boolean;
    users?: any[]; // TODO: Define type
}

export interface IDealerAlert {
    type?: string;
    dealType?: string;
    emailDelivery?: boolean;
    smsDelivery?: boolean;
}

export interface IDealerLeaseSettings {
    hasLeasing: boolean;
    annualMilesOptions?: number[];
    isLeasePaymentOnMSRP?: boolean;
}

export interface IDealerUser {
    _id?: string;
    phone?: string;
    avatar?: string;
    user?: number;
    email?: string;
    firstName?: string;
    lastName?: string;
    displayName?: string;
    legacyId?: number;
    dealerUserLegacyId?: number;
    smsOptIn?: boolean;
    alerts?: IDealerAlert[];
    isPrimaryContactUsed?: boolean;
    isPrimaryContactNew?: boolean;
    type?: string;
}


export interface IDealerState {
    address?: IAddress;
    applyTaxesAndFees?: boolean;
    brandingExperienceLogo?: string;
    consentText?: string;
    contactOptions?: {
        isChatEnabled?: boolean;
        isMessageEnabled?: boolean;
        isPhoneEnabled?: boolean;
        isSmsEnabled?: boolean;
        smsPhone?: string;
    };
    creditAppButtonText?: string;
    creditAppUrl?: string;
    dealerId?: number;
    dealRefId?: string;
    dnaAccountId?: string;
    dnaId?: string;
    email?: string;
    hasCreditDecision?: boolean;
    excludeStdCashIncsLoan?: boolean;
    excludeStdCashIncsLease?: boolean;
    excludeSpecialAprsLoan?: boolean;
    excludeSpecialAprsLease?: boolean;
    incentivesEnabled?: boolean;
    isAdvanceCrmEnabled?: boolean;
    isContinueToCheckoutEnabled?: boolean;
    isDealertrackCreditProvider?: boolean;
    isMenuPricingDisabled?: boolean;
    isNewVehicleSinglePrice?: boolean;
    isUsedVehicleSinglePrice?: boolean;
    isReservationEnabled?: boolean;
    isTermsOnSDPEnabled?: boolean;
    isVppEnabled?: boolean;
    labelSetName?: string;
    leaseSettings?: IDealerLeaseSettings;
    logo?: string;
    messagingEnabled?: boolean;
    name?: string;
    ownerId?: number;
    phone?: string;
    useDRCRM?: boolean;
    useFnI2?: boolean;
    users?: IDealerUser[];
    theme?: string;
    enablePrePurchaseAgreement?: boolean;
    tradeInValuationICOProviderUrl?: string;
    tradeInValuationProvider?: string;
    vdpTrackingPhoneNumber?: string;
    website?: string;
    isTCPACheckboxDisabled?: boolean;
    TCPAProvider?: string;
    isTCPAEnabled?: boolean;
    TCPAConsentText?: string;
}

export interface IStateTree {
    testDrive?: ITestDrive;
    dealer?: IDealerState;
}