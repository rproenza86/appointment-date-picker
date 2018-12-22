import * as numeral from 'numeral';

export function roundDollar(dollars: number) {
    return Math.ceil(dollars);
}

export function formatDollars(dollars: number | null) {
    if (dollars === null || isNaN(dollars)) {
        return '$--';
    }

    return numeral(roundDollar(dollars)).format('$0,000');
}

export function isValidNumber(num: number | null | undefined) {
    return !(num === null || num === undefined || isNaN(num));
}

export function isValidDollarAmount(dollars: any) {
    return isValidNumber(dollars);
}

export function invalidDollarDisplayValue() {
    return '$--';
}

export function formatNumber(num: any) {
    return numeral(num).format('0,000');
}

export function formatRetailPrice(price: number): string {
    if (price === 0) {
        return invalidDollarDisplayValue();
    } else {
        return formatCurrencyAmount(price);
    }
}

export function formatTermMonths(value: any, addSlash = false) {
    if (value) {
        return `${value}${addSlash ? '/' : ' '}mo`;
    }
    else {
        return null;
    }
}

export function formatApr(value: any) {
    return `${value}% APR`;
}

export function formatFees(value: any) {
    if (!isValidDollarAmount(value)) {
        return 'Not Included';
    }

    return formatDollars(value);
}

export function formatMiles(value: any) {
    const formattedNumber = formatNumber(value);
    return `${formattedNumber} mi`;
}

export function formatCurrencyAmount(amount: number | undefined = 0) {
    return isValidDollarAmount(amount) ? formatDollars(amount) : invalidDollarDisplayValue();
}

export function formatType(item: { type: any; value: any; }) {
    switch (item.type) {
        case 'money':
            return formatFees(item.value);
        case 'apr':
            return formatApr(item.value);
        case 'months':
            return formatTermMonths(item.value);
        case 'miles':
            return formatMiles(item.value);
        default:
            return item.value;
    }
}
