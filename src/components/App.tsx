import * as React from 'react';
import './../css/App.css';

// import logo from './../assets/images/logo.svg';
import { TestDrive } from './../containers/TestDrive';
// import ScheduleTestDriveUI from './TestDrive/ScheduleTestDriveUI';

class App extends React.Component {
    public render() {
        // const startDate = new Date();
        // const selectedDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000);

        const TD = TestDrive.Container;

        return (
            <div className="App">
                <header className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <h1 className="App-title">Welcome to ReactJS</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>

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

                {/* <ScheduleTestDriveUI
                    address={{ address: 'Aqui en mi casa', timeZoneId: 'sss', zip: '2022' }}
                    dealerName="Proenza's Dealer"
                    educationTitle="Esto si que esta bueno"
                    educationDescription="Mejor me crees"
                    errorMsg="Se jodio esto"
                    day={selectedDate}
                    time={'Morning' as any}
                    submitTestDrive={() => {
                        // tslint:disable:jsx-no-lambda no-console
                        console.log('date selected ');
                    }}
                    onDayChanged={date => {
                        console.log('onDayChanged ', date);
                    }}
                    onTimeChanged={date => {
                        console.log('onTimeChanged ', date);
                    }}
                /> */}
            </div>
        );
    }
}

export default App;
