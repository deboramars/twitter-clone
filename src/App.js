import React, { Component } from 'react';
import './App.css'
import Inicio from './Inicio.js'
import Profile from './Profile.js'
import NewCard from './Newcard.js'
import Follow from './Follow.js'
import Card from './Card.js'
import Trends from './Trends.js'

class App extends Component {
	render () {
		return (
			<div className="App">

				<div className="App-Header">
					<Inicio />
				</div>

				<div className="App-Profile">
					<Profile />
				</div>

				<div className="App-Newcard">
					<NewCard />
				</div>

				<div className="App-Follow">
					<Follow />
				</div>

				<div className="App-Card">
					<Card />
				</div>

				<div className="App-Trends">
					<Trends />
				</div>
				
			</div>
		);
	}
}

export default App;
