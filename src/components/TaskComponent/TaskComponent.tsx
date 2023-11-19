import cn from 'classnames';

import { CreateTime, DeleteButton } from '../';
import { ITaskEntity, TaskStatusFunc } from 'src/types';

interface ITaskProp extends ITaskEntity {
	handleTaskComplete: TaskStatusFunc;
	handleTaskDelete: TaskStatusFunc;
}

export function TaskComponent({
	id,
	userText,
	isChecked,
	creatingDate,
	handleTaskComplete,
	handleTaskDelete,
}: ITaskProp) {
	const checkboxColor = isChecked ? 'primary' : 'dark-subtle';
	const inputStyles = `form-check-input cursor-pointer bg-${checkboxColor}`;

	return (
		<li
			className={cn('task_component', {
				'text-secondary': isChecked,
			})}>
			<input
				className={inputStyles}
				type='checkbox'
				checked={isChecked}
				onChange={() => handleTaskComplete(id, !isChecked)}
			/>
			<p
				className={cn('lh-1 fs-6 ', {
					'fw-light': isChecked,
				})}>
				{userText}
			</p>
			<CreateTime time={creatingDate} />
			<DeleteButton handleTaskDelete={handleTaskDelete} isChecked={isChecked} id={id} />
		</li>
	);
}
