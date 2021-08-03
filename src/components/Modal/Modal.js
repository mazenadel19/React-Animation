import React from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import './Modal.css'

const animationTiming = {
	enter: 400,
	exit: 1000,
}

const modal = props => {
	return (
		<CSSTransition
			in={props.show}
			timeout={animationTiming}
			mountOnEnter
			unmountOnExit
			classNames='fade-slide'>
			{/* CSSTransition will cycle through classes begining with the class name u wrote in classNames and add them to whaterver wrapped with the csstransition depending on the state of the transition
				-enter => at the point animation start
				-enter-active => will be kept while animation is in the entering mode
				-exit => when we start exiting
				-exit-active => will keep tull animaiton ends
			  */}
			<div className='Modal'>
				<h1>A Modal</h1>
				<button className='Button' onClick={props.closed}>
					Dismiss
				</button>
			</div>
		</CSSTransition>
	)
}

export default modal
