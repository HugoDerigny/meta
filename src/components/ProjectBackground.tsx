export function ProjectBackground() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			version='1.1'
			viewBox='0 0 4000 2000'
			className='h-full w-auto absolute inset-0 z-0'
		>
			<defs>
				<linearGradient
					gradientTransform='rotate(-0, 0.5, 0.5)'
					x1='50%'
					y1='0%'
					x2='50%'
					y2='100%'
					id='gggrain-gradient2-projects'
				>
					<stop stopColor='hsl(167, 77%, 14%)' stopOpacity='1' offset='-0%'></stop>
					<stop stopColor='rgba(255,255,255,0)' stopOpacity='0' offset='100%'></stop>
				</linearGradient>
				<linearGradient
					gradientTransform='rotate(0, 0.5, 0.5)'
					x1='50%'
					y1='0%'
					x2='50%'
					y2='100%'
					id='gggrain-gradient3-projects'
				>
					<stop stopColor='hsl(227, 87%, 47%)' stopOpacity='1'></stop>
					<stop stopColor='rgba(255,255,255,0)' stopOpacity='0' offset='100%'></stop>
				</linearGradient>
				<filter
					id='gggrain-filter-projects'
					x='-20%'
					y='-20%'
					width='140%'
					height='140%'
					filterUnits='objectBoundingBox'
					primitiveUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feTurbulence
						type='fractalNoise'
						baseFrequency='0.69'
						numOctaves='2'
						seed='30'
						stitchTiles='stitch'
						x='0%'
						y='0%'
						width='100%'
						height='100%'
						result='turbulence'
					></feTurbulence>
					<feColorMatrix
						type='saturate'
						values='0'
						x='0%'
						y='0%'
						width='100%'
						height='100%'
						in='turbulence'
						result='colormatrix'
					></feColorMatrix>
					<feComponentTransfer
						x='0%'
						y='0%'
						width='100%'
						height='100%'
						in='colormatrix'
						result='componentTransfer'
					>
						<feFuncR type='linear' slope='3'></feFuncR>
						<feFuncG type='linear' slope='3'></feFuncG>
						<feFuncB type='linear' slope='3'></feFuncB>
					</feComponentTransfer>
					<feColorMatrix
						x='0%'
						y='0%'
						width='100%'
						height='100%'
						in='componentTransfer'
						result='colormatrix2'
						type='matrix'
						values='1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 22 -14'
					></feColorMatrix>
				</filter>
			</defs>
			<g>
				<rect width='100%' height='100%' fill='hsla(64, 49%, 53%, 1.00)'></rect>
				<rect width='100%' height='100%' fill='url(#gggrain-gradient3-projects)'></rect>
				<rect width='100%' height='100%' fill='url(#gggrain-gradient2-projects)'></rect>
				<rect
					width='100%'
					height='100%'
					fill='transparent'
					filter='url(#gggrain-filter-projects)'
					opacity='0.27'
					style={{ mixBlendMode: 'soft-light' }}
				></rect>
			</g>
		</svg>
	)
}
