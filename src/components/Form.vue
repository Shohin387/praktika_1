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
		<v-text-field base-color="rgb(2, 219, 143)" color="rgb(2, 219, 143)" v-model="nameTask" label="Название задачи">
		</v-text-field>
		<v-text-field base-color="rgb(2, 219, 143)" color="rgb(2, 219, 143)" v-model="discTask" label="Описание задачи">
		</v-text-field>
		<v-btn v-if="!nameTask || !discTask" class='createBtn' loading>
			
		</v-btn>
		<v-btn type="reset" v-if="nameTask  && discTask" @click="() => {
			addTask(nameTask, discTask)
			nameTask = ''
			discTask = ''
		}" class='createBtn'>Создать</v-btn>
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
	font-size: 18px;
	cursor: pointer;
	display: flex;
	justify-self: right;
	width: 100px;
}
</style>