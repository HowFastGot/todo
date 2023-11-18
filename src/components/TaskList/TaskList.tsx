import { IChildren, ITaskEntity, TaskStatusFunc } from 'src/types';
import { TaskComponent } from '../TaskComponent/TaskComponent';

interface ITaskListProp extends Partial<IChildren> {
	taskList: ITaskEntity[];
	handleTaskComplete: TaskStatusFunc;
	handleTaskDelete: TaskStatusFunc;
}

export function TaskList({ taskList, children, ...props }: ITaskListProp) {
	if (taskList.length < 1) return null;

	return (
		<ul className='task_container border border-gray'>
			{children}
			{taskList.map((task) => {
				return <TaskComponent {...task} {...props} key={task.id} />;
			})}
		</ul>
	);
}
