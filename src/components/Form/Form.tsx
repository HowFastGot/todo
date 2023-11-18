import { IChildren } from 'src/types';

interface IFormProp extends IChildren {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function Form({ children, handleSubmit }: IFormProp) {
	return (
		<form action='#' onSubmit={handleSubmit}>
			<div className='w-100 mx-auto row gap-3 justify-content-center flex-sm-nowrap  align-content-center'>
				{children}
			</div>
		</form>
	);
}
