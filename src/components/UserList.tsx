import React from 'react'
import {useSelector} from 'react-redux'

const UserList: React.FC = () => {
	const state = useSelector(s => s)
	console.log(state)

	return <div></div>

}

export default UserList
