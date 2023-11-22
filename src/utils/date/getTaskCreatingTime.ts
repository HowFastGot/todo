import { GetTimeFunc, IParsedDate } from 'src/types';
import { parseClockTime, getCurrentTime, compose, doubleDigits, clockFormat } from '../';

export const getTaskCreatingTime: GetTimeFunc = () => {
	const parsedClockTime: IParsedDate = parseClockTime(getCurrentTime());
	const creatingTime: string = compose(doubleDigits, clockFormat('dd-mnth-year hh:mm'))(parsedClockTime);

	return creatingTime;
};
