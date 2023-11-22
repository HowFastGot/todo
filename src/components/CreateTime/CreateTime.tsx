import { useMemo } from 'react';

export function CreateTime({ time }: { time: string }) {
	const sophisticatedTime = useMemo(() => time.split(' ').map((s, i) => <span key={i}>{s}</span>), [time]);

	return <time className='fs-6'>{sophisticatedTime}</time>;
}
