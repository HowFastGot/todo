import { ReactNode } from 'react';

export interface IChildren {
	children: ReactNode;
}

export type GetTimeFunc = () => string[];
export type TaskStatusFunc = (id: string, isChecked: boolean) => void;
