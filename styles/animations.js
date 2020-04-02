import { keyframes } from 'styled-components'

// add rotate for firefox : https://stackoverrun.com/fr/q/11681778
const floating = keyframes`
    from { transform: translate(0,  0) rotate(0.001deg); }
    65%  { transform: translate(0, 0.882rem) rotate(0.001deg); }
    to   { transform: translate(0, 0) rotate(0.001deg); }    
`
const floatingDurations = [7, 12, 11, 6, 7, 5, 10, 8]

const wobble = keyframes`
    16.65% {
		transform: translateY(2.5px);
	}

	33.3% {
		transform: translateY(-2px);
	}

	49.95% {
		transform: translateY(1.5px);
	}

	66.6% {
		transform: translateY(-1px);
	}

	83.25% {
		transform: translateY(0.5px);
	}

	100% {
		transform: translateY(0);
	}
`

export default { floating, floatingDurations, wobble }
