import React from 'react'
import { Tabs, Icon } from 'antd';
import PropTypes from 'prop-types'

const TabPane = Tabs.TabPane;

const ViewTab = ({onTabClick}) => {

	return (
		<div>
			<Tabs
				type="card"
				tabBarGutter={20}
				onChange={(e) => onTabClick(e)}
			>
				<TabPane tab={<span><Icon type="ordered-list" />列表模式</span>} key="1"></TabPane>
				<TabPane tab={<span><Icon type="pie-chart" />图表模式</span>} key="2"></TabPane>
			</Tabs>
		</div>
	)
}

ViewTab.propTypes = {
	onTabClick: PropTypes.func.isRequired,
}

export default ViewTab