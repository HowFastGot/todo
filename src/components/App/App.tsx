import { useCallback, useMemo, useReducer, useDeferredValue } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Form, FormButton, FormInput, Header, TaskList } from '..';
import { clockFormat, compose, doubleDigits, getCurrentTime, initalState, parseClockTime, reducer } from 'src/utils';

import { IParsedDate, GetTimeFunc, ActionType } from 'src/types';
import { useInput } from 'src/hooks';

function App() {
	const { value: userText, onChange, inputReset } = useInput();
	const debounceUserText = useDeferredValue(userText);

	const [state, dispatch] = useReducer(reducer, initalState);

	const completedTasks = useMemo(() => {
		return state.completedTask.filter((t) => t.isChecked);
	}, [state.completedTask]);

	const getTaskCreatingTime: GetTimeFunc = useCallback(() => {
		const parsedClockTime: IParsedDate = parseClockTime(getCurrentTime());
		const creatingTime = compose(doubleDigits, clockFormat('dd-mnth-year hh:mm'))(parsedClockTime);

		return creatingTime;
	}, []);

	const handleFormSubmit = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			inputReset();

			const creatingDate = getTaskCreatingTime();
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
		},
		[getTaskCreatingTime, userText, inputReset]
	);

	const handleTaskComplete = useCallback((id: string, isChecked: boolean) => {
		dispatch({
			type: ActionType.UPDATE,
			payload: {
				isChecked,
				id,
			},
		});
	}, []);

	const handleTaskDelete = useCallback((id: string, isChecked: boolean) => {
		dispatch({
			type: ActionType.DELETE,
			payload: {
				isChecked,
				id,
			},
		});
	}, []);

	const taskListFunctionProps = {
		handleTaskComplete,
		handleTaskDelete,
	};

	return (
		<>
			<Header />
			<main className='px-2 px-sm-5'>
				<section className='section-container'>
					<Form handleSubmit={handleFormSubmit}>
						<FormInput value={debounceUserText} onChange={onChange} />
						<FormButton />
					</Form>
				</section>
				<section className='section-container'>
					<TaskList taskList={state.tasks} {...taskListFunctionProps} />
				</section>
				<section className='section-container'>
					<TaskList taskList={completedTasks} {...taskListFunctionProps}>
						<h3 className='h3'>Done</h3>
					</TaskList>
				</section>
			</main>
		</>
	);
}

export default App;
