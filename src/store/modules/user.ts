import { Users } from '../../api'
import { Map } from '../../models/map'

const state = {
	user : {
		company: null,
		email: null	
	},
	tags : [],
	friends : [],
	map: new Map()
}

const getters = {
	user: state => state.user,
	company : state => state.user.company,
	email : state => state.user.email,
	tags : state => state.tags,
	friends : state => state.friends,
	map : state => state.map
}

const actions = {
	
}
