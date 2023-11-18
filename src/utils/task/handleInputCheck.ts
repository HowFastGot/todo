import { ITaskEntity } from 'src/types';
import { getChangedTaskIndex, findChangedTask } from '../';

export const handleInputCheck = (immutableTasksArr: ITaskEntity[], id: string, isChecked: boolean) => {
	const updatedTask = findChangedTask(immutableTasksArr, id);

	if (!updatedTask) return;

	const indexOfUpdatedTask = getChangedTaskIndex(immutableTasksArr, updatedTask);
	updatedTask.isChecked = isChecked;

	return {
		updatedTask,
		indexOfUpdatedTask,
	};
};
