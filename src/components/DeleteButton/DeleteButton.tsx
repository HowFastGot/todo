import { TaskStatusFunc } from 'src/types';

interface IButtProps {
	handleTaskDelete: TaskStatusFunc;
	id: string;
	isChecked: boolean;
}

export function DeleteButton({ handleTaskDelete, id, isChecked }: IButtProps) {
	return (
		<button className='bg-warning p-2 px-3 rounded' onClick={() => handleTaskDelete(id, isChecked)}>
			<svg
				id='i-trash'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 32 32'
				width='15'
				height='15'
				fill='none'
				stroke='currentcolor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'>
				<path d='M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6' />
			</svg>
		</button>
	);
}
