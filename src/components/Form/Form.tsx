import { useCallback, useEffect, useDeferredValue } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { FormInput, FormButton } from '../';

import { useInput } from 'src/hooks';
import { getTaskCreatingTime } from 'src/utils';
import { ActionType, Actions } from 'src/types';

interface IFormProp {
	dispatch: React.Dispatch<Actions>;
}

export function Form({ dispatch }: IFormProp) {
	const { value: userText, onChange, inputReset } = useInput();
	const debounceUserText = useDeferredValue(userText);

	const {
		register,
		handleSubmit,
		clearErrors,
		setFocus,
		formState: { errors },
	} = useForm({
		shouldUseNativeValidation: true,
	});
	const errorMessage = errors?.userText?.message?.toString();

	const memoGetTaskCreatingTime = useCallback(getTaskCreatingTime, []);

	const handleFormSubmit = useCallback(() => {
		inputReset();

		const creatingDate = memoGetTaskCreatingTime();
		const taskEntity = {
			id: uuidv4(),
			isChecked: false,
			userText,
			creatingDate,
		};

		dispatch({
			type: ActionType.CREATE,
			payload: taskEntity,
		});
	}, [memoGetTaskCreatingTime, userText, inputReset, dispatch]);

	const adjustClearErrorTimeout = useCallback((fn: any): NodeJS.Timeout => {
		const timeDelay = 3500;

		const timeId = setTimeout(() => {
			fn();
		}, timeDelay);

		return timeId;
	}, []);

	useEffect(() => {
		setFocus('userText');
		const timeId = adjustClearErrorTimeout(clearErrors);

		return () => {
			clearTimeout(timeId);
		};
	}, [adjustClearErrorTimeout, errorMessage]);

	return (
		<form action='#' className='position-relative w-100%' onSubmit={handleSubmit(handleFormSubmit)}>
			<div className='w-100 mx-auto row gap-3 justify-content-center flex-sm-nowrap  align-content-center'>
				<FormInput value={debounceUserText} onChange={onChange} register={register} />

				<FormButton />
			</div>
		</form>
	);
}
