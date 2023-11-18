import { FieldValues, UseFormRegister } from 'react-hook-form/dist/types';

interface IInputProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	register: UseFormRegister<FieldValues>;
}

export function FormInput({ value, onChange: onInputChange, register }: IInputProps) {
	const { onChange, ...props } = register('userText', {
		minLength: {
			value: 3,
			message: 'Invalid input! Enter at leat 3 character.',
		},
		required: {
			value: true,
			message: 'This field is required to fill!',
		},
		pattern: {
			value: /^[^\d]+$|.*[a-zа-яїіъ].*/i,
			message: 'Shold containt a mix of alpha and numeric (e.g: pick up at 12:34, pay 54, etc..)',
		},
	});

	return (
		<input
			value={value}
			onChange={(e) => {
				onInputChange(e);
				onChange(e);
			}}
			className='user-input border col-12 col-sm-10 rounded '
			style={{ minHeight: 40 }}
			type='text'
			placeholder='New task'
			{...props}
		/>
	);
}
