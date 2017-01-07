import React, {Component} from 'react'
import Textinput from './Textinput'



class App extends Component {

	render(){
		return (
			<div>
				<h2>Whatever coming from app Component</h2>
				<p>here is the second line</p>
				<Textinput />
			</div>
		)
	}
}

export default App