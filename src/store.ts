import { createStore } from "vuex";

export default createStore({
	state: {
		tasks: [
			{
				id: 1,
				nameTask: 'some Task', 
				discriptionTask: 'Discription TaskDiscription TaskDiscription TaskDiscription TaskDiscription TaskDiscription TaskDiscription Task',
			},
			{
				id: 2,
				nameTask: 'some Task', 
				discriptionTask: 'Discription Task',
			}
		],

		lists: [
			{
				id: 1,
				nameTask: 'some Task', 
				discriptionTask: 'Discription TaskDiscription TaskDiscription TaskDiscription TaskDiscription TaskDiscription TaskDiscription Task',
			},
			{
				id: 2,
				nameTask: 'some Task', 
				discriptionTask: 'Discription Task',
			}
		]
	},
	
	mutations: {
		ADD_TASK(state, payload) {
			state.tasks.push(payload)
		},

		DEL_TASK(state, payload) {
			state.tasks = state.tasks.filter(el => el.id != payload)
			console.log(state.tasks)
		},

		ADD_LIST(state, payload) {
			state.lists.push(payload)
		},
	},
	
	
})