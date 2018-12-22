"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drsSpGlobalConfig = {
    analytics: {
        dataIslandKey: 'spDataLayer',
        propertyToTrack: 'actions.uuid'
    },
    services: {
        bff: {
            protocol: 'https://',
            host: 'sp-prod-not-real.com',
            port: null,
            base: '/bff'
        },
        dealerTrack: {
            accountId: '5156056',
            suiteUrl: 'https://sp-prod-not-real.com/Suite/suite.js',
            defaultCreditAppTab: '#CreditAppPlace:CreditApplication'
        },
        gateway: {
            protocol: 'https',
            host: 'sp-prod-not-real.mmd.com',
            base: ''
        }
    },
    static: {
        protocol: 'https://',
        host: 's3.amazonaws.com',
        base: ''
    },
    staticImages: {
        protocol: 'https://',
        host: 's3.amazonaws.com',
        base: 'sp-prod-not-real/images'
    },
    urls: {
        protocol: 'http://',
        host: 'w2.makemydealpreview.com',
        base: 'shells',
        file: 'main.html',
        port: 5601,
        desktopUrl: 'w2.makemydealpreview.com:5601',
        reservationIframeUrl: 'https://mock.url',
        dealStarterUrl: 'https://shop.makemydeal.dev',
        dealerLogoUrl: 'https://dev-static.makemydealpreview.com/images_old/',
        brandingLogoBaseUrl: 'https://dev-static.makemydealpreview.com/assets/www/img/'
    },
    urlsByEnv: {
        local: {
            protocol: 'http://',
            host: 'w2.makemydealpreview.com',
            base: 'shells',
            file: 'main.html',
            port: 5601,
            desktopUrl: 'w2.makemydealpreview.com:5601',
            reservationIframeUrl: 'https://mock.url',
            dealStarterUrl: 'https://shop.makemydeal.dev',
            dealerLogoUrl: 'https://dev-static.makemydealpreview.com/images_old/',
            brandingLogoBaseUrl: 'https://dev-static.makemydealpreview.com/assets/www/img/'
        },
        dev: {
            protocol: 'https://',
            host: 'sp-dev-live.makemydeal.com',
            base: 'shells',
            file: 'main.html',
            port: undefined,
            desktopUrl: 'https://mock.url',
            reservationIframeUrl: 'https://mock.url',
            dealStarterUrl: 'https://dev.shop.dealer.com',
            dealerLogoUrl: 'https://dev-static.makemydealpreview.com/images_old/',
            brandingLogoBaseUrl: 'https://dev-static.makemydealpreview.com/assets/www/img/'
        },
        test: {
            protocol: 'https://',
            host: 'sp-dev-live.makemydeal.com',
            base: 'shells',
            file: 'main.html',
            port: undefined,
            desktopUrl: 'https://mock.url',
            reservationIframeUrl: 'https://mock.url',
            dealStarterUrl: 'https://dev.shop.dealer.com',
            dealerLogoUrl: 'https://dev-static.makemydealpreview.com/images_old/',
            brandingLogoBaseUrl: 'https://dev-static.makemydealpreview.com/assets/www/img/'
        },
        qa: {
            protocol: 'https://',
            host: 'sp-qa-live.makemydeal.com',
            base: 'shells',
            file: 'main.html',
            port: undefined,
            desktopUrl: 'https://mock.url',
            reservationIframeUrl: 'https://mock.url',
            dealStarterUrl: 'https://qa.shop.dealer.com',
            dealerLogoUrl: 'https://qa-static.makemydealpreview.com/images_old/',
            brandingLogoBaseUrl: 'https://prod-static.makemydeal.com/assets/www/img/'
        },
        production: {
            protocol: 'https://',
            host: 'sp-prod-live.makemydeal.com',
            base: 'shells',
            file: 'main.html',
            port: undefined,
            desktopUrl: 'https://sp-prod-live.makemydeal.com',
            reservationIframeUrl: 'https://mock.url',
            dealStarterUrl: 'https://shop.dealer.com',
            dealerLogoUrl: 'https://prod-static.makemydeal.com/images_old/',
            brandingLogoBaseUrl: 'https://prod-static.makemydeal.com/assets/www/img/'
        }
    }
};
