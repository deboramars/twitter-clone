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

				<header className="App-Header">
					<Inicio />
				</header>

				<header className="App-Profile">
					<Profile />
				</header>

				<header className="App-Newcard">
					<NewCard />
				</header>

				<header className="App-Follow">
					<Follow />
				</header>

				<header className="App-Card">
					<Card />
				</header>

				<header className="App-Trends">
					<Trends />
				</header>
				
			</div>
		);
	}
}

export default App;
