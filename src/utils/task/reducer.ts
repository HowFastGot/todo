import { Actions, ActionType, IStateInitial } from 'src/types';
import { handleInputCheck, deleteChangedTask, findChangedTask, getChangedTaskIndex } from '../';

export const initalState: IStateInitial = {
	tasks: [],
	completedTask: [],
};

export function reducer(state: IStateInitial, action: Actions) {
	const { tasks, completedTask } = state;
	const { isChecked, id } = action.payload;

	switch (action.type) {
		case ActionType.CREATE:
			return {
				...state,
				tasks: [action.payload, ...tasks],
			};

		case ActionType.DELETE:
			if (isChecked) {
				const deletedTask = findChangedTask(completedTask, id);

				if (!deletedTask) return state;
				const immutableTasksArr = completedTask.slice();
				const indexOfDeletedTask = getChangedTaskIndex(completedTask, deletedTask);
				deleteChangedTask(immutableTasksArr, indexOfDeletedTask);

				return {
					...state,
					completedTask: [...immutableTasksArr],
				};
			} else {
				const deletedTask = findChangedTask(tasks, id);

				if (!deletedTask) return state;
				const immutableTasksArr = tasks.slice();
				const indexOfDeletedTask = getChangedTaskIndex(tasks, deletedTask);
				deleteChangedTask(immutableTasksArr, indexOfDeletedTask);

				return {
					...state,
					tasks: [...immutableTasksArr],
				};
			}

		case ActionType.UPDATE:
			if (isChecked) {
				const immutableTasksArr = tasks.slice();
				const changedTaskData = handleInputCheck(immutableTasksArr, id, isChecked);

				if (!changedTaskData) return state;

				const { indexOfUpdatedTask, updatedTask } = changedTaskData;
				deleteChangedTask(immutableTasksArr, indexOfUpdatedTask);

				return {
					completedTask: [updatedTask, ...completedTask],
					tasks: [...immutableTasksArr],
				};
			} else {
				const immutableTasksArr = completedTask.slice();
				const changedTaskData = handleInputCheck(immutableTasksArr, id, isChecked);

				if (!changedTaskData) return state;

				const { indexOfUpdatedTask, updatedTask } = changedTaskData;
				deleteChangedTask(immutableTasksArr, indexOfUpdatedTask);

				return {
					tasks: [...tasks, updatedTask],
					completedTask: [...immutableTasksArr],
				};
			}
		default:
			throw new Error('Reducer task error! Check your action types!');
	}
}
