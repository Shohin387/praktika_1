<script setup>
const props = defineProps({
	delTask: Function,
	id: Number,
	nameTask: {
		type: String,
		required: true,
		default: ''
	},
	disciptionTask: {
		type: String,
		required: true,
		default: ''
	},
})
</script>

<template>
	<div>
		<h2><b style="color: rgb(4, 165, 109);">Название:</b> {{ nameTask }}</h2>
		<p style="font-size: 18px;"><b style="color: rgb(4, 165, 109);;">Описание: </b>{{ disciptionTask }}</p>
	</div>
	<button @click="() => delTask(id)" class="delete" type="button">Удалить</button>
	
</template>

<style scoped>
.delete {
	background-color: white;
	color: rgb(100, 200, 167);
	width: 100%;
	border: 2px solid rgb(2, 219, 143);
	height: 45px;
	font-size: 16px;
	cursor: pointer;
	margin: auto;
}
</style>