import React from 'react'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TotalPrice from '../TotalPrice'
configure({ adapter: new Adapter() });



const Props = {
	income: 1000,
	outcome: 2000
}

describe('test TotalPrice component', () => {
	it('component should render correct income&outcome number', () => {
		const wraper = shallow(<TotalPrice {...Props}/>)
		expect(wraper.find('.income span').text() * 1).toEqual(1000)
		expect(wraper.find('.outcome span').text() * 1).toEqual(2000)
	});
})