import configureStoreDev from './configureStore.dev';
import configureStoreProd from './configureStore.prod';

let exportValue: any;

if (process.env.NODE_ENV === 'production') {
    exportValue = configureStoreProd;
}
else {
    exportValue = configureStoreDev;
}

export default exportValue;
