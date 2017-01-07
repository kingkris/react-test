import React, {Component} from 'react'
import TextDisplay  from './TextDisplay'


class Textinput extends Component {

	constructor() {
		super()
		this.state = {
			inputText:'Whatever Text'
		}
	}

	handleChange(event) {
		console.log(event.target.value)
		// set the state to the new value being entered
		this.setState({
			inputText: event.target.value
		})
	}
	deleteLetter(){
		//get the current state
		//delete char
		//update state
		this.setState({
			inputText: this.state.inputText.substring(0, this.state.inputText.length - 1)
		})
	}

	render() {
		return (
				<div>
					<h3>Text Input</h3>
					<input 
						type="text" 
						placeholder="Enter your name" 
						value={this.state.inputText}
						onChange={this.handleChange.bind(this)}
					/>
					<TextDisplay text={this.state.inputText} delt={this.deleteLetter.bind(this)} />
				</div>
		)
	}
}

export default Textinput