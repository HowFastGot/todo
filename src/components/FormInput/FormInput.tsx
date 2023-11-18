interface IInputProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FormInput({ value, onChange }: IInputProps) {
	return (
		<input
			value={value}
			onChange={onChange}
			className='border col-12 col-sm-10 rounded '
			style={{ minHeight: 40 }}
			type='text'
			placeholder='New task'
		/>
	);
}
