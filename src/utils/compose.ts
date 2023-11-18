import { IParsedDate } from 'src/types';

export const compose =
	(...args: any[]) =>
	(timeObj: IParsedDate) =>
		args.reduce((acc, fn) => fn(acc), timeObj);
