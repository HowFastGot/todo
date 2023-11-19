export function CreateTime({ time }: { time: string[] }) {
	const timeElements = time.map((t, i) => (
		<span key={i} className='text-nowrap'>
			{t}
		</span>
	));
	return <time className='fs-6'>{timeElements}</time>;
}
