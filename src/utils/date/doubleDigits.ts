import { IParsedDate } from 'src/types';
import { compose, prependZero } from '..';

export const doubleDigits = (parsedDateObj: IParsedDate) => {
	return compose(prependZero('hours'), prependZero('minutes'), prependZero('day'))(parsedDateObj);
};
