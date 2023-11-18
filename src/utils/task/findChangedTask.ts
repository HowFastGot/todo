import { ITaskEntity } from 'src/types';

export const findChangedTask = (tasksArr: ITaskEntity[], id: string) => {
	return tasksArr.find((task) => task.id === id);
};
