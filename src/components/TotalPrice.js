import React from 'react'

const TotalPrice = ({income, outcome}) => {
	console.log(income)
	console.log(outcome)
	return (
		<div>
			<div>
				<h5 className='income'>收入：<span>{income}</span></h5>
			</div>
			<div>
				<h5 className='outcome'>支出：<span>{outcome}</span></h5>
			</div>
		</div>
	)
}
export default TotalPrice