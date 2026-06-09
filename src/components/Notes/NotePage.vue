<script setup>
import Note from './Note.vue';

</script>

<template>
	<section class="cnt">
		<Note />
		<Note />
		<div class="add-note">
			<v-icon-btn icon-size="50px" icon-color="black" class="plus" icon="mdi-plus">
				
			</v-icon-btn>
		</div>
	</section>
	

</template>

<style scoped>
.cnt {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 90%;
}

.add-note {
	width: 330px;
	height: 284px;
	border: 2px solid white;
	border-radius: 35px;
	display: flex;
	place-items: center;
	place-content: center;
	cursor: pointer;
}

.plus {
	background-color: rgb(255, 255, 255);
	width: 50px;
	height: 50px;
}
</style>