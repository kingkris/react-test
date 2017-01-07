import React, {Component} from 'react'


class TextDisplay extends Component {

	handleClick() {
		this.props.delt()
	}

	render() {
		return (
				<div>
					<h3>{this.props.text}</h3>
					<button onClick={this.handleClick.bind(this)}>
						Delete last character
					</button>
				</div>
		)
	}
}

export default TextDisplay