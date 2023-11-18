export const parseClockTime = (rowDate: Date) => {
	const parsedDateObj = {
		minutes: rowDate.getMinutes(),
		hours: rowDate.getHours(),
		day: rowDate.getDate(),
		month: rowDate.getMonth(),
		year: rowDate.getFullYear(),
	};

	return parsedDateObj;
};
