import { urlBuilder } from '@makemydeal/dr-common-utils';
import config from './../config';

interface IServiceEndpointConfig {
    service?: string;
    endPoint?: string;
}

export const buildApiUrlWithServiceEndpoint = ({
    service = 'bff',
    endPoint = 'init'
}: IServiceEndpointConfig): string => {
    const Services = config.services || {};
    return urlBuilder.buildFromConfig(Services[service], endPoint);
};
