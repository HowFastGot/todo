import { ITaskEntity } from 'src/types';

export const getChangedTaskIndex = (tasksArr: ITaskEntity[], task: ITaskEntity) => {
	return tasksArr.indexOf(task);
};
