import { IParsedDate } from 'src/types';

export const prependZero = (key: string) => (parsedDateObj: IParsedDate) => ({
	...parsedDateObj,
	[key]: parsedDateObj[key] < 10 ? '0' + parsedDateObj[key] : parsedDateObj[key],
});
