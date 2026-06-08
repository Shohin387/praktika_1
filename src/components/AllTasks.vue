<script setup>
import { ref } from 'vue';
import Task from './Task.vue';
import Form from './Form.vue';

const tasks = ref([
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
])

const addTask = (name, disc) => {
	if (name && disc) {
		tasks.value.push({id: tasks.value.at(-1)?.id + 1 || 1,nameTask: name, discriptionTask: disc})

	}

	console.log(tasks.value)
}

const delTask = (id) => {
	tasks.value = tasks.value.filter(el => {
		console.log(el + '     ' + id)
		return el.id != id
	}) 
	console.log(tasks.value)
}


</script>

<template>
	<main class="main">
		<Form :addTask="addTask"/>
		<ul class="ul">
			<li class="taskBlock" v-for="i in tasks.length">
				<Task :id="tasks[i-1].id" :delTask="delTask" :nameTask="tasks[i-1].nameTask" :disciptionTask="tasks[i-1].discriptionTask" />
			</li>
		</ul>
		
	</main>
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