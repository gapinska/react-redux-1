import react, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../store/user/user'

const UserContainer = ({ userData, fetchUsers }) => {
	useEffect(() => {
		fetchUsers()
	}, [])
	return userData.loading ? (
		<h2>Loading</h2>
	) : userData.error ? (
		<h2>{userData.error}</h2>
	) : (
		<div>
			<h2>User list</h2>
			<div>{userData && userData.users && userData.users.map((user) => <div>{user.name}</div>)}</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		userData: state.user
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUsers: () => dispatch(fetchUsers())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
