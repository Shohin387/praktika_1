<script setup>
import { ref } from 'vue';

const nameTask = ref('')
const discTask = ref('')

const changeName = (event) => {
	nameTask.value = event.target.value
}

const changeDisc = (event) => {
	discTask.value = event.target.value
}

const props = defineProps({
	addTask: Function
})
</script>

<template>
	<h1>Создание задач</h1>
	<form @submit.prevent action="">
		<input @input="changeName" :value="nameTask" placeholder="Название задачи" class="info" type="text"><br>
		<input @input="changeDisc" placeholder="Описание задачи" class="info" type="text"><br>
		<button @click="() => addTask(nameTask, discTask)" type="button" class='createBtn'>Создать</button>
	</form>
</template>

<style scoped>
.info {
	border: 2px solid rgb(2, 219, 143);
	height: 37px;
	box-sizing: border-box;
	padding-left:15px ;
	width: 100%;
	margin-bottom: 20px;
	font-size: 16px;
	outline: none;
	border-radius: 5px;

	&::placeholder {
		color: rgb(100, 200, 167);
	}
}

.createBtn {
	background-color: white;
	color: rgb(100, 200, 167);
	border: 2px solid rgb(2, 219, 143);
	font-size: 18px;
	padding: 10px;
	cursor: pointer;
	display: flex;
	justify-self: right;

}
</style>