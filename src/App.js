import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import './App.css'
import Backdrop from './components/Backdrop/Backdrop'
import List from './components/List/List'
import Modal from './components/Modal/Modal'

class App extends Component {
	state = {
		modalIsOpen: false,
		showBlock: false,
	}

	showModal = () => {
		this.setState({ modalIsOpen: true })
	}

	closeModal = () => {
		this.setState({ modalIsOpen: false })
	}
	render() {
		return (
			<div className='App'>
				<h1>React Animations</h1>
				<button
					className='Button'
					onClick={() =>
						this.setState(prevState => ({ showBlock: !prevState.showBlock }))
					}>
					Toggle
				</button>
				<br />
				{/* in will determines if the element should be visible or not */}
				{/* timeout deteremines time needed to switch between ENTERING ENTERED EXITING EXITED*/}
				{/* mountOnEnter unmountOnExit add & remove element from dom */}
				<Transition
					in={this.state.showBlock}
					timeout={1000}
					mountOnEnter
					unmountOnExit>
					{state => (
						<div
							style={{
								backgroundColor: 'red',
								width: '100px',
								height: '100px',
								margin: '10px auto',
								transition: 'opacity 1s ease-out',
								opacity: state === 'exiting' ? 0 : 1,
							}}></div>
					)}
				</Transition>

				<Transition
					in={this.state.modalIsOpen}
					timeout={1000}
					mountOnEnter
					unmountOnExit>
					{state => <Modal closed={this.closeModal} show={state} />}
				</Transition>
				{this.state.modalIsOpen && <Backdrop show={this.state.modalIsOpen} />}

				<button className='Button' onClick={this.showModal}>
					Open Modal
				</button>
				<h3>Animating Lists</h3>
				<List />
			</div>
		)
	}
}

export default App
