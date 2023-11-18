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
	const checkboxColor = isChecked ? 'primary' : 'secondary';
	const inputStyles = `form-check-input cursor-pointer bg-body-${checkboxColor}`;

	const textColor = isChecked ? 'text-secondary' : 'text-black';

	return (
		<li className={cn('d-flex gap-2 justify-content-between align-items-center p-3', textColor)}>
			<input
				className={inputStyles}
				type='checkbox'
				checked={isChecked}
				onChange={() => handleTaskComplete(id, !isChecked)}
			/>
			<p className='lh-1'>{userText}</p>
			<CreateTime time={creatingDate} />
			<DeleteButton handleTaskDelete={handleTaskDelete} isChecked={isChecked} id={id} />
		</li>
	);
}
