import axios from 'axios'
import {Dispatch} from 'redux'

import {UserAction, UserActionTypes} from '../../types/users'

export const fetchUsers = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({type: UserActionTypes.FETCH_USERS})
			const response = await axios('https://jsonplaceholder.typicode.com/users')
			setTimeout(() => {
				dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
			}, 600)
			
		} catch (e) {
            dispatch({
            	  type: UserActionTypes.FETCH_USERS_ERROR, 
            	  payload: 'Error occured while downloading users'
            	})
		}
	}
}