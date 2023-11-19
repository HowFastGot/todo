import { useEffect, useCallback, useMemo, useReducer } from 'react';

import { Form, Header, TaskList } from '..';

import { initalState, reducer } from 'src/utils';
import { getStateFromLocalStorage, saveStateToLocalStorage } from 'src/utils/localStorage';

import { ActionType, IStateInitial } from 'src/types';

function App() {
	const initState = (state: IStateInitial): IStateInitial => {
		const memorizedTasks = getStateFromLocalStorage(state);

		if (memorizedTasks) {
			return memorizedTasks;
		} else {
			return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, initalState, initState);

	const memoState = useMemo(() => state, [state]);

	const completedTasks = useMemo(() => {
		return state.completedTask.filter((t) => t.isChecked);
	}, [state.completedTask]);

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
	const isDoneTasks = state.completedTask.length > 0;

	useEffect(() => {
		saveStateToLocalStorage(memoState);
	}, [memoState]);

	return (
		<>
			<Header />
			<main className='px-1 px-sm-5 py-2'>
				<section className='section-container'>
					<Form dispatch={dispatch} />
				</section>
				<section className='section-container'>
					<TaskList taskList={state.tasks} {...taskListFunctionProps} />
				</section>
				<section className='section-container'>
					{isDoneTasks && <h3 className='h3'>Done</h3>}
					<TaskList taskList={completedTasks} {...taskListFunctionProps} />
				</section>
			</main>
		</>
	);
}

export default App;
