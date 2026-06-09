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
	
	
</template>


<style scoped>
</style>