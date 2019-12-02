import React from 'react'
import PriceList from '../components/PriceList'
import Header from '../components/header'
import Tab from '../components/viewTab'
import TotalPrice from '../components/TotalPrice'

const items = [
	{
		title: '去秦皇岛旅游',
		price: 200,
		date: '2019-01-26',
		cid: 1
	}, {
		title: '请客吃饭',
		price: 500,
		date: '2019-12-26',
		cid: 0
	}, {
		title: '发工资',
		price: 3000,
		date: '2019-12-26',
		cid: 2
	}
]

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tabIdx: '1',
			list: {
			}
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
	createItem = () => {// 添加新的list
		const newItem = {
			title: '看电影',
			price: 100,
			date: '2019-05-26',
			cid: 3
		}
		items.push(newItem)
		this.setState({
			items
		})
	}
	onModifyItem = (e) => { // 编辑
		items[e].title = '我是被修改过的list'
		this.setState({
			items
		})
	}
	onDeleteItem = (e) => { // 删除
		items.splice(e, 1)
		this.setState({
			items
		})
	}

	render() {
		let button = null
		if (this.state.tabIdx === '1') {
			button = <PriceList
				items={items}
				onModifyItem={this.onModifyItem}
				onDeleteItem={this.onDeleteItem}
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
				<TotalPrice
					income={1000}
					outcome={2000}
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