import { drsSpGlobalConfig as mockConfig } from './__mocks__/drsSpGlobalConfig';
var globalConfig = function () {
    var result = window.drs__SpGlobalConfig || mockConfig;
    return result;
};
export default globalConfig();
