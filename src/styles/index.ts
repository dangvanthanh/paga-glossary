import { css } from '@/styled-system/css'

export const tagClasses = css({
	px: 3,
	py: 0.5,
	bg: 'white',
	minW: 100,
	w: 'auto',
	display: 'inline-flex',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	borderRadius: 'sm',
	borderWidth: '1px',
	borderColor: 'gray.300',
	boxShadow:
		'0 .1rem 0 -.1rem var(--colors-gray-300), 0 .15rem 0 var(--colors-gray-200)',
	color: 'gray.800',
})
