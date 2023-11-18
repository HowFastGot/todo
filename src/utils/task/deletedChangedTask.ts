import { ITaskEntity } from 'src/types';

export function deleteChangedTask(immutableTasksArr: ITaskEntity[], indexOfTask: number) {
	const deleteTaskquantity = 1;

	return immutableTasksArr.splice(indexOfTask, deleteTaskquantity);
}
