export function TextDecoration({ text }: { text: string }) {
	return (
		<>
			<small className='absolute text-stone-500 top-0 left-0 uppercase select-none'>
				{Array.from({ length: 100 }, () => text)}
			</small>
			<small className='absolute text-stone-500 bottom-0 left-0 uppercase select-none'>
				{Array.from({ length: 100 }, () => text)}
			</small>
		</>
	)
}
