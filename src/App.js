import React from 'react';
import Home from './container/index'
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props)
		console.log('this.props', this.props)
	}
  render() {
    return (
      <div>
				<Home/>
			</div>
    )
  }
}

export default App;
