import { drsSpGlobalConfig as mockConfig } from './__mocks__/drsSpGlobalConfig';

const globalConfig = () => {
    const result = (window as any).drs__SpGlobalConfig || mockConfig;
    return result;
};

export default globalConfig();
