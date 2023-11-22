export enum ActionType {
	DELETE = 'delete',
	CREATE = 'create',
	UPDATE = 'update',
}

// ======================================
export interface IStateInitial {
	tasks: ITaskEntity[];
	completedTask: ITaskEntity[];
}

export interface ITaskEntity {
	id: string;
	userText: string;
	isChecked: boolean;
	creatingDate: string;
}

interface ITaskCreation {
	type: ActionType.CREATE;
	payload: ITaskEntity;
}

interface ITaskUpdate {
	type: ActionType.UPDATE;
	payload: {
		id: string;
		isChecked: boolean;
	};
}

interface ITaskDeleting {
	type: ActionType.DELETE;
	payload: ITaskUpdate['payload'];
}
export type Actions = ITaskCreation | ITaskDeleting | ITaskUpdate;
