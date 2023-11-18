import { IParsedDate } from 'src/types';

export const clockFormat = (timeFormat: string) => (clockTime: IParsedDate) => {
	return timeFormat
		.replace('hh', String(clockTime.hours))
		.replace('mm', String(clockTime.minutes))
		.replace('dd', String(clockTime.day))
		.replace('mnth', String(clockTime.month))
		.replace('year', String(clockTime.year));
};
