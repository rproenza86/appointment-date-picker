import * as React from 'react';
import './../css/App.css';

import { TestDrive } from './../containers/TestDrive';

class App extends React.Component {
    public render() {
        const TD = TestDrive.Container;
        return (
            <div className="App">
                <TD
                    // tslint:disable:jsx-no-lambda no-console
                    submitTestDrive={() => {
                        console.log('date selected ');
                    }}
                    onDayChanged={date => {
                        console.log('onDayChanged ', date);
                    }}
                    onTimeChanged={date => {
                        console.log('onTimeChanged ', date);
                    }}
                />
            </div>
        );
    }
}

export default App;
