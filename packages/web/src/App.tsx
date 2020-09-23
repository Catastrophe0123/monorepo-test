import React from 'react';
import logo from './logo.svg';
import './App.css';
import { add } from '@cato/common';

class App extends React.Component {
	state = { number: 0 };

	componentDidMount = () => {
		let x = add(5, 1000);
		this.setState({ number: x });
	};

	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<p>{this.state.number}</p>
					<a
						className='App-link'
						href='https://reactjs.org'
						target='_blank'
						rel='noopener noreferrer'>
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default App;
