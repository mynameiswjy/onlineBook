import React from 'react'
import {Tabs, Icon, Row, Col} from 'antd';

const TabPane = Tabs.TabPane;

const ViewTab = () => {
	const tabStyle = {
		backgroundColor: "#bfa",
	}
	return (
		<div>
			<Tabs
				type="card"
				tabBarGutter={20}
			>
				<TabPane tab={<span style={tabStyle}><Icon type="ordered-list" />列表模式</span>} key="1">列表模式</TabPane>
				<TabPane tab={<span><Icon type="pie-chart" />图表模式</span>} key="2">图标模式</TabPane>
			</Tabs>
		</div>
	)
}

export default ViewTab