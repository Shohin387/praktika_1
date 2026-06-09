<script setup>
import { ref } from 'vue';
import Task from './Task.vue';
import Form from './Form.vue';
import { useStore } from 'vuex';

const store = useStore()
store.state.tasks

const addTask = (name, disc) => {
	if (name && disc) {
		store.commit('ADD_TASK', {id: store.state.tasks.at(-1)?.id + 1 || 1,nameTask: name, discriptionTask: disc})

	}
	
	console.log(store.state.tasks.value)
}

const delTask = (id) => {
	store.commit('DEL_TASK', id)
	console.log(store.state.tasks)
}


</script>

<template>
	<div class="main">
		<Form :addTask="addTask"/>
		<ul class="ul">
			<li class="taskBlock" v-for="i in store.state.tasks.length">
				<Task :id="store.state.tasks[i-1].id" :delTask="delTask" :nameTask="store.state.tasks[i-1].nameTask" :disciptionTask="store.state.tasks[i-1].discriptionTask" />
			</li>
		</ul>

		<List />
	</div>
</template>

<style scoped>
.ul {
	margin: 0;
	padding: 0;
	margin-top: 20px;
}
.taskBlock {
	border-radius: 7px;
	display: grid;
	grid-template-columns: auto 80px;
	width: 100%;
	box-sizing: border-box;
	gap: 20px;
	border: 2px solid rgb(2, 219, 143);
	padding-inline:25px ;
	margin-bottom: 20px;
}
.main {
	margin: auto;

	width: 650px;
}

</style>