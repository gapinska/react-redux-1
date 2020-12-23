import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyChocolate } from '../store'

function ChocolateContainer() {
	const numOfChocolates = useSelector((state) => state.chocolate.numOfChocolates)
	const dispatch = useDispatch()
	return (
		<div>
			<h2>Number of chocolates - {numOfChocolates}</h2>
			<button onClick={() => dispatch(buyChocolate())}>Buy Chocolate</button>
		</div>
	)
}

export default ChocolateContainer
