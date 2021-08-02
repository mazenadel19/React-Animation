import React, { Component } from 'react'
import './App.css'
import Backdrop from './components/Backdrop/Backdrop'
import List from './components/List/List'
import Modal from './components/Modal/Modal'

class App extends Component {
	state = {
		modalIsOpen: false,
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
				<Modal closed={this.closeModal} show={this.state.modalIsOpen} />
				<Backdrop show={this.state.modalIsOpen} />
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
