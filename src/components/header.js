import React from "react"
import {DatePicker, Row, Col} from 'antd';
import './index.css'

const { MonthPicker } = DatePicker

const Header = ({data, handleChange}) => {
	/*function handleChange(date, dateString) {
		console.log(dateString)
	}*/

	return (
		<div>
			<Row type="flex" align="middle" justify="center">
				<Col span={16} className="head">
					<h2>Keep 记账</h2>
					<div className="month">选择月份</div>
					<Row className="stat_date">
						<Col span={12}>
							<MonthPicker className="head_date" onChange={(date, dateString) => handleChange(dateString)}
													 placeholder="2018年5月"/>
						</Col>
						<Col span={6}>
							收入: 1000
						</Col>
						<Col span={6}>
							支出: 2000
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	)
}

export default Header