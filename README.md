# appointment-date-picker

## Description

NPM Module to schedule appointments using a complex ReactJS date picker design.

## Module concepts

### Concepts

```javascript

```

## Installation
```sh
npm install @rproenza/appointment-date-picker --save

yarn add @rproenza/appointment-date-picker
```

## Usage

### Javascript

```javascript
var AppointmentDatePickerModule = require('@rproenza/appointment-date-picker');

var AppointmentDatePicker = AppointmentDatePickerModule.default;
```

```jsx
    <AppointmentDatePicker
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
```

### TypeScript
```typescript
import AppointmentDatePicker from '@rproenza/appointment-date-picker';
```
```jsx
    <AppointmentDatePicker
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
```

## Test
```sh
npm run test
```