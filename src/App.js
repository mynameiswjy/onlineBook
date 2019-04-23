import React, { Component } from 'react';
import PriceList from './components/PriceList'
import Header from './components/header'
import './App.css';

const items = [
	{
		title: '去秦皇岛旅游',
		price: 200,
		date: '2019-01-26',
		details: {
			type: 1,
			id: 0
		}
	},{
		title: '请客吃饭',
		price: 500,
		date: '2019-12-26',
		details: {
			type: 1,
			id: 0
		}
	}
]


class App extends React.Component {
	constructor(props) {
		super(props)
		console.log('this.props', this.props)
	}
	onModifyItem = (e) => {
		console.log(e);
	}
	handleDate = (dateString) => {
		console.log(dateString)
	}
  render() {
    return (
      <div className="App">
				<Header
					data='null'
					handleChange={(dateString) => this.handleDate(dateString)}
				/>
				<PriceList
					items={items}
					onModifyItem={this.onModifyItem}
					onDeleteItem={(e) => console.log(e)}
				/>
      </div>
    );
  }
}

export default App;
