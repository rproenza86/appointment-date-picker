import { formatCurrencyAmount, formatRetailPrice } from '../formatUtils';

describe('formatRetailPrice', () => {

    it('should return "$--" when 0 is provided as input', () => {
        const expected = '$--';
        const actual = formatRetailPrice(0);
        expect(expected).toEqual(actual);
    });

    it('should return "$100" when 100 is provided as input', () => {
        const expected = '$100';
        const actual = formatRetailPrice(100);
        expect(expected).toEqual(actual);
    });

});

describe('formatCurrencyAmount', () => {
    
    it('should return "$--" when provided an invalid input', () => {
        const expected = '$--';
        const actual = formatCurrencyAmount(undefined);
        expect(expected).toEqual(actual);
    });

    it('should return "$124" when 123.55 is provided as input', () => {
        const expected = '$124';
        const actual = formatCurrencyAmount(123.55);
        expect(expected).toEqual(actual);
    });

});