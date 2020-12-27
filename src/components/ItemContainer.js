import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../store/cakes/cakesActions'

function ItemContainer(props) {
	return (
		<div>
			<h2>Item - {props.item} </h2>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams
	return {
		item: itemState
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		buyCake: () => dispatch(buyCake())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
