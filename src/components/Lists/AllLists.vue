<script setup>
import { ref } from 'vue';
import Form from '../Form.vue';
import List from './List.vue';

const lists = ref([
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
		lists.value.push({id: lists.value.at(-1)?.id + 1 || 1,nameTask: name, discriptionTask: disc})

	}

	console.log(lists.value)
}

const delTask = (id) => {
	lists.value = lists.value.filter(el => {
		console.log(el + '     ' + id)
		return el.id != id
	}) 
	console.log(lists.value)
}


</script>

<template>
	<div class="main">
		<Form :addTask="addTask"/>
		<ul class="ul">
			<li class="taskBlock" v-for="i in lists.length">
				<v-checkbox baseColor="rgb(2, 219, 143)" color="rgb(2, 219, 143)" label="">
					
				</v-checkbox>
				<List :id="lists[i-1].id" :delTask="delTask" :nameTask="lists[i-1].nameTask" :disciptionTask="lists[i-1].discriptionTask" />
			</li>
		</ul>

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
	grid-template-columns: 40px auto ;
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