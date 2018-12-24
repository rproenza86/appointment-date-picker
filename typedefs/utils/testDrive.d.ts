interface IServiceEndpointConfig {
    service?: string;
    endPoint?: string;
}
export declare const buildApiUrlWithServiceEndpoint: ({ service, endPoint }: IServiceEndpointConfig) => string;
export {};
