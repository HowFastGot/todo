import { IStateInitial } from 'src/types';

export enum LocalKey {
	TASKS = 'tasks',
}
export function saveStateToLocalStorage(memoState: IStateInitial): void {
	localStorage.setItem(LocalKey.TASKS, JSON.stringify(memoState));
}

export function getStateFromLocalStorage(memoState: IStateInitial): IStateInitial {
	const stringyState = localStorage.getItem(LocalKey.TASKS);

	if (stringyState) {
		const stateObj: IStateInitial = JSON.parse(stringyState);

		return stateObj;
	} else {
		return memoState;
	}
}
