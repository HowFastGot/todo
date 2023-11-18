import { useState, useCallback } from 'react';

export function useInput() {
	const [value, setValue] = useState<string>('');

	const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		setValue(value);
	}, []);

	const inputReset = useCallback(() => {
		setValue('');
	}, []);

	return {
		value,
		onChange,
		inputReset,
	};
}
