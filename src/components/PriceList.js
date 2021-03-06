import React from 'react'
import { Button, Row, Col, Icon } from 'antd';
import PropTypes from 'prop-types'
import './index.css'

const categories = {
	'0' : {
		id: '1',
		name: '吃饭',
		type: 0,
		iconName: "taobao-circle"
	},
	'1' : {
		id: '2',
		name: '旅游',
		type: 0,
		iconName: 'coffee'
	},
	'2' : {
		id: 3,
		name: '发工资',
		type: 1,
		iconName: 'twitter'
	},
	'3' : {
		id: 4,
		name: '看电影',
		type: 1,
		iconName: 'twitter'
	}
}

const PriceList = ({items, onModifyItem, onDeleteItem}) => {
	items.map(item => {
		item.categorie = categories[item.cid]
		return item
	})
	return (
		<ul className="">
			{
				items.map((item, index) => (
					<li className="price_li" key={index}>
						<Row type="flex" align="middle" justify="center" className="price_list">
							<Col span={2} className="price_top price_start"><Icon type="coffee" /></Col>
							<Col span={5} className="price_bott">{item.title}</Col>
							<Col span={3} className="price_top">{item.price}元</Col>
							<Col span={4} className="price_bott">{item.date}</Col>
							<Col span={1} className="price_top">
								<Button type="primary" onClick={() => onModifyItem(index)}>
									<Icon type="edit" />
								</Button>
							</Col>
							<Col span={1} className="price_bott price_end">
								<Button type="danger" onClick={() => onDeleteItem(index)}>
									<Icon type="delete" theme="filled" />
								</Button>
							</Col>
						</Row>
					</li>
				))
			}
		</ul>
	)
}
PriceList.propTypes = {
	items: PropTypes.array.isRequired,
	onModifyItem: PropTypes.func.isRequired,
	onDeleteItem: PropTypes.func.isRequired
}

export default PriceList