export declare function roundDollar(dollars: number): number;
export declare function formatDollars(dollars: number | null): any;
export declare function isValidNumber(num: number | null | undefined): boolean;
export declare function isValidDollarAmount(dollars: any): boolean;
export declare function invalidDollarDisplayValue(): string;
export declare function formatNumber(num: any): any;
export declare function formatRetailPrice(price: number): string;
export declare function formatTermMonths(value: any, addSlash?: boolean): string | null;
export declare function formatApr(value: any): string;
export declare function formatFees(value: any): any;
export declare function formatMiles(value: any): string;
export declare function formatCurrencyAmount(amount?: number | undefined): any;
export declare function formatType(item: {
    type: any;
    value: any;
}): any;
