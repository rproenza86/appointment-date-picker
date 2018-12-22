import { gte } from 'lodash';

export const aprToString = (apr: number): string  => `${gte(apr, 0) ? apr : '--'}% APR`;

export const milesToString = (miles: number): string => `${miles.toLocaleString()} Miles`;

export const generalUseID = () => {
    return '' + Math.floor(Math.random() * Number.MAX_VALUE);
};
