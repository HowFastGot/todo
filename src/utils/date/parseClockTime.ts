const getCorrectMonth = (rawDateMonth: number) => {
	const monthCountDifference = 1;

	return rawDateMonth + monthCountDifference;
};

export const parseClockTime = (rowDate: Date) => {
	const parsedDateObj = {
		minutes: rowDate.getMinutes(),
		hours: rowDate.getHours(),
		day: rowDate.getDate(),
		month: getCorrectMonth(rowDate.getMonth()),
		year: rowDate.getFullYear(),
	};

	return parsedDateObj;
};
