<script setup>
import { ref } from 'vue';
import Form from '../Form.vue';
import List from './List.vue';
import { useStore } from 'vuex';


const store = useStore()
const addTask = (name, disc) => {
	if (name && disc) {
		store.commit("ADD_LIST", {id: store.state.lists.at(-1)?.id + 1 || 1,nameTask: name, discriptionTask: disc})

	}

	console.log(store.state.lists)
}


</script>

<template>
	<div class="main">
		<Form :addTask="addTask"/>
		<ul class="ul">
			<li class="taskBlock" v-for="i in store.state.lists.length">
				<v-checkbox baseColor="rgb(2, 219, 143)" color="rgb(2, 219, 143)" label="">
					
				</v-checkbox>
				<List :id="store.state.lists[i-1].id" :delTask="delTask" :nameTask="store.state.lists[i-1].nameTask" :disciptionTask="store.state.lists[i-1].discriptionTask" />
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