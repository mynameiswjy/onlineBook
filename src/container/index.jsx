import React from 'react'
import PriceList from '../components/PriceList'
import Header from '../components/header'
import Tab from '../components/viewTab'

const items = [
	{
		title: '去秦皇岛旅游',
		price: 200,
		date: '2019-01-26',
		cid: 0
	}, {
		title: '请客吃饭',
		price: 500,
		date: '2019-12-26',
		cid: 0
	}, {
		title: '发工资',
		price: 3000,
		date: '2019-12-26',
		cid: 1
	}
]
class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tabIdx: '1'
		}
	}

	onModifyItem = (e) => {
		console.log(e);
	}
	handleDate = (dateString) => {
		console.log(dateString)
	}
	onTabClick = (e) => {
		this.setState({
			tabIdx: e
		})
	}
	createItem = () => {

	}

	render() {
		let button = null
		if (this.state.tabIdx === '1') {
			button = <PriceList
				items={items}
				onModifyItem={this.onModifyItem}
				onDeleteItem={(e) => console.log(e)}
			/>
		} else {
			button = <div>图表的啦</div>
		}
		return (
			<div className="App">
				<Header
					data='null'
					handleChange={(dateString) => this.handleDate(dateString)}
				/>
				<Tab
					onTabClick={this.onTabClick}
				/>
				<div onClick={this.createItem} className="create_new">创建新的记账记录</div>
				{button}
			</div>
		)
	}
}

export default Home